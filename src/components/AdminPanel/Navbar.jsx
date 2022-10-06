import React from "react";
import style from "../../scss/components/AdminPanel/_navbar.module.scss";
import { NavLink, Link } from "react-router-dom";

const NavbarAdmin = () => {
  return (
    <nav className={style.mainNav}>
      <div className={style.user}>
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
          alt="user-logo"
        ></img>
        <p>Username</p>
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width="80px"
          height="80px"
        >
          <path
            fill="#FFF"
            d="M256 112c-48.6 0-88 39.4-88 88C168 248.6 207.4 288 256 288s88-39.4 88-88C344 151.4 304.6 112 256 112zM256 240c-22.06 0-40-17.95-40-40C216 177.9 233.9 160 256 160s40 17.94 40 40C296 222.1 278.1 240 256 240zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-46.73 0-89.76-15.68-124.5-41.79C148.8 389 182.4 368 220.2 368h71.69c37.75 0 71.31 21.01 88.68 54.21C345.8 448.3 302.7 464 256 464zM416.2 388.5C389.2 346.3 343.2 320 291.8 320H220.2c-51.36 0-97.35 26.25-124.4 68.48C65.96 352.5 48 306.3 48 256c0-114.7 93.31-208 208-208s208 93.31 208 208C464 306.3 446 352.5 416.2 388.5z"
          />
        </svg> */}
      </div>
      <div className={style.menu}>
        <NavLink to="/admin/statistics">
          <button>Statistics</button>
        </NavLink>
        <NavLink to="/admin/users">
          <button>Users</button>
        </NavLink>
        <NavLink to="/admin/function">
          <button>Functions</button>
        </NavLink>
        <NavLink to="/admin/bookings">
          <button>Bookings</button>
        </NavLink>
      </div>
      <div className={style.footer}>
        <div>
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="magicoon-Filled"
            >
              <title>home</title>
              <g id="home-Filled">
                <path
                  id="home-Filled-2"
                  data-name="home-Filled"
                  class="cls-1"
                  d="M21.5,11.01V17A4.5,4.5,0,0,1,17,21.5H14.5V17a2.5,2.5,0,0,0-5,0V21.5H7A4.5,4.5,0,0,1,2.5,17V11.01a4.477,4.477,0,0,1,1.678-3.5l5-4.018a4.529,4.529,0,0,1,5.643,0l5,4.018A4.475,4.475,0,0,1,21.5,11.01Z"
                />
              </g>
            </svg>
          </Link>
          <Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M22 6.62219V17.245C22 18.3579 21.2857 19.4708 20.1633 19.8754L15.0612 21.7977C14.7551 21.8988 14.449 22 14.0408 22C13.5306 22 12.9184 21.7977 12.4082 21.4942C12.2041 21.2918 11.898 21.0895 11.7959 20.8871H7.91837C6.38776 20.8871 5.06122 19.6731 5.06122 18.0544V17.0427C5.06122 16.638 5.36735 16.2333 5.87755 16.2333C6.38776 16.2333 6.69388 16.5368 6.69388 17.0427V18.0544C6.69388 18.7626 7.30612 19.2684 7.91837 19.2684H11.2857V4.69997H7.91837C7.20408 4.69997 6.69388 5.20582 6.69388 5.91401V6.9257C6.69388 7.33038 6.38776 7.73506 5.87755 7.73506C5.36735 7.73506 5.06122 7.33038 5.06122 6.9257V5.91401C5.06122 4.39646 6.28572 3.08125 7.91837 3.08125H11.7959C12 2.87891 12.2041 2.67657 12.4082 2.47423C13.2245 1.96838 14.1429 1.86721 15.0612 2.17072L20.1633 4.09295C21.1837 4.39646 22 5.50933 22 6.62219Z"
                fill="#030D45"
              />
              <path
                d="M4.85714 14.8169C4.65306 14.8169 4.44898 14.7158 4.34694 14.6146L2.30612 12.5912C2.20408 12.49 2.20408 12.3889 2.10204 12.3889C2.10204 12.2877 2 12.1865 2 12.0854C2 11.9842 2 11.883 2.10204 11.7819C2.10204 11.6807 2.20408 11.5795 2.30612 11.5795L4.34694 9.55612C4.65306 9.25261 5.16327 9.25261 5.46939 9.55612C5.77551 9.85963 5.77551 10.3655 5.46939 10.669L4.7551 11.3772H8.93878C9.34694 11.3772 9.7551 11.6807 9.7551 12.1865C9.7551 12.6924 9.34694 12.7936 8.93878 12.7936H4.65306L5.36735 13.5017C5.67347 13.8052 5.67347 14.3111 5.36735 14.6146C5.26531 14.7158 5.06122 14.8169 4.85714 14.8169Z"
                fill="#030D45"
              />
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarAdmin;
