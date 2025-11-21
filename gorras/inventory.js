// Inventario simple sin base de datos.
// Edita los valores de stock para habilitar/deshabilitar productos.
// Si stock <= 0, se mostrará "SIN STOCK" y se bloqueará el botón de agregar.
// Puedes conectar esta estructura a una página de admin más adelante.

window.INVENTORY = {
  // DANDY HATS — modelos 1–15
  modelo1:  { stock: 0, name: 'DANDY CLUB LOS ANGELES' },
  modelo2:  { stock: 0, name: 'GORRA DANDY HATS LA DANDY CLUB PURPLE STORM' },
  modelo3:  { stock: 0, name: 'GORRA DANDY HATS DANDY CLUB RESTRICTED SAINT' },
  modelo4:  { stock: 0, name: 'DANDY HATS FUERZA REGIDA DISTRESSED' },
  modelo5:  { stock: 0, name: 'DANDY HATS X RUDEAWAKENINGS JESUS' },
  modelo6:  { stock: 4, name: 'GORRA DANDY HATS "EL MAGO" NEGRA' },
  modelo7:  { stock: 1, name: 'GORRA DANDY HATS JUNIOR H SADBOYZ' },
  modelo8:  { stock: 6, name: 'GORRA DANDY HATS JUNIOR H ANGEL AZUL' },
  modelo9:  { stock: 5, name: 'GORRA DANDY HATS x FUERZA REGIDA "FR Monogram"' },
  modelo10: { stock: 5, name: 'DANDY HATS X RUDE AWAKENING "JEHOVA"' },
  modelo11: { stock: 5, name: 'Dandy Hats "Stay Out"' },
  modelo12: { stock: 5, name: 'DANDY HATS X CANELO "UNDISPUTED"' },
  modelo13: { stock: 5, name: 'Dandy Hats "Dandy Moto"' },
  modelo14: { stock: 5, name: 'I LOVE NY' },
  modelo15: { stock: 5, name: 'FUERZA CRYSTALS' },

  // BARBAS HATS — modelos 16–21 y 29
  modelo16: { stock: 5, name: 'Barbas Hats x CT "ORIENTAL TUMBADO"' },
  modelo17: { stock: 5, name: 'Barbas Hats x CT "27 CT"' },
  modelo18: { stock: 5, name: 'Barbas Hats x CT "GALAXY CT" GOLD 24K PLATED' },
  modelo19: { stock: 5, name: 'Barbas Hats x CT "THREE STARS"' },
  modelo20: { stock: 5, name: 'Barbas Hats x CT "CHROME CT"' },
  modelo21: { stock: 5, name: 'Barbas Hats x Rich The Kid - Rich Stars' },
  modelo29: { stock: 5, name: 'Barbas Hats x Rich The Kid - Rich Forever' },

  // 31 HATS — modelos 22–26 y 30
  modelo22: { stock: 5, name: '31 HATS "باكباك بويز"' },
  modelo23: { stock: 5, name: '31 HATS "LA MOCHILA"' },
  modelo24: { stock: 5, name: '31 HATS "BACKPACK BOYZ"' },
  modelo25: { stock: 5, name: '31 HATS "THIRTY ONE GELATO"' },
  modelo26: { stock: 5, name: '31 HATS "31 FOREVER BLACK"' },
  modelo30: { stock: 5, name: '31 HATS "MAGO - MAGIC CLUB"' },

  // DANDY HATS — colaboración TOMBOCHIO
  modelo27: { stock: 5, name: 'DANDY HATS "Onyx"' },
  modelo28: { stock: 5, name: 'DANDY HATS X TOMBOCHIO' }
};

// Nota: Si agregas nuevos modelos, usa un data-sku en la tarjeta y añade la entrada aquí.