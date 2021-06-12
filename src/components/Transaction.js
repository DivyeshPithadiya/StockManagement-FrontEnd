import { useState } from "react";
import { Form, Segment } from "semantic-ui-react";
import Installment from "./Installments";

function Transaction() {
  const [name, setName] = useState(null);
  const [install, setInstall] = useState(null);

  const [startDate, setStartDate] = useState(null);
  const [endeDate, setEndDate] = useState(null);

  let date = new Date(startDate);
  console.log("Date 1 : " + date);

  console.log(startDate);

  const month = [
    { key: 1, value: 1 },
    { key: 2, value: 2 },
    { key: 3, value: 3 },
    { key: 4, value: 4 },
    { key: 5, value: 5 },
    { key: 6, value: 6 },
    { key: 7, value: 7 },
    { key: 8, value: 8 },
    { key: 9, value: 9 },
    { key: 10, value: 10 },
    { key: 11, value: 11 },
    { key: 12, value: 12 },
  ];
  const quarter = [
    { key: 1, value: 1 },
    { key: 2, value: 2 },
    { key: 3, value: 3 },
    { key: 4, value: 4 },
  ];
  const half = [
    { key: 1, value: 1 },
    { key: 2, value: 2 },
  ];
  const year = [{ key: 1, value: 1 }];

  // Installment options
  const options = [
    { key: 1, text: "Monthly", value: "Monthly" },
    { key: 2, text: "Quarterly", value: "Quarterly" },
    { key: 3, text: "Half Yearly", value: "Half Yearly" },
    { key: 4, text: "Yearly", value: "Yearly" },
  ];

  return (
    <>
      <div className="App-header">
        <Segment inverted style={{ width: "70%", borderRadius: "10px" }}>
          <Segment
            style={{
              backgroundColor: "#282c34",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h4>Transaction Details</h4>
          </Segment>

          <Segment style={{ backgroundColor: "#282c34" }}>
            <Form>
              <Form.Group widths="equal">
                <Form.Dropdown
                  aautoFocus
                  onChange={(e, val) => {
                    setName(val.value);
                  }}
                  options={options}
                  placeholder="Name"
                  selection
                  search
                  //value={value}
                />

                <Form.Dropdown
                  onChange={(e, val) => {
                    setInstall(val.value);
                  }}
                  search
                  options={options}
                  placeholder="Choose an Installment Type"
                  selection
                  //value={value}
                />
              </Form.Group>
              <Form.Group widths="equal">
                <Form.Input
                  required
                  placeholder="Start Date"
                  type="date"
                  name="phone1"
                  onChange={(e) => {
                    setStartDate(e.target.value);
                  }}
                ></Form.Input>
                <Form.Input
                  disabled
                  required
                  type="date"
                  name="phone2"
                  placeholder="End Date"
                  onChange={(e) => {}}
                ></Form.Input>
              </Form.Group>

              {install === "Yearly" ? <Installment /> : null}

              {install === "Half Yearly" ? (
                <div>
                  {half.map((val) => {
                    console.log(val.key);
                    return <Installment data={val.key} />;
                  })}
                </div>
              ) : null}

              {install === "Quarterly" ? (
                <div
                  style={{
                    display: "flex",
                    direction: "row",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                  }}
                >
                  {quarter.map((val) => {
                    console.log(val.key);
                    return <Installment data={val.key} />;
                  })}
                </div>
              ) : null}

              {install === "Monthly" ? (
                <div
                  style={{
                    display: "flex",
                    direction: "row",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                  }}
                >
                  {month.map((val) => {
                    console.log(val.key);
                    return <Installment data={val.key} />;
                  })}
                </div>
              ) : null}

              <Form.Button
                type="submit"
                style={{ width: "100%", marginTop: "15px" }}
                primary
              >
                Submit
              </Form.Button>
            </Form>
          </Segment>
        </Segment>
      </div>
    </>
  );
}

export default <Transaction />;
