import React from "react";
import Grid from "@mui/material/Grid";
import NotificationsBell from "../../components/NotificationsBell/NotificationsBell";
import BasicMenu from "../../components/common/BasicMenu/BasicMenu";

const Authentication = () => {
  return (
    <Grid item xs={8}>
      <NotificationsBell iconColor={"primary"} badgeContent={0} />
      <BasicMenu />
    </Grid>
  );
};

export default Authentication;
