function odev1 () {
    console.log(this.responseText);
  }
  
  var nesneCek = new XMLHttpRequest(); //child object
  var url="https://jsonplaceholder.typicode.com/users" // url 
  nesneCek.addEventListener("load", odev1);//listener
  nesneCek.open("GET", url);//open the data
  nesneCek.send();
