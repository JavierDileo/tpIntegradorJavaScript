function precio(a,b,c){
    a = Number(a);
    b = Number (b);
    c = Number (c);
    return (c*b)-(c*b*a/100);
  }
  document.getElementById("resumen").onclick=function(){
    var a=document.getElementById("categoria").value;
  const c = 200;
  var b=document.getElementById("cantidad").value;
    var total=document.getElementById("precioPagar").innerHTML=precio(a,b,c);
    
  }

  document.getElementById("borrar").onclick=function(){
    document.getElementById("precioPagar").innerHTML=" ";
    document.getElementById("cantidad").value="";
    document.getElementById("nombre").value="";
    document.getElementById("apellido").value="";
    document.getElementById("correo").value="";
  }