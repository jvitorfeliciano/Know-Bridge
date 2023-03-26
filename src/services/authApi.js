import api from "./api";

async function signUp(body) {
    const response = await api.post("/sign-up", body);

    return response.data;
}

export { signUp };
