import useAsync from "../useAsync";
import * as authApi from "../../services/authApi";

export default function useSignIn() {
    const { loading: signInLoading, act: signIn, error: signInError, data: signInData } = useAsync(authApi.signIn, false);

    return {
        signInLoading,
        signIn,
        signInError,
        signInData
    };
}
