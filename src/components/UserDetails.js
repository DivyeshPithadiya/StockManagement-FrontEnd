import { Form, Segment } from "semantic-ui-react";

function UserDetails() {
  return (
    <div className="App-header">
      <Segment
        inverted
        style={{ width: "60%", marginTop: "-4%", borderRadius: "10px" }}
      >
        <Segment
          style={{
            backgroundColor: "#282c34",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h4>User Details</h4>
        </Segment>
        <Segment style={{ backgroundColor: "#282c34" }}>
          <Form.Dropdown
            style={{ width: "100%" }}
            //   onChange={(e, val) => {
            //     setName(val.value);
            //   }}
            // options={options}
            placeholder="Name"
            selection
            search
          />

          <Form.Button
            type="submit"
            primary
            style={{ width: "100%", marginTop: "15px" }}
          >
            Get Details
          </Form.Button>
        </Segment>
      </Segment>
    </div>
  );
}

export default UserDetails;
