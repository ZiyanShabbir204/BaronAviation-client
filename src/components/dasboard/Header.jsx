import { useAuth } from "@/contexts/auth.context";

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

      <h2 className="hero-heading">{user?.username}</h2>
    </div>
  );
}
