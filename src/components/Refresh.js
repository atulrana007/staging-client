import React, { useState } from "react";
import axios from 'axios';

const OTP = (props) => {
  const { detailsState, setDetailsState } = props;
  const getOTP = async (e) => {
    console.log("get-otp", detailsState);
    console.log("f");
    const optionsLogin = {
      "content-type": "application/x-www-form-urlencoded",
    };
    const jsonBody = {
      client_id: "eK0mkkqu8Q03e6uTbP1uuPM8eszgrqf2",
      client_secret: "niZTToFk42DoIOUvShCWYH4S-gb2nND0JG9oHxAZj-en2b3hqCzIZgmvYKRYXoji",
      grant_type: "refresh_token",
      refresh_token: detailsState.refreshToken,
      subrefid: detailsState.param1
    };
    const data = new URLSearchParams(jsonBody).toString();
    try {
      const token = await axios.post("oauth/token", data,
        {
          headers: optionsLogin,
        }
      );
      setDetailsState({...detailsState, accessToken:token.data.access_token,idToken:token.data.id_token,refreshToken:token.data.refresh_token})
      console.log(token);
    } catch (err) {
      console.log(err)
    }
    return
  };
  const parse = getOTP();
  return (
    <div>
      New tokens <br/>
      <b>Access token : </b> {detailsState.accessToken}
      <br/>
      <b>ID token : </b> {detailsState.idToken}
    </div>
  );
};
export default OTP;
