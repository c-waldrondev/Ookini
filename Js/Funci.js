function puedeReservar(cantidad) {
    if (cantidad <=2) {
        return true;    //Se permiten hasta 2 o 1 Tazas por persona
    } else {
        return false;   //No se permiten Reservas mayores a 2 Tazas por persona
    }
}


if (puedeReservar(2)) {
    console.log("¡Reserva confirmada!");
} else {
    console.log("¡Lo siento, máximo 2 tazas por persona!");
}


let cantidadTazas = 3; // Cambia este número para probar (0, 2, 5, etc.)