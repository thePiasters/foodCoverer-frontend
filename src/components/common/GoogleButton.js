import { GoogleLogin, GoogleLogout } from "react-google-login";
import { t } from "dictionaries/en";

const GoogleButton = (props) => {
  const REDIRECT = "redirect";
  const SINGLE_HOST_ORIGIN = "single_host_origin";

  const { isLoggedIn } = props;
  if (isLoggedIn) {
    return (
      <GoogleLogout
        clientId={process.env.REACT_APP_CLIENT_ID}
        buttonText={t.Common.logout}
        onLogoutSuccess={props.onSignoutSuccess}
      ></GoogleLogout>
    );
  } else {
    return (
      <GoogleLogin
        id="nav-bar-log-in"
        className="googleButton"
        clientId={process.env.REACT_APP_CLIENT_ID}
        buttonText={props.loginText ? props.loginText : t.Common.login}
        onSuccess={props.onLoginSuccess}
        onFailure={props.onLoginFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
        uxMode="redirect"
        redirectUri={process.env.REACT_APP_FRONT_BASE_URL}
      />
    );
  }
};
export default GoogleButton;
