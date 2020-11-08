const powerRanger = {cor: "vermelho"}

const jason = Object.create(powerRanger)
jason.nome = "Jason Scott"

for (let i in jason) {
  jason.hasOwnProperty(i) ? console.log(i) : console.log(`Herança: ${i}`);
}