import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { products } from "../data/products";

function NavItem({ to, hash, end, children }) {
  const targetHash = to.includes("#") ? to.slice(to.indexOf("#")) : "";
  if (targetHash) {
    return <Link className={hash === targetHash ? "active" : undefined} to={to}>{children}</Link>;
  }
  return <NavLink to={to} end={end}>{children}</NavLink>;
}

const linksBefore = [
  { to: "/", label: "Home", end: true },
];

const linksAfter = [
  { to: "/#who", label: "Who we help" },
  { to: "/#process", label: "Process" },
  { to: "/#questions", label: "Questions" },
  { to: "/contact", label: "Contact" },
];

function ProductsMenu({ open, setOpen, pathname }) {
  const current = pathname.startsWith("/products");

  return (
    <div className={`nav-menu${open ? " is-open" : ""}`}>
      <button
        type="button"
        className={current ? "active" : undefined}
        aria-expanded={open}
        aria-controls="products-menu"
        onClick={() => setOpen((value) => !value)}
      >
        Products
        <span className="caret" aria-hidden="true" />
      </button>
      <div className="submenu" id="products-menu">
        <NavLink to="/products" end>All products</NavLink>
        {products.map((product) => (
          <NavLink key={product.slug} to={`/products/${product.slug}`}>{product.title}</NavLink>
        ))}
      </div>
    </div>
  );
}

export default function Layout() {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    setProductsOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        setProductsOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className={`site-header${stuck ? " is-stuck" : ""}`}>
        <div className="wrap header-inner">
          <NavLink className="logo" to="/" end>
            <img src="/mark.png" alt="" width="48" height="38" />
            <span>Agri Scale<br />Solutions</span>
          </NavLink>
          <button
            className="nav-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">Menu</span>
            <span className="bars" />
          </button>
          <nav className={`nav${open ? " is-open" : ""}`} id="site-nav">
            {linksBefore.map((link) => (
              <NavItem key={link.to} to={link.to} hash={location.hash} end={link.end}>{link.label}</NavItem>
            ))}
            <ProductsMenu open={productsOpen} setOpen={setProductsOpen} pathname={location.pathname} />
            {linksAfter.map((link) => (
              <NavItem key={link.to} to={link.to} hash={location.hash} end={link.end}>{link.label}</NavItem>
            ))}
            <NavLink className="button" to="/contact">Request a consultation</NavLink>
          </nav>
        </div>
      </header>
      <main id="main">
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="wrap footer-inner">
          <div>
            <strong>Agri Scale Solutions</strong>
            <p>Growth · Technology · Strategy for farms and agricultural businesses.</p>
          </div>
          <nav className="footer-nav" aria-label="Footer">
            {linksBefore.map((link) => (
              <NavItem key={link.to} to={link.to} hash={location.hash} end={link.end}>{link.label}</NavItem>
            ))}
            <NavLink to="/products">Products</NavLink>
            {linksAfter.map((link) => (
              <NavItem key={link.to} to={link.to} hash={location.hash} end={link.end}>{link.label}</NavItem>
            ))}
          </nav>
        </div>
      </footer>
    </>
  );
}
