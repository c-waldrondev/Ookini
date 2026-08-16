







function puedeReservarHoy (pedidoxPersona, MaxCafexDia) {
    if (pedidoxPersona < 1 || pedidoxPersona > 2) {
        return "Solo puedes pedir entre 1 y 2 tazas por persona";
    }
     
   else if (MaxCafexDia < 1 || MaxCafexDia > 50) {
        return "¡Lo siento, no hay suficientes tazas disponibles para reservar!";
    } 

    else {
        return "Pedido reservado";
    }

}


console.log (puedeReservarHoy(1, 1)); 




