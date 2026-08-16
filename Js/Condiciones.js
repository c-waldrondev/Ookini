// Máximo y mínimo  de tazas por persona (2-1)

const tazasMax = 2;
const tazasxPersona = 2;    

if (tazasxPersona > tazasMax) console.log (`¡Sólo puedes reservar ${tazasMax} tazas!`);
else if (tazasxPersona < 1) console.log ("¡Debes apartar al menos 1 taza!"); 
else console.log ("¡Reserva exitosa!");


