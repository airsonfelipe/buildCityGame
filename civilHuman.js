function spawnCivil() {
  let minDistance = 60; // Distância mínima da igreja
  let maxDistance = 100; // Distância máxima da igreja
  let angle = random(0, TWO_PI); // Ângulo aleatório

  // Calcula a posição ao redor da igreja sem sobrepor
  let offsetX = cos(angle) * random(minDistance, maxDistance);
  let offsetY = sin(angle) * random(minDistance, maxDistance);

  let newCivil = {
    x: churchX + churchSize / 2 + offsetX, // Centro da igreja + deslocamento
    y: churchY + churchSize / 2 + offsetY,
    size: 10
  };

  civils.push(newCivil); // Adiciona à lista de civis
}

function drawCivilians() {
  fill(0); // Preto
  noStroke();
  for (let civil of civils) {
    rect(civil.x, civil.y, civil.size, civil.size);
  }
}
