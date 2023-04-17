import api from "./api";
import createConfig from "./helpers";

async function signUp(body) {
    const response = await api.post("/auth/sign-up", body);

    return response.data;
}

async function signIn(body) {
    const response = await api.post("/auth/sign-in", body);

    return response.data;
}

async function signOut(token) {
    const config = createConfig(token);
    const response = await api.delete("/auth/sign-out", config);

    return response.data;
}

export { signUp, signIn, signOut };
