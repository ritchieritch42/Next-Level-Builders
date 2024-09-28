import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navBar">
      <div className="home">
        <Link to="/home">Home</Link>
      </div>
      <div className="about">
        <Link to="/about">About</Link>
      </div>
      <div className="contact">
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export { Navbar };
