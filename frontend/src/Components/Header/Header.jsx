import "./header.scss";

function Header({ client, account }) {
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="title">
          <span className="client">{client}</span> Helpdesk :
          <span className="account">{account}</span>
        </div>
        <span className="feedback">Feedback</span>
      </div>
    </div>
  );
}

export default Header;
