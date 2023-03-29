export default function createConfig(token) {
    const config =
        token !== undefined
            ? {
                  headers: {
                      Authorization: `Bearer ${token}`,
                  },
              }
            : {};
    console.log(config);
    return config;
}
