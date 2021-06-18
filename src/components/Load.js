import { Loader, Dimmer } from "semantic-ui-react";
function Load() {
  return (
    <Dimmer active>
      <Loader inverted>Loading....</Loader>
    </Dimmer>
  );
}

export default Load;
