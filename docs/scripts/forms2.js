function myFunction() {
    var x = document.getElementById("select").value;
    if(x=='2'){
      
      document.getElementById("registrodueños").style.display = "inherit"; 
    }else{
      document.getElementById("registrodueños").style.display = "none";
    }
  }