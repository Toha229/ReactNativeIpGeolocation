const KEY = "74d382f254054770841b1e4f67b2d317";

export function GetIpGeolocation(ip, handler) {
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

export function GetUserIp(handler) {
  fetch(`http://ip-api.com/json/`)
    .then(function (response) {
      response.json().then((json) => {
        handler(json.query);
      });
    })
    .catch(function (error) {
      console.log(error);
    });
}
