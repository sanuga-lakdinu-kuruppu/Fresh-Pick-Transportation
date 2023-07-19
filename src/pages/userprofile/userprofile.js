import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { NavContext } from "../../context/navcontext";
import SearchBox from "../../components/searchbox/searchbox";
import { IconButton } from "@mui/material";
import { CalendarMonth, NotificationAdd } from "@mui/icons-material";
import BikeRideImg from "../../assets/graphics/images/profile_imgs/delivery-bike-rides-bicycle-img.png";

function UserProfile() {
  const navigate = useNavigate();
  const { navSelected, setNavSelected } = useContext(NavContext);
  const handleNavChange = (params) => {
    navigate(`/${params.key}`);
    setNavSelected(params.key);
  };
  return (
    <div className="min-vh-100">
      <div className="row ms-2 my-3 py-3 h3 fw-bolder primary-color">
        {/* Heading title */}
        <div className="d-inline-block col-auto my-1 align-self-center">
          <div className="d-block main-header fw-bold">
            Logistics For the Future
          </div>
          <div className="d-block secondary-color sub-header fw-normal">
            On - time, every time.
          </div>
        </div>

        {/* search bar and the icon set*/}
        <div className="d-flex col-6 my-1 justify-content-center align-self-center">
          <SearchBox className="w-auto" />
        </div>
        <div className="d-inline-block col-auto my-1">
          <IconButton
            onClick={() =>
              handleNavChange({
                id: 6,
                key: "calendar",
                icon: <CalendarMonth />,
                item: "Calendar",
              })
            }
          >
            <CalendarMonth />
          </IconButton>
          <IconButton
            onClick={() =>
              handleNavChange({
                id: 5,
                key: "notification",
                icon: <NotificationAdd />,
                item: "Notification",
              })
            }
          >
            <NotificationAdd />
          </IconButton>
        </div>
      </div>

      <div className="row">
        {/* User profile Section */}
        <div className="col-12">
          {/* User Name and Role */}
          <div className="row bg-light mb-5 ms-4 py-3 rounded">
            <div className="h4 secondary-color fw-bolder mb-5">
              <div className="d-block float-start">
                <div> Mr. Maduara Perera</div>
                <div className="sub-header">Transportation Company User</div>
              </div>

              <div className="d-block float-end">
                <img
                  className="top-head-image ms-3"
                  src={BikeRideImg}
                  alt="Tempory"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
