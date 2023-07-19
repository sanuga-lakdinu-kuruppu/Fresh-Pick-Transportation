import styled from "@emotion/styled";
import { AccountCircle } from "@mui/icons-material";
import { Badge, IconButton } from "@mui/material";
import React, { useContext } from "react";
import "./usercardstyles.css";
import { useNavigate } from "react-router-dom";
import { NavContext } from "../../context/navcontext";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 2,
    top: 30,
    padding: "0 2px",
    backgroundColor: "#03A9F4",
  },
}));

function UserCard() {
  //Navigation Handle
  const navigate = useNavigate();
  const { navSelected, setNavSelected } = useContext(NavContext);
  const handleNavClicked = (params) => {
    navigate(`/user/${params.id}`);
    setNavSelected("userprofile");
  };

  return (
    <div>
      <div className="row">
        <div className="col-auto d-flex align-items-center justify-content-center">
          <IconButton
            aria-label="cart"
            sx={{}}
            onClick={() => handleNavClicked({ id: 1 })}
          >
            <StyledBadge badgeContent={""} color="secondary">
              <AccountCircle style={{ fontSize: "36px" }} />
            </StyledBadge>
          </IconButton>
        </div>
        <div className="col">
          <div className="">
            <div className="user-card-header">Mr. Madura Perera</div>
            <div className="user-card-title">Transportation Company User</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
