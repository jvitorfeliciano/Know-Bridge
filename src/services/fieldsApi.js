import api from "./api";
import createConfig from "./helpers";

async function getFieldById(token, fieldId) {
    const config = createConfig(token);

    const response = await api.get(`/fields/${fieldId}`, config);

    return response.data;
}

export { getFieldById };
