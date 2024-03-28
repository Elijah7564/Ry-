const axios = require('axios');

const Prefixes = [
  '/ai',
  'kim',
  'ryuzaki',
  '+ai',
  'nemo',
  'ai',
  'ask',
];

module.exports = {
  config: {
    name: "ask",
    version: 1.0,
    author: "OtinXSandip",
    longDescription: "AI",
    role: 0,
    category: "𝗥𝘆ū_",
    guide: {
      en: "{p} questions",
    },
},
  langs: {
 en: { prompt: "⚙️➠𝐑𝐘𝐔𝐙𝐀𝐊𝐈 𝐚𝐭 𝐲𝐨𝐮𝐫 𝐬𝐞𝐫𝐯𝐢𝐜𝐞🕵🏽‍♂️",
 response: "𝗉𝗅𝖾𝖺𝗌𝖾! 𝗉𝗅𝖾𝖺𝗌𝖾 𝗐𝖺𝗂𝗍...\n𝖨 𝗐𝗂𝗅𝗅 𝖺𝗇𝗌𝗐𝖾𝗋 𝗒𝗈𝗎𝗋 𝗊𝗎𝖾𝗌𝗍𝗂𝗈𝗇👨🏾‍💻\n𝖾𝗅𝗂𝖺𝗌.𝖻𝖺𝗋𝗎𝗍𝗂"
 }, 
fr: { prompt: "⚙️➠𝑅𝑌𝑈𝑍𝐴𝐾𝐼 à 𝑣𝑜𝑡𝑟𝑒 𝑠𝑒𝑟𝑣𝑖𝑐𝑒🕵🏽‍♂️",
 response: "𝗌𝗏𝗉! 𝗏𝖾𝗎𝗂𝗅𝗅𝖾𝗓 𝗉𝖺𝗍𝗂𝖾𝗇𝗍𝖾𝗋...\n𝗃𝖾 𝗋é𝗉𝗈𝗇𝖽𝗌 à 𝗍𝖺 𝗊𝗎𝖾𝗌𝗍𝗂𝗈𝗇👨🏾‍💻\n𝖾𝗅𝗂𝖺𝗌.𝖻𝖺𝗋𝗎𝗍𝗂" 
} 
},
  onStart: async function ({getLang,value,}){}, onChat: async function ({ api, event, args, message,getLang,value, }){
    try {
      // Triez les préfixes par longueur décroissante
      Prefixes.sort((a, b) => b.length - a.length);
      
      const prefix = Prefixes.find((p) => event.body && event.body.toLowerCase().startsWith(p));
      if (!prefix) {
        return; // Préfixe invalide, ignorer la commande
      }
      const prompt = event.body.substring(prefix.length).trim();
      if (!prompt) {
        await message.reply(getLang(value? "prompt":"prompt"));
        return;
      }

      const response = await axios.get(`https://sandipbaruwal.onrender.com/gpt?prompt=${encodeURIComponent(prompt)}`);
      const answer = response.data.answer;

      await message.reply({ body: `━━━━━━━━━━━━━\n${answer}\n╭━━━━━━━━━━╮\n┃𝗘𝗟𝗜𝗔𝗦 𝗕𝗔𝗥𝗨𝗧𝗜┃\n╰━━━━━━━━━━╯` });
    } catch (error) {
      console.error("Erreur:", error.message);
    }
  }
};
