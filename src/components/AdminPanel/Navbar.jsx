import React from "react";
import style from "../../scss/components/AdminPanel/_navbar.module.scss";
import { NavLink, Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useState } from "react";

const NavbarAdmin = () => {
  const {currentUser, logOut} =  useAuth()
  const [isShown, setIsShown] = useState(false);
  const divIcon = document.querySelector(".divIcon");
  console.log(divIcon);

  const history = useHistory()
  

  async function handleLogOut(){

    try{
      await logOut()
      history.push('/')
    }
    catch(e){
      console.log(e)
    }

  }


  return (
    <nav className={style.mainNav}>
      <ul>
        <li>
          <div className={style.user}>
            {/* <img
              src="https://media.istockphoto.com/photos/beautiful-woman-posing-against-dark-background-picture-id638756792?k=20&m=638756792&s=612x612&w=0&h=PAiwpR6vmkBlctx0kmvGKX3HsBcMdd2PFD4BlEEI7Ac="
              alt="user-logo"
            ></img> */}
            <img
              src={
                currentUser.photoURL
                  ? currentUser.photoURL
                  : "https://media.istockphoto.com/photos/beautiful-woman-posing-against-dark-background-picture-id638756792?k=20&m=638756792&s=612x612&w=0&h=PAiwpR6vmkBlctx0kmvGKX3HsBcMdd2PFD4BlEEI7Ac="
              }
              alt="user-logo"
            ></img>
            <span>{currentUser.displayName}</span>
          </div>
        </li>
        <li>
          <NavLink to="/" className={style.link}>
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
                  d="M21.5,11.01V17A4.5,4.5,0,0,1,17,21.5H14.5V17a2.5,2.5,0,0,0-5,0V21.5H7A4.5,4.5,0,0,1,2.5,17V11.01a4.477,4.477,0,0,1,1.678-3.5l5-4.018a4.529,4.529,0,0,1,5.643,0l5,4.018A4.475,4.475,0,0,1,21.5,11.01Z"
                />
              </g>
            </svg>
            <span>Home</span>
          </NavLink>
        </li>
        <li className={style.statistics}>
          <NavLink to="/admin/statistics/graphics" className={style.link}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Capa_1"
              viewBox="0 0 300.576 300.576"
              xmlSpace="preserve"
            >
              <g>
                <path d="M285.576,2.075c-8.284,0-15,6.716-15,15v251.426H19.15c-8.284,0-15,6.716-15,15s6.716,15,15,15h266.426   c8.284,0,15-6.716,15-15V17.075C300.576,8.791,293.86,2.075,285.576,2.075z" />
                <path d="M190.678,111.676c-1.429-0.618-2.789-1.328-4.091-2.105v127.828c0,5.247,4.253,9.5,9.5,9.5h42c5.247,0,9.5-4.253,9.5-9.5   V68.224l-10.896,25.21C229.023,111.175,208.424,119.345,190.678,111.676z" />
                <path d="M110.296,246.899h42c5.247,0,9.5-4.253,9.5-9.5V104.693l-61,24.183v108.523   C100.796,242.646,105.049,246.899,110.296,246.899z" />
                <path d="M15.004,160.247v77.152c0,5.247,4.253,9.5,9.5,9.5h42c5.247,0,9.5-4.253,9.5-9.5v-98.695l-48.102,19.069   c-4.233,1.679-8.597,2.474-12.889,2.474C15.01,160.247,15.007,160.247,15.004,160.247z" />
                <path d="M20.532,139.182l149.037-59.084l22.223-8.81l-0.998,2.309c-3.287,7.604,0.213,16.434,7.817,19.72   c7.6,3.287,16.433-0.212,19.72-7.817l15.473-35.8c3.287-7.604-0.213-16.434-7.817-19.72l-35.799-15.473   c-7.608-3.292-16.434,0.214-19.72,7.817c-3.287,7.604,0.213,16.434,7.817,19.72l2.807,1.213l-22.446,8.898L9.476,111.293   c-7.701,3.053-11.469,11.771-8.416,19.473C4.11,138.459,12.821,142.237,20.532,139.182z" />
              </g>
            </svg>
            <span>Statistics</span>
            <div
              className={style.divIcon}
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
            >
              <svg
                className={!isShown ? style.dropDownIcon : style.dropFaceDown}
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 492.432 492.432"
                xmlSpace="preserve"
              >
                <g id="XMLID_134_">
                  <path
                    id="XMLID_135_"
                    d="M142.238,492.432c-9.79,0-19.588-3.736-27.05-11.209c-14.945-14.934-14.945-39.162,0-54.098l180.9-180.909   l-180.9-180.91c-14.945-14.935-14.945-39.163,0-54.098c14.926-14.944,39.172-14.944,54.098,0l207.96,207.958   c14.943,14.935,14.943,39.164,0,54.1l-207.96,207.957C161.824,488.697,152.026,492.432,142.238,492.432z"
                  />
                </g>

              </svg>
            </div>
          </NavLink>
          {isShown && (
            <div
              className={style.dropDownMenu}
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
            >
              <ul>
                <li>
                  <NavLink
                    className={style.linkDropDown}
                    to="/admin/statistics/graphics"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignContent: "center",
                      height: "5rem",
                    }}
                  >
                    <span className={style.spanDropDown}>Graphics</span>
                  </NavLink>
                </li>
                <li
                  className={style.liDropDown}
                  style={{
                    width: "100%",
                  }}
                >
                  <NavLink
                    className={style.linkDropDown}
                    to="/admin/statistics/sales"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignContent: "center",
                      height: "5rem",
                    }}
                  >
                    <span className={style.spanDropDown}>Sales</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={style.linkDropDown}
                    to="/admin/statistics/subscriptions"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignContent: "center",
                      height: "5rem",
                    }}
                  >
                    <span className={style.spanDropDown}>Subscriptions</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </li>
        <li>
          <NavLink to="/admin/users" className={style.link}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="magicoon-Filled"
            >
              <title>users</title>
              <g id="users-Filled">
                <path
                  id="users-Filled-2"
                  data-name="users-Filled"
                  className="cls-1"
                  d="M21,18.14v.51a3.208,3.208,0,0,1-.71,2.02.923.923,0,0,1-.74.33H16.87a4.7,4.7,0,0,0,.63-2.35v-.51a5.663,5.663,0,0,0-1.43-3.78,1.108,1.108,0,0,0,.19-.09,2.18,2.18,0,0,1,1.57-.21A4.2,4.2,0,0,1,21,18.14ZM14,4a4.078,4.078,0,0,0-.93.1,5.981,5.981,0,0,1,0,8.8A4.078,4.078,0,0,0,14,13a4.5,4.5,0,0,0,0-9ZM9,4a4.5,4.5,0,1,0,4.5,4.5A4.507,4.507,0,0,0,9,4Zm3.83,10.06A2.393,2.393,0,0,0,12.3,14a2.068,2.068,0,0,0-1.04.27,4.763,4.763,0,0,1-4.5.01A2.247,2.247,0,0,0,5.69,14a2.315,2.315,0,0,0-.46.05A4.177,4.177,0,0,0,2,18.14v.51a3.208,3.208,0,0,0,.71,2.02.923.923,0,0,0,.74.33h11.1a.923.923,0,0,0,.74-.33A3.208,3.208,0,0,0,16,18.65v-.51A4.2,4.2,0,0,0,12.83,14.06Z"
                />
              </g>
            </svg>
            <span>Users</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/showTime" className={style.link}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Layer_1"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
            >
              <g>
                <g>
                  <path d="M49.073,286.157l-27.547-13.108C10.96,269.527,0,277.422,0,288.567v163.578c0,11.123,10.938,19.051,21.527,15.518    c34.82-16.569,18.103-8.617,76.62-36.445V309.494L49.073,286.157z" />
                </g>
              </g>
              <g>
                <g>
                  <path d="M441.661,239.592H179.936c-27.155,0-49.073,21.918-49.073,49.073v163.578c0,27.153,21.918,49.073,49.073,49.073h261.725    c27.155,0,49.073-21.921,49.073-49.073V288.665C490.735,261.511,468.816,239.592,441.661,239.592z" />
                </g>
              </g>
              <g>
                <g>
                  <path d="M414.049,10.683c-54.161-0.022-97.969,43.772-97.951,97.951c-0.017,54.159,43.772,97.969,97.951,97.948    c54.163,0.02,97.969-43.776,97.951-97.948C512.017,54.47,468.228,10.66,414.049,10.683z M414.113,141.284h-0.096    c-18.265,0-32.619-14.666-32.619-32.619c0-18.211,14.524-32.682,32.587-32.682c18.456,0,32.715,14.699,32.715,32.619    C446.7,126.969,432.02,141.284,414.113,141.284z" />
                </g>
              </g>
              <g>
                <g>
                  <path d="M207.548,10.683c-54.161-0.022-97.969,43.772-97.951,97.951c-0.017,54.159,43.772,97.969,97.951,97.948    c54.163,0.02,97.969-43.776,97.951-97.948C305.517,54.47,261.727,10.66,207.548,10.683z M207.612,141.284h-0.096    c-18.265,0-32.619-14.666-32.619-32.619c0-18.211,14.524-32.682,32.587-32.682c18.456,0,32.715,14.699,32.715,32.619    C240.198,126.969,225.52,141.284,207.612,141.284z" />
                </g>
              </g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
            <span>Showtimes</span>
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="/admin/bookings" className={style.link}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Capa_1"
              viewBox="0 0 30.074 30.075"
              xmlSpace="preserve"
            >
              <g>
                <g>
                  <g>
                    <path d="M1.606,13.595l1.91-0.948L3.952,1.641L2.291,1.575C1.412,1.54,0.672,2.223,0.638,3.102l-0.352,8.869     c-0.017,0.422,0.135,0.833,0.421,1.143C0.946,13.372,1.264,13.536,1.606,13.595z" />
                    <path d="M10.387,9.051L8.628,7.197c-0.069-0.073-0.091-0.18-0.056-0.275C8.607,6.827,8.692,6.76,8.793,6.75l2.54-0.268     c0.087-0.009,0.164-0.061,0.205-0.137L12.761,4.1c0.049-0.089,0.144-0.143,0.244-0.139c0.101,0.004,0.19,0.065,0.232,0.157     l1.039,2.335c0.036,0.08,0.107,0.137,0.194,0.153l0.891,0.166l4.827-2.394l0.083-2.091L5.895,1.719l-0.394,9.946l4.95-2.456     C10.444,9.151,10.427,9.095,10.387,9.051z" />
                    <path d="M23.838,2.975c0.479,0,0.938,0.099,1.357,0.273c-0.262-0.468-0.748-0.796-1.323-0.819l-1.66-0.066l-0.041,1.03     l0.098-0.048C22.753,3.104,23.297,2.975,23.838,2.975z" />
                    <path d="M0.884,16.123c-0.378,0.188-0.666,0.52-0.801,0.917c-0.135,0.399-0.104,0.837,0.082,1.215l4.646,9.361     C5.087,28.176,5.652,28.5,6.237,28.5c0.238,0,0.479-0.054,0.706-0.167l1.984-0.982L2.868,15.14L0.884,16.123z" />
                    <path d="M29.909,15.165l-4.646-9.362c-0.275-0.56-0.842-0.884-1.427-0.884c-0.236,0-0.479,0.053-0.706,0.167L21.147,6.07     l6.06,12.211l1.983-0.983c0.378-0.188,0.667-0.519,0.801-0.917C30.126,15.981,30.097,15.543,29.909,15.165z" />
                    <path d="M4.608,14.276l6.06,12.21l14.799-7.342l-6.06-12.212L4.608,14.276z M19.854,19.577c-0.047,0.09-0.142,0.146-0.24,0.145     l-2.979-0.069c-0.087-0.002-0.169,0.039-0.221,0.109l-1.746,2.412c-0.06,0.081-0.16,0.122-0.26,0.104     c-0.1-0.017-0.182-0.088-0.211-0.187l-0.853-2.854c-0.024-0.083-0.089-0.149-0.172-0.176l-2.834-0.915     c-0.096-0.031-0.167-0.114-0.182-0.214c-0.015-0.102,0.029-0.2,0.112-0.258l2.448-1.692c0.072-0.049,0.115-0.131,0.115-0.219     l-0.007-2.978c0-0.101,0.057-0.194,0.148-0.239c0.09-0.045,0.198-0.035,0.278,0.026l2.368,1.807     c0.069,0.053,0.16,0.069,0.243,0.041l2.832-0.926c0.096-0.031,0.2-0.005,0.271,0.067c0.07,0.072,0.095,0.179,0.062,0.274     l-1.032,2.94l1.837,2.517C19.892,19.378,19.899,19.488,19.854,19.577z" />
                  </g>
                </g>
              </g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
            <span>Bookings</span>
          </NavLink>
        </li> */}

        <li>
          <NavLink to="/" className={style.link}>
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
            <span onClick={()=> handleLogOut()}>LogOut</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarAdmin;
