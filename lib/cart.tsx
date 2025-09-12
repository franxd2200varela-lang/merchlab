'use client'
import { createContext, useContext, useEffect, useMemo, useState } from 'react'

export type CartItem = { id:string; name:string; price:number; qty:number; image?:string; options?:Record<string,string> }
type Ctx = {
  items: CartItem[];
  add: (item: Omit<CartItem,'qty'>, qty?:number)=>void;
  remove: (id:string)=>void;
  clear: ()=>void;
  count: number;
  total: number;
}
const CartContext = createContext<Ctx | null>(null)

export function CartProvider({children}:{children:React.ReactNode}){
  const [items,setItems]=useState<CartItem[]>([])
  useEffect(()=>{
    const raw=localStorage.getItem('cart')
    if(raw) setItems(JSON.parse(raw))
  },[])
  useEffect(()=>{ localStorage.setItem('cart', JSON.stringify(items)) },[items])

  const add: Ctx['add']=(item,qty=1)=>{
    setItems(prev=>{
      const i=prev.findIndex(p=>p.id===item.id)
      if(i>=0){ const cp=[...prev]; cp[i]={...cp[i], qty: cp[i].qty+qty}; return cp }
      return [...prev, {...item, qty}]
    })
  }
  const remove=(id:string)=> setItems(prev=>prev.filter(p=>p.id!==id))
  const clear=()=>setItems([])
  const count=useMemo(()=>items.reduce((a,b)=>a+b.qty,0),[items])
  const total=useMemo(()=>items.reduce((a,b)=>a+b.qty*b.price,0),[items])

  return <CartContext.Provider value={{items,add,remove,clear,count,total}}>{children}</CartContext.Provider>
}
export function useCart(){ const v=useContext(CartContext); if(!v) throw new Error('useCart'); return v }
