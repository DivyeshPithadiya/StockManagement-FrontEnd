import { Form, Segment } from "semantic-ui-react";

function Installment(props) {
  return (
    <div style={{ backgroundColor: "#282c34", color: "white" }}>
      Premium {props.data} Amount :
      <Form.Input required icon="rupee sign" />
    </div>
  );
}

export default Installment;
