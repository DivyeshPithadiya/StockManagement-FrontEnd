import React, { useState } from "react";
import { Form } from "semantic-ui-react";
import { Segment } from "semantic-ui-react";
import axios from "axios";
import Load from "./Load";

function Users() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone1, setPhone1] = useState(null);
  const [phone2, setPhone2] = useState(null);
  const [adhar, setAdhar] = useState(null);
  const [pan, setPan] = useState(null);
  const [address, setAddress] = useState(null);

  const [ename, seteName] = useState(null);
  const [ephone1, setePhone1] = useState(null);
  const [ephone2, setePhone2] = useState(null);
  const [eadhar, seteAdhar] = useState(null);
  const [epan, setePan] = useState(null);
  const [eaddress, seteAddress] = useState(null);

  const [apiError, setApierror] = useState(null);
  const [response, setResponse] = useState(null);

  const [loading, setLoading] = useState(null);

  const submit = async (e) => {
    if (
      ename === true &&
      ephone1 === true &&
      ephone2 === true &&
      eadhar === true &&
      epan === true &&
      eaddress === true
    ) {
      // API Call to store user Details

      console.log("Form is Correct");
      setLoading(true);

      await axios
        .post("http://localhost:8080/storeuser", {
          username: name,
          emailid: email,
          mobno: phone1,
          mobno2: phone2,
          aadharid: adhar,
          pancardid: pan,
          address: address,
          isactive: 0,
          isdeleted: 0,
        })
        .then((response) => {
          setApierror(false);
          setResponse(response.data);
          setLoading(false);
        })
        .catch(() => {
          setApierror(true);
          setResponse(null);
          setLoading(false);
        });
    } else {
      console.log("Form is incorrect");
      setResponse(null);
    }
  };

  return (
    <>
      <div className="App-header">
        <Segment
          inverted
          style={{ width: "80%", marginTop: "-4%", borderRadius: "10px" }}
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
            <h4>Register New User</h4>
          </Segment>
          <Segment style={{ backgroundColor: "#282c34" }}>
            <Form>
              <Form.Group widths="equal">
                <Form.Input
                  autoFocus
                  id="name"
                  name="name"
                  required
                  icon="user"
                  placeholder="Name"
                  onChange={(e) => {
                    setName(e.target.value);
                    e.target.value.length < 3
                      ? seteName(false)
                      : seteName(true);
                  }}
                ></Form.Input>
                <Form.Input
                  required
                  name="email"
                  type="email"
                  icon="mail"
                  placeholder="Email ID"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                ></Form.Input>
              </Form.Group>
              <Form.Group widths="equal">
                <Form.Input
                  required
                  type="number"
                  name="phone1"
                  icon="phone"
                  placeholder="Mobile Number"
                  onChange={(e) => {
                    setPhone1(e.target.value);
                    e.target.value.length < 10 || e.target.value.length > 10
                      ? setePhone1(false)
                      : setePhone1(true);
                  }}
                ></Form.Input>
                <Form.Input
                  required
                  type="number"
                  name="phone2"
                  icon="phone"
                  placeholder="Alternate Mobile Number"
                  onChange={(e) => {
                    setPhone2(e.target.value);
                    e.target.value.length < 10 || e.target.value.length > 10
                      ? setePhone2(false)
                      : setePhone2(true);
                  }}
                ></Form.Input>
              </Form.Group>
              <Form.Group widths="equal">
                <Form.Input
                  required
                  name="adhar"
                  type="number"
                  icon="id card"
                  placeholder="Aadhar Number"
                  onChange={(e) => {
                    setAdhar(e.target.value);
                    e.target.value.length !== 12
                      ? seteAdhar(false)
                      : seteAdhar(true);
                  }}
                ></Form.Input>
                <Form.Input
                  required
                  name="pan"
                  icon="id card"
                  placeholder="Pan Card Number"
                  onChange={(e) => {
                    setPan(e.target.value);
                    e.target.value.length !== 10
                      ? setePan(false)
                      : setePan(true);
                  }}
                ></Form.Input>
              </Form.Group>
              <Form.Group widths="equal">
                <Form.Input
                  required
                  name="address"
                  icon="location arrow"
                  placeholder="Address"
                  onChange={(e) => {
                    setAddress(e.target.value);
                    e.target.value.length < 5
                      ? seteAddress(false)
                      : seteAddress(true);
                  }}
                ></Form.Input>
              </Form.Group>
              <Form.Button
                onClick={() => {
                  submit();
                }}
                type="submit"
                required
                style={{ width: "100%" }}
                primary
              >
                Register
              </Form.Button>
            </Form>
          </Segment>
          <center>
            {ename === false ? (
              <p style={{ color: "red" }}>Name is too Short</p>
            ) : null}
            {ephone1 === false ? (
              <p style={{ color: "red" }}>Please Enter Proper Mobile Number</p>
            ) : null}
            {ephone2 === false ? (
              <p style={{ color: "red" }}>
                Please Enter Proper Alternet Mobile Number
              </p>
            ) : null}
            {eadhar === false ? (
              <p style={{ color: "red" }}>Please Enter Proper Aadhar Number</p>
            ) : null}
            {epan === false ? (
              <p style={{ color: "red" }}>Please Enter Proper Pan Number</p>
            ) : null}
            {eaddress === false ? (
              <p style={{ color: "red" }}>Address is too Short</p>
            ) : null}

            {apiError === true ? (
              <p style={{ color: "red" }}>Some Error Occured !</p>
            ) : null}
            {response}
          </center>
        </Segment>
        {loading === true ? <Load /> : null}
      </div>
    </>
  );
}

export default <Users />;
