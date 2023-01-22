import { IconButton } from "@mui/material";
import env from "react-dotenv";
import { IResolveParams, LoginSocialGoogle, objectType } from "reactjs-social-login";
import { ReactComponent as GoogleIcon } from "../../assets/icons/google.svg";

export default function GoogleButton() {
  const clientId = env.GOOGLE_CLIENT_ID || "";
  const size = { width: 35, height: 35 };

  const onSuccess = ({ provider, data }: IResolveParams) => {
    console.log('data', data);
    console.log('provider', provider);
  };
  const onFailure = (reject: string | objectType) => {
    console.log('reject', reject);
  };

  return (
    <LoginSocialGoogle
      client_id={clientId}
      onReject={onFailure}
      onResolve={onSuccess}
    >
      <IconButton>
        <GoogleIcon {...size} />
      </IconButton>
    </LoginSocialGoogle>
  );
}
