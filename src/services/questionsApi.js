import api from "./api";
import createConfig from "./helpers";

async function postAnswer(token, answerId) {
    const config = createConfig(token);

    const response = await api.post(`/questions/answer/${answerId}`, {}, config);

    return response.data;
}

export { postAnswer };
