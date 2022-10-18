import "./list.scss";
import { Link } from "react-router-dom";

function List({ data }) {
  return (
    <ul className="list">
      {data.map((item) => (
        <li className="listItem" key={item.key}>
          <Link to={item.link} className="link">
            {item.icon ? item.icon : ""}
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default List;
