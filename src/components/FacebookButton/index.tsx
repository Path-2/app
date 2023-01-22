import { IconButton } from "@mui/material";
import env from "react-dotenv";
import {
  IResolveParams,
  LoginSocialFacebook,
  objectType,
} from "reactjs-social-login";
import { ReactComponent as FacebookIcon } from "../../assets/icons/facebook.svg";

export default function FacebookButton() {
  const clientId = env.FACEBOOK_APP_ID || "";
  const size = { width: 35, height: 35 };

  const onSuccess = ({ provider, data }: IResolveParams) => {
    console.log("data", data);
    console.log("provider", provider);
  };
  const onFailure = (reject: string | objectType) => {
    console.log("reject", reject);
  };

  return (
    <LoginSocialFacebook
      appId={clientId}
      onReject={onFailure}
      onResolve={onSuccess}
    >
      <IconButton>
        <FacebookIcon {...size} />
      </IconButton>
    </LoginSocialFacebook>
  );
}
