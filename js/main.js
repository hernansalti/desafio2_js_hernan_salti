function correr(){

    let nombre = prompt("Por favor, ingrese su nombre");
    let apellido = prompt("Ahora ingrese su apellido");

    let nh = prompt ("Número de habitación (de 1 a 50)");


    if( nh <=10 ){
        let habitacion = nh;

        alert("Hola " + nombre + " " + apellido );
        alert("Su habitación es la número " + habitacion + " y se encuentra en la planta baja");
    }
    else if( nh <=20 ){
        let habitacion = nh - 10;
    
        alert("Hola " + nombre + " " + apellido );
        alert("Su habitación es la número " + habitacion + " y se encuentra en el primer piso");
    }
    else if( nh <=30 ){
        let habitacion = nh - 20;

        alert("Hola " + nombre + " " + apellido );
        alert("Su habitación es la número " + habitacion + " y se encuentra en el segundo piso");
    }
    else if( nh <=40 ){
        let habitacion = nh - 30;
    
        alert("Hola " + nombre + " " + apellido );
        alert("Su habitación es la número " + habitacion + " y se encuentra en el tercer piso");
        }
    else if( nh <=50 ){
        let habitacion = nh - 40;
    
        alert("Hola " + nombre + " " + apellido );
        alert("Su habitación es la número " + habitacion + " y se encuentra en el cuarto piso");
        }
    else{

        alert("Hola " + nombre + " " + apellido );
        alert("No se encuentra número de habitación, verifique su reserva con su agente de viajes");
    }
}