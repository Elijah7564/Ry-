const axios = require('axios');

const Prefixes = [
  'orochi',
  'ai',
  'chatgpt',
  'gpt',
  'itachi',
];

module.exports = {
  config: {
    name: "chatgpt",
    version: 1.0,
    author: "Aryan Chauhan",
    longDescription: "AI",
    role: 0,
    category: "𝗥𝘆ū_",
    guide: {
      en: "{p} questions",
    },
  },
  onStart: async function () {},
  onChat: async function ({ api, event, args, message }) {
    try {
      
      const prefix = Prefixes.find((p) => event.body && event.body.toLowerCase().startsWith(p));
      if (!prefix) {
        return; // Invalid prefix, ignore the command
      }
      const prompt = event.body.substring(prefix.length).trim();
   if (!prompt) {
        return;
      }


      const response = await axios.get(`https://sandipbaruwal.onrender.com/gpt?prompt=${encodeURIComponent(prompt)}`);
      const answer = response.data.answer;

 
    await message.reply(`📝 𝗖𝗵𝗮𝘁𝗚𝗣𝗧:\n\n${answer}`);

    } catch (error) {
      console.error("Error:", error.message);
    }
  }
};
