import { useSelector } from "react-redux";
import "./Topbar.css";

const Topbar = () => {
  const user = useSelector((state) => state.user.user);
  return (
    <div className="topbar">
      <input type="text" placeholder="Search" />
      <div className="topbar-right">
        <span>🔔</span>
        <span>📩</span>
        <div className="profile">{user.name}</div>
      </div>
    </div>
  );
};

export default Topbar;
