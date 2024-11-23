import { useEffect, useState } from "react";
import MobileMenu from "../components/MobileMenu";
import Menu from "../components/Menu";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/auth.context";
import {
  Popover,
  Avatar,
  MenuItem,
  Typography,
  Divider,
  IconButton,
} from "@mui/material";
import "./setting.css";
import PersonIcon from "@mui/icons-material/Person";
import FlightIcon from "@mui/icons-material/Flight";
import LogoutIcon from "@mui/icons-material/Logout";

export default function Header9({ isSticky }) {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const pageNavigate = (pageName) => {
    navigate(pageName);
  };
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const [addClass, setAddClass] = useState(false);
  const handleScroll = () => {
    if (window.scrollY >= 50) {
      setAddClass(true);
    } else {
      setAddClass(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [anchorEl, setAnchorEl] = useState(null);
  const openPopover = Boolean(anchorEl);

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const firstLetter = user?.username?.charAt(0).toUpperCase();
  return (
    <>
      <header
        className={`header -type-10 js-header  ${
          addClass || isSticky ? "-is-sticky" : ""
        }`}
      >
        {user?.role == "cooperate_customer" && (
          <div className="corporate-header">
            Welcome! Access your corporate dashboard by{" "}
            <Link to="/dashboard">clicking here</Link>.
          </div>
        )}

        <div className="header__container">
          <div className="headerMobile__left">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="header__menuBtn js-menu-button"
            >
              <i className="icon-main-menu text-white"></i>
            </button>
          </div>

          <div className="header__left header_left-flex">
            <div className="header__logo">
              <Link to="/" className="header__logo baron-logo">
                <img src="/img/hero/3/logo.PNG" alt="logo icon" />
              </Link>
              <Link to="/" className="header__logo baron-text">
                <img src="/img/hero/3/logo-text-1.png" alt="logo icon" />
              </Link>

              <div className="text-white" style={{ flex: 1 }}>
                <Menu />
              </div>
            </div>
          </div>

          <div className="headerMobile__right">
            <button
              onClick={() => pageNavigate("/tour-list-1")}
              className="d-flex"
            >
              <i className="icon-search text-18 text-white"></i>
            </button>

            <button
              onClick={() => pageNavigate("/login")}
              className="d-flex ml-20"
            >
              <i className="icon-person text-18 text-white"></i>
            </button>
          </div>

          <div className="header__right">
            {!user && (
              <>
                <Link
                  to="/register"
                  className="button -sm  button-gradient text-white"
                >
                  Sign up
                </Link>

                <Link
                  to="/login"
                  className="button -sm button-gradient text-white ml-30"
                >
                  Log in
                </Link>
              </>
            )}

            {user && (
              <>
                {/* Profile Icon with Popover */}
                <IconButton onClick={handleProfileClick}>
                  <Avatar>{firstLetter}</Avatar>{" "}
                  {/* Display the first letter of username */}
                </IconButton>

                <Popover
                  open={openPopover}
                  anchorEl={anchorEl}
                  onClose={handlePopoverClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "end",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "end",
                  }}
                >
                  <div style={{ width: "230px" }}>
                    {/* Profile Circle with Username */}
                    <MenuItem className="menu-item-1">
                      <Avatar>{firstLetter}</Avatar>{" "}
                      {/* Same circle with the first letter */}
                      <Typography style={{ marginLeft: 8 }}>
                        {user?.username}
                      </Typography>
                    </MenuItem>

                    <Divider />

                    {/* Settings Option */}
                    <MenuItem
                      onClick={() => navigate("/my-profile")}
                      className="menu-item-1"
                    >
                      <PersonIcon className="text-gradient-vivid-orange" />
                      <Typography className="menu-item-text">
                        My Profile
                      </Typography>
                    </MenuItem>
                    <MenuItem
                      onClick={() => navigate("/my-booking")}
                      className="menu-item-1"
                    >
                      <FlightIcon />
                      <Typography className="menu-item-text">
                        My Booking
                      </Typography>
                    </MenuItem>

                    <Divider />

                    {/* Logout Option */}
                    <MenuItem onClick={logout} className="menu-item-1">
                      <LogoutIcon />
                      <Typography className="menu-item-text">Logout</Typography>
                    </MenuItem>
                  </div>
                </Popover>
              </>
            )}
          </div>
        </div>
      </header>
      <MobileMenu
        setMobileMenuOpen={setMobileMenuOpen}
        mobileMenuOpen={mobileMenuOpen}
      />
    </>
  );
}

// export default function Header9({ isSticky }) {
//   const navigate = useNavigate();
//   const { user, logout } = useAuth();

//   const pageNavigate = (pageName) => {
//     navigate(pageName);
//   };

//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // Function to toggle modal visibility
//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen);
//   };

//   const [addClass, setAddClass] = useState(false);
//   const handleScroll = () => {
//     if (window.scrollY >= 50) {
//       setAddClass(true);
//     } else {
//       setAddClass(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   // Popover state management
//   const [anchorEl, setAnchorEl] = useState(null);
//   const openPopover = Boolean(anchorEl);

//   const handleProfileClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handlePopoverClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <>
//       <header
//         className={`header -type-10 js-header  ${addClass || isSticky ? "-is-sticky" : ""}`}
//       >
//         {user?.role == "cooperate_customer" && (
//           <div className="corporate-header">
//             Welcome! Access your corporate dashboard by{" "}
//             <Link to="/dashboard">clicking here</Link>.
//           </div>
//         )}

//         <div className="header__container">
//           <div className="headerMobile__left">
//             <button
//               onClick={() => setMobileMenuOpen(true)}
//               className="header__menuBtn js-menu-button"
//             >
//               <i className="icon-main-menu text-white"></i>
//             </button>
//           </div>

//           <div className="header__left header_left-flex">
//             <div className="header__logo">
//               <Link to="/" className="header__logo baron-logo">
//                 <img src="/img/hero/3/logo.PNG" alt="logo icon" />
//               </Link>
//               <Link to="/" className="header__logo baron-text">
//                 <img src="/img/hero/3/logo-text-1.png" alt="logo icon" />
//               </Link>

//               <div className="text-white" style={{ flex: 1 }}>
//                 <Menu />
//               </div>
//             </div>
//           </div>

//           <div className="headerMobile__right">
//             <button onClick={() => pageNavigate("/tour-list-1")} className="d-flex">
//               <i className="icon-search text-18 text-white"></i>
//             </button>

//             <button onClick={() => pageNavigate("/login")} className="d-flex ml-20">
//               <i className="icon-person text-18 text-white"></i>
//             </button>
//           </div>

//           <div className="header__right">
//             {!user ? (
//               <>
//                 <Link to="/register" className="button -sm button-gradient text-white">
//                   Sign up
//                 </Link>

//                 <Link to="/login" className="button -sm button-gradient text-white ml-30">
//                   Log in
//                 </Link>
//               </>
//             ) : (
//               <>
//                 {/* Profile Icon with Popover */}
//                 <IconButton onClick={handleProfileClick}>
//                   <Avatar>{user?.name?.charAt(0)}</Avatar>
//                 </IconButton>

//                 <Popover
//                   open={openPopover}
//                   anchorEl={anchorEl}
//                   onClose={handlePopoverClose}
//                   anchorOrigin={{
//                     vertical: "bottom",
//                     horizontal: "center",
//                   }}
//                   transformOrigin={{
//                     vertical: "top",
//                     horizontal: "center",
//                   }}
//                 >
//                   <div style={{ width: "200px" }}>
//                     <MenuItem onClick={() => pageNavigate("/settings")}>
//                       <FontAwesomeIcon icon={faCog} style={{ marginRight: 8 }} />
//                       <Typography>Settings</Typography>
//                     </MenuItem>

//                     <Divider />

//                     <MenuItem onClick={logout}>
//                       <Typography>Logout</Typography>
//                     </MenuItem>
//                   </div>
//                 </Popover>
//               </>
//             )}
//           </div>
//         </div>
//       </header>

//       <MobileMenu setMobileMenuOpen={setMobileMenuOpen} mobileMenuOpen={mobileMenuOpen} />
//     </>
//   );
// }
