import React, { Component } from "react";
import { Map, InfoWindow, GoogleApiWrapper, Marker } from "google-maps-react";
import Grid from "@material-ui/core/Grid";

export class About extends Component {
  render() {
    return (
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <h1>Order dishes</h1>

        </Grid>
        <Grid container item xs={12} spacing={6}>

        </Grid>
      </Grid>
    );
  }
}
const LoadingContainer = (props) => (
  <div>Fancy loading container!</div>
)
export default GoogleApiWrapper({
  apiKey: "AIzaSyBcDD4_q7MpnrLQCB0FPgY1--baCbyFfuw",
  LoadingContainer: LoadingContainer
})(About);
