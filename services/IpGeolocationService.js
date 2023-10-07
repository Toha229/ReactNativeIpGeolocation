const KEY = "74d382f254054770841b1e4f67b2d317";

export default function GetIpGeolocation(ip, handler) {
  // var IPGeolocationAPI = require("ip-geolocation-api-javascript-sdk");
  // var ipgeolocationApi = new IPGeolocationAPI(
  //   "74d382f254054770841b1e4f67b2d317",
  //   false
  // );

  // var geolocationParams = new GeolocationParams();
  // geolocationParams.setIPAddress("8.8.8.8");

  fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${KEY}&ip=${ip}`)
    .then(function (response) {
      response.json().then((json) => {
        handler(json);
      });
    })
    .catch(function (error) {
      console.log(error);
    });
}

export function GetIpData(ip, handler) {
  fetch(`http://ip-api.com/json/${ip}`)
    .then(function (response) {
      response.json().then((json) => {
        handler(json);
      });
    })
    .catch(function (error) {
      console.log(error);
    });
}
