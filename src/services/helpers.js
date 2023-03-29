export default function createConfig(token) {
    const config =
        token !== undefined
            ? {
                  headers: {
                      Authorization: `Bearer ${token}`,
                  },
              }
            : {};
    return config;
}
