import React from "react";
import Grid from "@mui/material/Grid";
import NotificationsBell from "../../components/NotificationsBell/NotificationsBell";
import BasicMenu from "../../components/common/BasicMenu/BasicMenu";

const Authentication = () => {
  return (
    <Grid item xs={8}>
      <NotificationsBell
        iconColor={"primary"}
        badgeContent={0}
        anchorEl={anchorEl}
        onClick={() => console.log("click")}
      />
      <BasicMenu open={open} anchorEl={anchorEl} handleClose={handleClose} />
    </Grid>
  );
};

export default Authentication;
