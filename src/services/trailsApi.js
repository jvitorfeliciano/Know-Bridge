import api from "./api";
import createConfig from "./helpers";

async function getTrails(token) {
    const config = createConfig(token);
    const response = await api.get("/trails", config);

    return response.data;
}

async function createEnrollment(token, trailId){
    const config =  createConfig(token);

    const response = await api.post(`/users/${trailId}`,{}, config);

    return response.data;
}

export { getTrails, createEnrollment };
