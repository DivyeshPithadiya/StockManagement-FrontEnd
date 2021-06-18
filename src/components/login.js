import { Form, Segment } from "semantic-ui-react";
import "./css/page.css";
export default function Login() {
  return (
    <div className="App-header background-dim">
      <Segment inverted style={{ borderRadius: "10px" }}>
        <Segment
          style={{
            backgroundColor: "#282c34",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h4>Admin Login</h4>
        </Segment>
        <Segment style={{ backgroundColor: "#282c34" }}>
          <Form>
            <Form.Input
              autoFocus
              required
              icon="user"
              placeholder="Username"
            ></Form.Input>

            <Form.Input
              required
              icon="key"
              type="password"
              placeholder="Password"
            ></Form.Input>

            <Form.Button type="submit" style={{ width: "100%" }} primary>
              Log-in
            </Form.Button>
          </Form>
        </Segment>
      </Segment>
    </div>
  );
}
