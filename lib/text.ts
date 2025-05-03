export const LETTER_VARIATIONS = {
  r: "r r ŕ ṙ ř ȑ ȓ ṛ ŗ ṟ ṝ ɍ",
  R: "R R Ŕ Ṙ Ř Ȑ Ȓ Ṛ Ŗ Ṟ Ṝ Ʀ Ɍ Ɽ",
};

export function getRandomTitle() {
  const seeds: string[] = [
    // "rrrr",
    // "r",
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

/**
 * Randomly chooses an element from an array.
 * @param arr The array to choose from.
 * @returns A random element from the array.
 * @example
 * const randomElement = choose(["apple", "banana", "cherry"]);
 * console.log(randomElement); // Could be "apple", "banana", or "cherry"
 */
export function choose(arr: any[] ) {
  return arr[Math.floor(Math.random() * arr.length)];
}