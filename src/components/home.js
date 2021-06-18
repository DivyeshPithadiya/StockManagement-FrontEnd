import React from "react";
import Slider from "./carousel";
import { Segment, Header, Divider, Icon, Popup } from "semantic-ui-react";
import "./css/page.css";
import { Card, CardDeck, Popover } from "react-bootstrap";
// import youtube from "./images/youtube.png";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#003366" }}>
      <Slider />
      <Segment style={{ backgroundColor: "#003366" }}>
        <div>
          <Header size="large" style={{ color: "white", textAlign: "center" }}>
            Services We Provide
          </Header>

          <Divider />

          <CardDeck style={{ textAlign: "center" }}>
            <Card>
              <Card.Body>
                <Card.Title>Consultanty Service</Card.Title>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>Call Put</Card.Title>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>Delivery</Card.Title>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>Future and Option</Card.Title>
              </Card.Body>
            </Card>
          </CardDeck>
          <Divider />
          {/* 
          <Card style={{ width: "40%" }}>
            <iframe
              style={{ height: "400px" }}
              src="https://www.youtube.com/embed/TmvCyfUite0"
            ></iframe>
          </Card> */}

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Icon
              className="logo"
              size="big"
              color="white"
              name="youtube"
              style={{ color: "red" }}
              onClick={() => {
                window.open(
                  "https://www.youtube.com/channel/UCyQoB24SsBd-6BDmw08K3tQ"
                );
              }}
            />
            <Icon
              className="logo"
              size="big"
              color="white"
              name="telegram"
              style={{ color: "#0088cc" }}
              onClick={() => {
                window.open("https://appopener.in/url/c42c5 ");
              }}
            />
            <Icon
              className="logo"
              size="big"
              color="white"
              name="facebook"
              style={{ color: "#3b5998" }}
              onClick={() => {
                window.open(
                  "https://www.facebook.com/24-Carat-Series-by-Premal-Soni-100986728833420/?ref=py_c"
                );
              }}
            />
            <Popup
              content="WhatsApp Number : +91 9820278333"
              style={{ backgroundColor: "#4FCE5D" }}
              on="click"
              trigger={
                <Icon
                  className="logo"
                  size="big"
                  color="white"
                  name="whatsapp"
                  style={{ color: "#4FCE5D" }}
                />
              }
            />
          </div>
        </div>
      </Segment>
    </div>
  );
}
