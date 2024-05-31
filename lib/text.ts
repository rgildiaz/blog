export const LETTER_VARIATIONS = {
  a: "a A À Á Â Ã Ä Å Ā Ă Ą Ǎ Ǟ Ǡ Ǻ Ȁ Ȃ Ȧ Ⱥ Ʌ ɑ ⱥ ɐ 𝐀 𝐚 𝑎 𝒂 𝒜 𝓪 𝔞 𝕒 𝖆 𝗮 𝘢 𝙖 𝚊 𝛂 𝜶 𝝰 𝞐 𝞪",
  f: "f F Ƒ ƒ 𝐅 𝐟 𝑓 𝒇 𝒻 𝓯 𝔣 𝕗 𝖋 𝖥 𝗳 𝘧 𝙛 𝚏",
  i: "i I Ì Í Î Ï Ĩ Ī Ĭ Į İ Ɨ Ǐ Ȉ Ȋ ɨ ɪ ⱼ 𝐈 𝐢 𝑖 𝒊 𝒾 𝓘 𝓲 𝔦 𝕚 𝖎 𝗂 𝗶 𝘪 𝙞 𝚒 𝛊 𝜄 𝝸 𝞘 𝞲",
  r: "r R Ŕ Ṙ Ř Ȑ Ȓ Ṛ Ŗ Ṟ Ṝ Ʀ Ɍ Ɽ ŕ ṙ ř ȑ ȓ ṛ ŗ ṟ ṝ ɍ ℞ ® 𝐑 𝑟 𝑹 𝒓 ℛ 𝓇 𝓡 𝓻 ℜ 𝔯 𝕽 𝖗 ℝ 𝕣 𝚪 𝞒 🐀",
};

export function getRandomTitle() {
  let title: string = "";
  for (let i = 0; i < 3; i++) {
    let char: string = getRandomChar("r a f i");
    title += getRandomVariation(char);
  }
  return title;
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
  return options[Math.floor(Math.random() * options.length)];
}