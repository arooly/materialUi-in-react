import React from "react";
import { Badge, Tooltip, IconButton } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import BasicMenu from "../../components/common/BasicMenu/BasicMenu";

const NotificationsBell = ({ iconColor, badgeContent, onClick, anchorEl }) => {
  const newNotifications = `You have ${badgeContent} new notifications`;
  const noNotifications = "You have no notifications";
  return (
    <div>
      <Tooltip title={badgeContent ? newNotifications : noNotifications}>
        <IconButton color={iconColor} onClick={handleOpen} anchorEl={anchorEl}>
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
