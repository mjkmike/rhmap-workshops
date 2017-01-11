document.getElementById('get_Temp').onclick = function () {
  function getPosition() {
    var options = {
      enableHighAccuracy: true,
      maximumAge: 3600000
    };
    function onSuccess(position) {
      $fh.cloud({
        path: 'currentWeather',
        data: {
          lat: position.coords.latitude,
          lon: position.coords.longitude
        }
      },
      function (res) {
        document.getElementById('cloudResponse').innerHTML = "<p>" + res.msg + "</p>";
      },
      function (code, errorprops, params) {
        alert('An error occured: ' + code + ' : ' + errorprops);
      });
    };
    function onError(error) {
      alert('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
    };
    var watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
  };

  getPosition();
  document.getElementById('cloudResponse').innerHTML = "<p>Calling Cloud.....</p>";
};
