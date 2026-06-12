'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="ts-navbar navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand ts-logo-mark" href="/">
          <span className="ts-logo-squares" aria-hidden="true">
            <span></span><span></span>
          </span>
          TerribleSoft™
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#tsNav" aria-controls="tsNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" style={{filter:'invert(1)'}}></span>
        </button>
        <div className="collapse navbar-collapse" id="tsNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-1">
            <li className="nav-item"><Link className="nav-link" href="/products">Products</Link></li>
            <li className="nav-item"><Link className="nav-link" href="#">Products</Link></li>
            <li className="nav-item"><Link className="nav-link" href="/pricing">Pricing</Link></li>
            <li className="nav-item"><Link className="nav-link" href="/press">Press</Link></li>
            <li className="nav-item"><Link className="nav-link" href="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" href="/careers">Careers</Link></li>
            <li className="nav-item ms-lg-2">
              <Link className="btn-ts-primary" href="/contact" style={{padding:'0.5rem 1.25rem', fontSize:'0.88rem'}}>Contact Sales</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
