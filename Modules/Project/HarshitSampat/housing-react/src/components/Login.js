import React from "react";
// import ReactDom from "react-dom";
import GoogleLogin from "react-google-login";
import axios from "axios";

function login() {
  const responseSuccessGoogle = (response) => {
    console.log(response);

    axios({
      method: "Post",
      url: "http://localhost:3001/api/user/googlelogin",
      data: { tokenId: response.tokenId },
    }).then(response => {
      console.log(response);
    });
  };
  const responseErrorGoogle = (response) => {
    console.log("Google Login Success",response);
  };

  return (
    <>
      <div className="text-center text-white bg-warning">
        <h1 className="text-center"> Login through Google</h1>

        <GoogleLogin
          clientId="453908982436-la0ufvl0tp76uictsrcclobevjsmeth7.apps.googleusercontent.com"
          buttonText="Login with google"
          onSuccess={responseSuccessGoogle}
          onFailure={responseErrorGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    </>
  );
}

export default login;
