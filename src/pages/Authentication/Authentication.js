import React from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import NotificationsBell from "../../components/NotificationsBell/NotificationsBell";
import BasicMenu from "../../components/common/BasicMenu/BasicMenu";

const Authentication = () => {
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
    <Grid item xs={8}>
      <NotificationsBell
        iconColor={"primary"}
        badgeContent={0}
        anchorEl={anchorEl}
        onClick={handleOpen}
      />
      <BasicMenu open={open} anchorEl={anchorEl} handleClose={handleClose} />
    </Grid>
  );
};

export default Authentication;
