import api from "./api";
import createConfig from "./helpers";

async function getSubfieldById(token, subfieldId) {
    const config = createConfig(token);

    const response = await api.get(`/subfields/${subfieldId}`, config);

    return response.data;
}

export { getSubfieldById };
