var a = document.getElementById("num1").value;
var b = document.getElementById("num2").value;


function add(){
    var a = document.getElementById("num1").value;
    var b = document.getElementById("num2").value;
    var myInt = parseInt(a, 10);
    var myInt1 = parseInt(b, 10);
    var result = myInt + myInt1;
    // alert(result);
    localStorage.setItem("add",result);
     document.getElementById("demo").innerHTML = result;
}



    function minus(){
    var a = document.getElementById("num1").value;
    var b = document.getElementById("num2").value;

    var result = a - b;
    // alert(result);
    localStorage.setItem("minus",result);
     document.getElementById("demo").innerHTML = result;
}



        function multi(){
    var a = document.getElementById("num1").value;
    var b = document.getElementById("num2").value;

    var result = a * b;
    // alert(result);
    localStorage.setItem("multi",result);
     document.getElementById("demo").innerHTML = result;
}




        function divide(){
    var a = document.getElementById("num1").value;
    var b = document.getElementById("num2").value;

    var result = a / b;
    // alert(result);
    localStorage.setItem("divide",result);
     document.getElementById("demo").innerHTML = result;
}



        function mod(){
    var a = document.getElementById("num1").value;
    var b = document.getElementById("num2").value;

var result = a % b;
    // alert(result);
    localStorage.setItem("mod",result);
     document.getElementById("demo").innerHTML = result;
}




function setVal(){
  var a =  localStorage.getItem("add");
//   alert(a);
       document.getElementById("demo").innerHTML = a;

}
function valClear(){
  var a =  localStorage.clear("add");
     document.getElementById("demo").innerHTML = a;

//   alert(a);
}