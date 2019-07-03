import React, { useContext } from "react";
import { GoogleLogin } from "react-google-login";
import { GraphQLClient } from 'graphql-request';
import { withStyles } from "@material-ui/core/styles";
import Context from "../../context";
// import Typography from "@material-ui/core/Typography";

const ME_QUERY = `
{
  me {
		_id,
    name,
    email,
    picture
  }
}
`;

const Login = ({ classes }) => {
  
  const { dispatch } = useContext(Context);

  const onSuccess = async googleUser => {
    const id_token = googleUser.getAuthResponse().id_token;
    const client = new GraphQLClient('http://localhost:4000/graphql', { // Create a new client
      headers: { authorization: id_token }
    });
    const data = await client.request(ME_QUERY);
    // console.log({ data });
    dispatch({
      type: 'LOGIN_USER',
      payload: data.me
    })
  };

  const onFailure = response => console.log(response);

  return (
    <GoogleLogin
      clientId='29144684875-ofvjb22rtvd1t90bn0db34d91r4l2e84.apps.googleusercontent.com'
      onSuccess={onSuccess}
      onFailure={onFailure}
      isSignedIn={true}
    />
  );
};

const styles = {
  root: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
  }
};

export default withStyles(styles)(Login);
