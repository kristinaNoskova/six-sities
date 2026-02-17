import Logo from '../logo/logo';

function Footer() {
  return (
    <footer className="footer container">
      <Logo
        width={64}
        height={33}
        className="footer__logo-link"
        bemBlock="foote"
        href="main.html"
      />
    </footer>
  );
}

export default Footer;
