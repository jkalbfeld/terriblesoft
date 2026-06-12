import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg ts-navbar sticky-top">
      <div className="container">
        <Link href="/" className="navbar-brand">
          <span style={{display:'inline-flex',alignItems:'center',gap:'0.5rem'}}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect x="2" y="2" width="14" height="14" rx="2" fill="#e8780a" opacity="0.9"/>
              <rect x="8" y="8" width="14" height="14" rx="2" fill="white" opacity="0.25"/>
              <rect x="6" y="6" width="16" height="16" rx="2" fill="none" stroke="white" strokeWidth="1.5"/>
            </svg>
            TerribleSoft™
          </span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-1">
            <li className="nav-item"><Link href="/products" className="nav-link">Products</Link></li>
            <li className="nav-item"><Link href="/products" className="nav-link">Products</Link></li>
            <li className="nav-item"><Link href="/pricing" className="nav-link">Pricing</Link></li>
            <li className="nav-item"><Link href="/press" className="nav-link">Press</Link></li>
            <li className="nav-item"><Link href="/about" className="nav-link">About</Link></li>
            <li className="nav-item"><Link href="/careers" className="nav-link">Careers</Link></li>
            <li className="nav-item"><Link href="/support" className="nav-link">Support</Link></li>
            <li className="nav-item ms-lg-2">
              <Link href="/contact" className="ts-btn-primary" style={{fontSize:'0.85rem',padding:'0.5rem 1.25rem'}}>Contact Sales</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
