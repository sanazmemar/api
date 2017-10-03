//GET
function loadDoc() {
  var url="https://jsonplaceholder.typicode.com/posts/1";
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = dataLoaded;
  function dataLoaded() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}
//post
function loadDocc() {
  var url="https://jsonplaceholder.typicode.com/posts";
//   var data = {"userId":"1","id":"1"};
//   var json = JSON.parse(data);
// json.userId = "1";
// json.id="2";
var data = {};
data.userId = "1";
data.id  = "2";
var json = JSON.stringify(data);
//xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = dataLoaded;
  function dataLoaded() {
    var posts =JSON.parse(xhr.responseText);
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhr.open("PUT", url+'/1', true);
  xhr.send();
}
