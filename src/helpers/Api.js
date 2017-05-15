const protocol = "http";
const domain = "127.0.0.1";
const port = "7000";
const type = "api";
const semver = "v1";
const uri = `${protocol}://${domain}:${port}/${type}/${semver}`;

const getHeaders = () => {
  return {
    "Content-Type": "application/json",
    "Authorization": localStorage.getItem("token"),
  };
};
const Api = {

  authenticate(email_address, password) { // eslint-disable-line
    return fetch(`${uri}/sessions`, {
      method: "POST",
      body: JSON.stringify({
        email_address,
        password,
      }),
    }).then(response => response.json());
  },
};

export default Api;
