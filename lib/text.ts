export const LETTER_VARIATIONS = {
  a: "a A À Á Â Ã Ä Å Ā Ă Ą Ǎ Ǟ Ǡ Ǻ Ȁ Ȃ Ȧ Ⱥ Ʌ ɑ ⱥ ɐ 𝐀 𝐚 𝑎 𝒂 𝒜 𝓪 𝔞 𝕒 𝖆 𝗮 𝘢 𝙖 𝚊 𝛂 𝜶 𝝰 𝞐 𝞪",
  f: "f F Ƒ ƒ 𝐅 𝐟 𝑓 𝒇 𝒻 𝓯 𝔣 𝕗 𝖋 𝖥 𝗳 𝘧 𝙛 𝚏",
  i: "i I Ì Í Î Ï Ĩ Ī Ĭ Į İ Ɨ Ǐ Ȉ Ȋ ɨ ɪ ⱼ 𝐈 𝐢 𝑖 𝒊 𝒾 𝓘 𝓲 𝔦 𝕚 𝖎 𝗂 𝗶 𝘪 𝙞 𝚒 𝛊 𝜄 𝝸 𝞘 𝞲",
  r: "r r r r ŕ ṙ ř ȑ ȓ ṛ ŗ ṟ ṝ ɍ 𝑟 𝒓 𝓇 𝖗 𝓻 𝕣 𝔯 🐀 ⓡ",
  R: "R Ŕ Ṙ Ř Ȑ Ȓ Ṛ Ŗ Ṟ Ṝ Ʀ Ɍ Ɽ ℛ ℜ ℝ ℞ ® ℜ 𝕽 ℝ 𝐑 𝑅 𝑹 𝓡 𝕽 𝖱 𝗥 𝘙 𝙍 𝚁",
};

export function getRandomTitle() {
  const seeds: string[] = [
    // "rafi",
    // "RRRR", 
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