'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  return (
    <nav className="navbar navbar-expand-lg ts-navbar sticky-top">
      <div className="container">
        <Link className="navbar-brand" href="/">
          <span style={{display:'inline-flex',alignItems:'center',gap:'8px'}}>
            <span style={{position:'relative',display:'inline-block',width:'22px',height:'22px',flexShrink:0}}>
              <span className="ts-logo-sq1" style={{position:'absolute',top:0,left:0,width:'14px',height:'14px',background:'#e05c1a',borderRadius:'2px'}}></span>
              <span className="ts-logo-sq2" style={{position:'absolute',bottom:0,right:0,width:'14px',height:'14px',background:'rgba(255,255,255,0.45)',borderRadius:'2px'}}></span>
            </span>
            Terrible<span>Soft</span>™
          </span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-1">
            <li className="nav-item">
              <Link className={`nav-link${pathname === '/products' ? ' active-link' : ''}`} href="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link${pathname === '/products' ? ' active-link' : ''}`} href="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link${pathname === '/pricing' ? ' active-link' : ''}`} href="/pricing">Pricing</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link${pathname === '/press' ? ' active-link' : ''}`} href="/press">Press</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link${pathname === '/about' ? ' active-link' : ''}`} href="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link${pathname === '/careers' ? ' active-link' : ''}`} href="#">Careers</Link>
            </li>
            <li className="nav-item ms-lg-2">
              <Link className="btn btn-sm btn-ts-primary" href="/contact">Contact Sales</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
