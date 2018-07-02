function myName() {
    var x = document.forms["myForm"]["fname"].value;
    var y = document.forms["myForm"]["nname"].value;
    var z = document.forms["myForm"]["age"].value;
   
    if (x == ""){
        alert("Name file");
        return false;
    }
    else if(y =="") 
    {
     alert("Father name fill");
        return false;
    }
    
    else if(!isNaN(z))
    {
       
        alert("fill age");
    }
    else
    {
        document.write(x);
        document.write(y);
        document.write(z);
    }
    
}
function myAdd()
{
    var a = document.forms["add"]["a"].value;
    var b = document.forms["add"]["b"].value;
    var c= parseInt(a)+parseInt(b);
    var d= parseInt(a)*parseInt(b);
    alert(c);
    alert(d);
}
var car =["saab", "volvo", "BMW"];
var busss =["tata", "asko", "mahenthra"];
var bus=["one", "two", "three"];
document.getElementById("array").innerHTML=car.concat(busss); 
document.getElementById("join").innerHTML=car.join("*")
bus.pop();
document.getElementById("pop").innerHTML=bus;
bus.push("kiwi");
document.getElementById("push").innerHTML=bus;

