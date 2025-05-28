for (let i =1; i<=15; i++){
    console.log("Iteracion : ", i)
}

for (let i =1; i<=10; i++){
    console.log( 3, "x ", i, "=", 3*i)
}
let suma = 0;
for (let i =1; i<=10; i++){
    if (i % 2 === 0){
        console.log("numero par",i);
        suma+=i;
    }
}
console.log("la suma de los numeros pare es: ", suma);
let palabra="Welcome to Javascript";
for (let i=0; i<palabra.length; i++){
    console.log( palabra[i]);
}
for (let i =1; i<=10; i++){
    console.log( "cuadrado de", i, "es", i*i)
}