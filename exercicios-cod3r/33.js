const vetoresInteiros = [1, 4, 6, 7];
const vetoresStrings = ["T", "H", "I", "A"];
const vetoresDouble = [6.5, 8.5, 7.5, 2.5];

const join = (vtInteiros, vtStrings, vtDouble) => {
  return vtInteiros.concat(vtStrings).concat(vtDouble);
};

console.log(join(vetoresInteiros, vetoresStrings, vetoresDouble));
