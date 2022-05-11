import React from "react";
import { useState } from "react";
import { Badge, Tooltip, IconButton } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import BasicMenu from "../../components/common/BasicMenu/BasicMenu";

const NotificationsBell = ({ iconColor, badgeContent }) => {
  const newNotifications = `You have ${badgeContent} new notifications`;
  const noNotifications = "You have no notifications";

  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = (event) => {
    setOpen(false);
  };

  return (
    <div>
      <Tooltip title={badgeContent ? newNotifications : noNotifications}>
        <IconButton color={iconColor} onClick={handleOpen}>
          <Badge badgeContent={badgeContent} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Tooltip>
      <BasicMenu anchorEl={anchorEl} open={open} handleClose={handleClose} />
    </div>
  );
};

export default NotificationsBell;
