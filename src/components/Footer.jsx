import "../styles/components/Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <ul>
        <li>© 2023, All rights reserved.</li>
        <a href="mailto:info@astropulse.app">
          <li>Help and Support</li>
        </a>
        <a href="https://appmediaco.com/Policy.html">
          <li>Policy</li>
        </a>
      </ul>
    </div>
  );
};

export default Footer;
