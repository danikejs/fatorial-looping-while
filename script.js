function fatorial() {
    num = parseInt(document.getElementById("num").value);
    fat = 1;
    i = 1;
 
   do {
        fat=fat*i;
        i++;
    } while (i<=num)
 
    document.getElementById("resp").innerHTML =`O fatorial de é ${fat}`;
}
