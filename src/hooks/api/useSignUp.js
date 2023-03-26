import useAsync from "../useAsync";
import * as authApi from "../../services/authApi";

export default function useSignUp() {
    const { loading: signUpLoading, act: signUp, error: signUpError } = useAsync(authApi.signUp, false);

    return { signUpLoading, signUp, signUpError };
}
