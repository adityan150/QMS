import "./user.scss";

function User({ data }) {
  return (
    <div className="user">
      <img src={data.img} alt="" />
      <div className="info">
        <div className="uid">
          UID: <span className="value">{data.UID}</span>
        </div>
        <h1 className="name">{data.name}</h1>
        <h2 className="class">({data.desc})</h2>
        <div className="editProfile">edit profile</div>
      </div>
    </div>
  );
}

export default User;
