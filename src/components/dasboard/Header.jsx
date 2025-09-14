import { useAuth } from "@/contexts/auth.context";
import { Link, useNavigate } from "react-router-dom";

export default function Header({ setSideBarOpen }) {
  const { user } = useAuth();
  return (
    <div className="dashboard__content_header">
      <div className="d-flex items-center">
        <div className="mr-60">
          <button
            onClick={() => setSideBarOpen((pre) => !pre)}
            className="d-flex js-toggle-db-sidebar"
          >
            <i className="icon-main-menu text-20"></i>
          </button>
        </div>
      </div>

      <div>
        <Link
          to="/book-flight"
          className="button -sm button-gradient text-white"
        >
          Book Now
        </Link>
        <h2 className="hero-heading">{user?.username}</h2>
      </div>
    </div>
  );
}
