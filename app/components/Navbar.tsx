export default function Navbar() {
  return (
    <nav className="ts-navbar navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="/">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" style={{verticalAlign:'middle',marginRight:'8px'}} xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="11" height="11" rx="2" fill="#e8632a" opacity="0.9"/>
            <rect x="15" y="2" width="11" height="11" rx="2" fill="#e8632a" opacity="0.6"/>
            <rect x="2" y="15" width="11" height="11" rx="2" fill="#e8632a" opacity="0.6"/>
            <rect x="15" y="15" width="11" height="11" rx="2" fill="#e8632a" opacity="0.3"/>
          </svg>
          TerribleSoft<sup style={{fontSize:'0.55em',verticalAlign:'super'}}>™</sup>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
          <span className="navbar-toggler-icon" style={{filter:'invert(1)'}}></span>
        </button>
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-1">
            <li className="nav-item"><a className="nav-link" href="/products">Products</a></li>
            <li className="nav-item"><a className="nav-link" href="/products">Products</a></li>
            <li className="nav-item"><a className="nav-link" href="/pricing">Pricing</a></li>
            <li className="nav-item"><a className="nav-link" href="/press">Press</a></li>
            <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="/careers">Careers</a></li>
            <li className="nav-item ms-lg-2">
              <a className="nav-link btn-nav-cta" href="/contact">Contact Sales</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
