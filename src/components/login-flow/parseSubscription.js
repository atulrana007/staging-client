import React, { useState } from "react";
import { Button } from "reactstrap";

export default function ParseSubscription(props) {
  const { Subscription } = props;

  const [selectedValue, setSelectedValue] = useState(
    Object.keys(Subscription)[0]
  );
  const onChange = (e) => {
    setSelectedValue(e.target.value);
  };
  console.log("-----> value", Subscription[selectedValue]);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <select value={selectedValue} onChange={onChange}>
        {Subscription
          ? Object.keys(Subscription).map(function (key, index) {
              return (
                <option value={key} key={`${index}111`}>
                  {key}
                </option>
              );
            })
          : null}
      </select>
      <Button color="primary" className="mt-5" onClick={() => {}}>
        Refresh token call
      </Button>
      {/* <div style={{ display: "flex", flexDirection: "column" }}>
        <p style={{ fontWeight: "bold" }}>AccessToken: </p>
        <input
          type="text"
          style={{ width: "100%" }}
          value={props.response.AccessToken}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p style={{ marginTop: "0.5rem", wordBreak: "break-all" }}>
          <span style={{ fontWeight: "bold" }}>IdToken:</span>{" "}
        </p>
        <input type="text" value={props.response.IdToken} />
      </div>{" "}
      <div>
        {" "}
        <p style={{ fontWeight: "bold" }}> Custom parameter:</p>
        <input type="text" onChange={(e) => {}}></input>
        <br />
        <Button color="primary" className="mt-5" onClick={() => {}}>
          Refresh token call
        </Button>
      </div> */}
    </div>
  );
}
