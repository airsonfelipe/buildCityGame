function setup() {
  createCanvas(1500, 700);
  background('#A52A2A'); // Fundo marrom
}

function draw() {
  background('#A52A2A'); // Redesenha fundo (evita traços)
  church(); // Igreja
  drawCivilians(); // Civis na tela
}
