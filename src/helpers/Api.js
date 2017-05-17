const protocol = process.env.PROTOCOL || "https";
const domain = process.env.DOMAIN || "summerpalooza.herokuapp.com";
const port = process.env.PORT || "";
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
