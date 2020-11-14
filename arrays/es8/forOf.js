const herois = new Set
herois.add("Superman")
  .add("Batman")
  .add("Mulher-Maravilha")
  .add("Flash")
  .add("Aquaman")
  .add("Ciborgue")
  .add("Aquaman")

for (const heroi of herois) {
  console.log(heroi);
}

const nomeDosHerois = new Map
nomeDosHerois.set("Clark Kent", "Superman")
  .set("Bruce Wayne", "Batman")
  .set("Diana Prince", "Mulher-Maravilha")
  .set("Barry Allen", "Flash")
  .set("Arthur Curry","Aquaman")
  .set("Victor Stone","Ciborgue")

for (const heroi of nomeDosHerois.entries()) {
  console.log(heroi);
}

const hasSuperman = nomeDosHerois.has("Clark Kent")
console.log(hasSuperman);

const hasGreenLantern = nomeDosHerois.has("John Stewart")
console.log(hasGreenLantern);

nomeDosHerois.delete("Barry Allen")

console.log(nomeDosHerois.size)