
// 1.How to compare Two JSON have the same properties without order?

// a & b :
   
  let obj1 = { name: "Person 1", age:5 };

  

  let obj2 = { age:5, name: "Person 1" };
  
  if(obj1===obj2){
    console.log(true);
  }
  console.log(false);
  

   

// 2.Use the rest Countries 'API URL' and display all the country flages in the console:

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



// 3.Use the same rest countries and print all countries names,regions,sub-region and populations:



var createreq3 = new XMLHttpRequest();
createreq3.open("GET", "https://restcountries.com/v3.1/all", true)
createreq3.send();
createreq3.onload = function () {
  var data3 = createreq3.response;
  var result3 = JSON.parse(data3);
  console.log(result3);
  for (var i = 0; i < result3.length; i++) {
    console.log("County Name"+' : '+ result3[i].name.common, "|| REGION"+' : '+ result3[i].region,  "|| SUB REGION"+' :  '+  result3[i].subregion , "|| populations"+ " : " + result3[i].population,);
  }


}