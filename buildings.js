let churchX = 1380; // Posição da igreja
let churchY = 20;
let churchSize = 100; // Tamanho do quadrado da igreja
let civils = []; // Array para armazenar civis

function church() {
  fill(255); // Branco
  noStroke();
  rect(churchX, churchY, churchSize, churchSize); // Igreja
}

function mousePressed() {
  // Verifica se o clique está dentro da igreja
  if (
    mouseX > churchX && mouseX < churchX + churchSize &&
    mouseY > churchY && mouseY < churchY + churchSize
  ) {
    spawnCivil(); // Cria um novo civilHuman
  }
}
