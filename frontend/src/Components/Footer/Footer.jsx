import "./footer.scss";

function Footer() {
  return (
    <div className="footer">
      <ul className="footerContainer">
        <li className="link">My Campus</li>
        <li className="link">Career</li>
        <li className="link">About</li>
        <li className="link">Support</li>
        <li>
          ©Copyright reserved | <span className="link">Adcratic Studios</span>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
