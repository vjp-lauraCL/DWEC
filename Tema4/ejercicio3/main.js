let kawasaki = new Scooter('Vespa', 10, 20);

console.log("La moto inicialmente: ");
kawasaki.mostrarInfo();



let motoCross = new Motocross('Honda', 10, 5);
console.log("La moto de cross inicialmente: ");
motoCross.mostrarInfo();

console.log("La moto de cross tras arrancar y acelerar");
motoCross.arrancar();
// motoCross.acelerar();
motoCross.mostrarInfo();


