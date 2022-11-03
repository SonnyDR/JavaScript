let dineroRoberto = prompt("Ingrese monto Roberto");
let dineroPedro = prompt("Ingrese monto Pedro");
let dineroCofla = prompt("Ingrese monto Cofla");

dineroRoberto = parseInt(dineroRoberto);
dineroPedro = parseInt(dineroPedro);
dineroCofla = parseInt(dineroCofla);

//ROBERTO
if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
    alert("Roberto Te alcanza para el palito de agua ");
    alert("y te sobra: " + (dineroRoberto - 0.6));
    
}

else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
    alert("Roberto Te alcanza para el palito de crema ");
    alert("y te sobra: " + (dineroRoberto - 1));
}

else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
    alert("Roberto Te alcanza para el Bombon helado marca Heladix ");
    alert("y te sobra: " + (dineroRoberto - 1.6));
}

else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
    alert("Roberto Te alcanza para el Bombon helado marca Heladovich ");
    alert("y te sobra: " + (dineroRoberto - 1.7));
}

else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
    alert("Roberto Te alcanza para el Bombon helado marca Helardo ");
    alert("y te sobra: " + (dineroRoberto - 1.8));
}

else if (dineroRoberto >= 2.9) {
    alert("Roberto Te alcanza para el potecito con confites y pote de 1/4 KG ");
    alert("y te sobra: " + (dineroRoberto - 2.9));
}

else {
    alert('No te alcanza el dinero Roberto')
}

//PEDRO

if (dineroPedro >= 0.6 && dineroPedro < 1) {
    alert("Pedro Te alcanza para el palito de agua ");
    alert("y te sobra: " + (dineroPedro - 0.6));
}

else if (dineroPedro >= 1 && dineroPedro < 1.6) {
    alert("Pedro Te alcanza para el palito de crema ");
    alert("y te sobra: " + (dineroPedro - 1));
}

else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
    alert("Pedro Te alcanza para el Bombon helado marca Heladix ");
    alert("y te sobra: " + (dineroPedro - 1.6));
}

else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
    alert("Pedro Te alcanza para el Bombon helado marca Heladovich ");
    alert("y te sobra: " + (dineroPedro - 1.7));
}

else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
    alert("Pedro Te alcanza para el Bombon helado marca Helardo ");
    alert("y te sobra: " + (dineroPedro - 1.8));
}

else if (dineroPedro >= 2.9) {
    alert("Pedro Te alcanza para el potecito con confites y pote de 1/4 KG ");
    alert("y te sobra: " + (dineroPedro - 2.9));
}

else {
    alert('No te alcanza el dinero Pedro')
}

//COFLA

if (dineroCofla >= 0.6 && dineroCofla < 1) {
    alert("Cofla Te alcanza para el palito de agua ");
    alert("y te sobra: " + (dineroCofla - 0.6));
}

else if (dineroCofla >= 1 && dineroCofla < 1.6) {
    alert("Cofla Te alcanza para el palito de crema ");
    alert("y te sobra: " + (dineroCofla - 1));
}

else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
    alert("Cofla Te alcanza para el Bombon helado marca Heladix ");
    alert("y te sobra: " + (dineroCofla - 1.6));
}

else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
    alert("Cofla Te alcanza para el Bombon helado marca Heladovich ");
    alert("y te sobra: " + (dineroCofla - 1.7));
}

else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
    alert("Cofla te alcanza para el Bombon helado marca Helardo ");
    alert("y te sobra: " + (dineroCofla - 1.8));
}

else if (dineroCofla >= 2.9) {
    alert("Cofla Te alcanza para el potecito con confites y pote de 1/4 KG ");
    alert("y te sobra: " + (dineroCofla - 2.9));
}

else {
    alert('No te alcanza el dinero Cofla')
}