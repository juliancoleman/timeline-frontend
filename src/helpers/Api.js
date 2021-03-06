const protocol = process.env.PROTOCOL || "https";
const domain = process.env.DOMAIN || "summerpalooza.herokuapp.com";
const port = process.env.PORT || "";
const type = "api";
const semver = "v1";
const uri = `${protocol}://${domain}:${port}/${type}/${semver}`;

const getHeaders = () => new Headers({
  "Content-Type": "application/json",
  "Authorization": `Bearer ${localStorage.getItem("token")}`,
});

const Api = {
  // authentication
  authenticate(email_address, password) { // eslint-disable-line
    return fetch(`${uri}/sessions`, {
      method: "POST",
      body: JSON.stringify({
        email_address,
        password,
      }),
    }).then(response => response.json());
  },

  // user
  getUser(userId) {
    return fetch(`${uri}/users/${userId}`, {
      method: "GET",
      headers: getHeaders(),
    });
  },
  getUserByBarcode(barcodeNumber) {
    return fetch(`${uri}/users/barcode/${barcodeNumber}`, {
      method: "GET",
      headers: getHeaders(),
    });
  },

  // camps
  getUserCamps(userId, enrolled = true) {
    return fetch(`${uri}/users/${userId}/camps?enrolled=${enrolled}`, {
      method: "GET",
      headers: getHeaders(),
    });
  },
  getCamp(campId) {
    return fetch(`${uri}/camps/${campId}`, {
      method: "GET",
      headers: getHeaders(),
    });
  },

  // itineraries
  getItinerary(itineraryId) {
    return fetch(`${uri}/itineraries/${itineraryId}`, {
      method: "GET",
      headers: getHeaders(),
    });
  },
  getitineraries() {
    return fetch(`${uri}/itineraries`, {
      method: "GET",
      headers: getHeaders(),
    });
  },

  // check-ins
  checkInStudent(itineraryId, barcode_number) { // eslint-disable-line
    return fetch(`${uri}/itineraries/${itineraryId}/checkin`, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify({ barcode_number }),
    });
  },
};

export default Api;
