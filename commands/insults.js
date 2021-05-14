module.exports = function (msg) {
  const insultosDavid = [
    "ese man es un pirobo",
    "Davicito el del Team Crack? XDDDDD",
    "davicito el pasea perros será",
    "también le llaman el puto lento de mierda xd",
    "davicito care verga",
    "Perro jijijueputa",
    "Ese es bien así",
    'David el de la frase "qué buen chimbo" xd',
    "Perrito, estoy mal, mal, mal, mal, mal",
  ];
  const insultosPedro = [
    "ese man es un pirobo",
    "ahh hablas de Peduro el marica?",
    "Ese men es bien marica",
    "ese debe estar con el W hee-hee",
    "debe estar ordeñando",
    "Perro jijijueputa",
  ];
  const insultosPablito = [
    "Pablo mi negro preferido",
    "el señor constraste, Mrs Pablo",
    "a veces lo ves, a veces no lo ves 🤷‍♀️",
    "El black boy",
    "Perro jijijueputa",
    'En sus propias palabras "Yo soy tan negro". Y así es xd',
  ];
  const insultosCoral = [
    "EMMMM OYEEE [...] xddd",
    "Oye, eres una persona increíble pero no...",
    "El que se dejó ganar por un Negrito",
    "AHH PAPI YO LOS CARREAOO. YO CUANDO COJO LA FANEMA, YO LLEGO A BEE CACHÉE (?) Y MATO, MATO MATOO PERROOOS",
  ];

  if (
    msg.content.includes("coral") ||
    msg.content.includes("CORAL") ||
    msg.content.includes("Coralsito") ||
    msg.content.includes("Coral") ||
    msg.content.includes("Coralsita")
  ) {
    const index = Math.floor(Math.random() * insultosCoral.length);
    msg.reply(insultosCoral[index]);
  }
  if (
    msg.content.includes("davicito") ||
    msg.content.includes("Davicito") ||
    msg.content.includes("DAVICITO") ||
    msg.content.includes("davicita") ||
    msg.content.includes("Davicita") ||
    msg.content.includes("DAVICITA")
  ) {
    const index = Math.floor(Math.random() * insultosDavid.length);
    msg.reply(insultosDavid[index]);
  }
  if (
    msg.content.includes("Peduro") ||
    msg.content.includes("Pedro") ||
    msg.content.includes("PEDRO") ||
    msg.content.includes("PEDURO") ||
    msg.content.includes("PEDRO") ||
    msg.content.includes("pedro") ||
    msg.content.includes("peduro")
  ) {
    const index = Math.floor(Math.random() * insultosPedro.length);
    msg.reply(insultosPedro[index]);
  }
  if (
    msg.content.includes("Pablo") ||
    msg.content.includes("Pablito") ||
    msg.content.includes("PABLO") ||
    msg.content.includes("pablo") ||
    msg.content.includes("pablito") ||
    msg.content.includes("negrito") ||
    msg.content.includes("negro") ||
    msg.content.includes("Negro") ||
    msg.content.includes("NEGRO")
  ) {
    const index = Math.floor(Math.random() * insultosPablito.length);
    msg.reply(insultosPablito[index]);
  }
};
