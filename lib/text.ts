export const LETTER_VARIATIONS = {
  r: "r r r r ŕ ṙ ř ȑ ȓ ṛ ŗ ṟ ṝ ɍ",
  R: "R Ŕ Ṙ Ř Ȑ Ȓ Ṛ Ŗ Ṟ Ṝ Ʀ Ɍ Ɽ 𝐑 𝖱",
};

export function getRandomTitle() {
  const seeds: string[] = [
    "rrrr",
    "r",
    "R",
  ]
  return getRandomVariation(choose(seeds));
}

export function getRandomVariation(characters: string[] | string) {
  if (typeof characters === "string") {
    characters = characters.split("");
  }
  
  let variations: string[] = [];
  characters.forEach((char) => {
    if (LETTER_VARIATIONS[char]) {
      const letter = getRandomChar(LETTER_VARIATIONS[char]);
      variations.push(letter);
    } else {
      variations.push(char);
    }
  });

  return variations;
}

function getRandomChar(options: string | string[]) {
  if (typeof options === "string") {
    options = options.split(" ");
  }
  return choose(options);
}

function choose(arr: string[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}