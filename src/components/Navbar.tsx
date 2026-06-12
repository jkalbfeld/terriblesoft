'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="bg-gray-950 border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="font-black text-xl tracking-tight">Terrible<span className="text-orange-400">Soft</span>™</Link>
        <div className="hidden md:flex items-center gap-8 text-sm">
          <Link href="/products" className="text-gray-400 hover:text-white transition-colors">Products</Link>
          <Link href="/products" className="text-gray-400 hover:text-white transition-colors">Products</Link>
          <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link>
          <Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link>
          <Link href="/press" className="text-gray-400 hover:text-white transition-colors">Press</Link>
          <Link href="/investors" className="text-gray-400 hover:text-white transition-colors">Investors</Link>
          <Link href="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link>
          <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 text-black font-bold px-4 py-2 rounded-lg transition-colors">Contact Sales</Link>
        </div>
        <button className="md:hidden text-gray-400" onClick={() => setOpen(!open)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-800 bg-gray-950 px-6 py-4 space-y-3 text-sm">
          <Link href="/products" className="block text-gray-400 hover:text-white">Products</Link>
          <Link href="/pricing" className="block text-gray-400 hover:text-white">Pricing</Link>
          <Link href="/about" className="block text-gray-400 hover:text-white">About</Link>
          <Link href="/press" className="block text-gray-400 hover:text-white">Press</Link>
          <Link href="/investors" className="block text-gray-400 hover:text-white">Investors</Link>
          <Link href="/careers" className="block text-gray-400 hover:text-white">Careers</Link>
          <Link href="/contact" className="block text-orange-400 font-bold">Contact Sales</Link>
        </div>
      )}
    </nav>
  )
}
