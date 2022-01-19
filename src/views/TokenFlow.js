import React from "react";
import { Button } from "reactstrap";

function TokenFlow(props) {
  const { tokenFlow, setTokenFlowState } = props;
  const onChange = (e) => {
    setTokenFlowState({
      ...tokenFlow,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      UserName:
      <input
        type="text"
        name="username"
        onChange={(e) => onChange(e)}
        value={tokenFlow.username}
      ></input>
      Password:
      <input
        type="password"
        name="password"
        onChange={(e) => onChange(e)}
        value={tokenFlow.password}
      ></input>
      <Button
        style={{ marginTop: "1rem" }}
        id="qsLoginBtn"
        color="primary"
        className="btn-margin"
      >
        Get Tokens
      </Button>
      {tokenFlow.AccessToken && (
        <label style={{ marginTop: "1rem" }}>
          AccessToken
          <input
            type="text"
            name="AccessToken"
            onChange={(e) => onChange(e)}
            value={tokenFlow.AccessToken}
          ></input>
        </label>
      )}
      {tokenFlow.IdToken && (
        <label style={{ marginTop: "1rem" }}>
          IdToken
          <input
            type="text"
            name="IdToken"
            onChange={(e) => onChange(e)}
            value={tokenFlow.IdToken}
          ></input>
        </label>
      )}
    </div>
  );
}

export default TokenFlow;
