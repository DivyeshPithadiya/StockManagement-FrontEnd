import { Loader, Dimmer } from "semantic-ui-react";
function Load() {
  return (
    <Dimmer active style={{ height: "100%" }}>
      <Loader inverted>Loading....</Loader>
    </Dimmer>
  );
}

export default Load;
