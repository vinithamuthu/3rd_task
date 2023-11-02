var createreq = new XMLHttpRequest();
createreq.open("GET", "https://restcountries.com/v3.1/all", true)
createreq.send();
createreq.onload = function () {
  var data = createreq.response;
  var result = JSON.parse(data);
  console.log(result);
  for (var i = 0; i < result.length; i++) {
    console.log(result[i].name.common, result[i].flag);
  }


}