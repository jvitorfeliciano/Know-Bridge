import api from "./api";
import createConfig from "./helpers";

async function getUserCourses(token, userName) {
    const config = createConfig(token);
    const response = await api.get(`/users/${userName}`, config);

    return response.data;
}

export { getUserCourses };
