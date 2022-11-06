function osszead() {
    var szam1 = document.getElementById("szam1").value;
    var szam2 = document.getElementById("szam2").value;
    var eredmeny =Number(szam1) + Number(szam2);
    document.getElementById("eredmeny").innerHTML = eredmeny;
}
function kivon() {
    var szam1 = document.getElementById("szam1").value;
    var szam2 = document.getElementById("szam2").value;
    var eredmeny =Number(szam1) - Number(szam2);
    document.getElementById("eredmeny").innerHTML = eredmeny;
}
function szoroz() {
    var szam1 = document.getElementById("szam1").value;
    var szam2 = document.getElementById("szam2").value;
    var eredmeny =Number(szam1) * Number(szam2);
    document.getElementById("eredmeny").innerHTML = eredmeny;
}
function oszt() {
    var szam1 = document.getElementById("szam1").value;
    var szam2 = document.getElementById("szam2").value;
    var eredmeny =Number(szam1) / Number(szam2);
    document.getElementById("eredmeny").innerHTML = eredmeny;
}
