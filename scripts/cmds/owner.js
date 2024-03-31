const fs = require('fs');
const moment = require('moment-timezone');

// Array of random messages for nb°1
const randomMessages = [
  "La force ne vient pas seulement de la quantité d'énergie qu'on peut dépenser, mais aussi de la façon dont on l'utilise.",
"Le pouvoir est en vous. Vous contrôlez votre vie et votre destin.",
"N'abandonnez jamais vos rêves, car c'est le début d'une nouvelle aventure.",
"La différence entre un rêve et un objectif, c'est une date limite",
"Le succès n'est pas la clé du bonheur. Le bonheur est la clé du succès. Si vous aimez ce que vous faites, vous réussirez",
"L'avenir appartient à ceux qui croient en la beauté de leurs rêves",
"La seule manière de faire du bon travail est d'aimer ce que vous faites.",
"Le plus grand danger pour la plupart d'entre nous n'est pas que notre objectif soit trop élevé et que nous le manquions, mais qu'il soit trop bas et que nous l'atteignions.",
"N'attends pas que les conditions soient parfaites pour agir, agis avec les conditions que tu as pour faire en sorte qu'elles soient parfaites.",
"Le succès, c'est d'aller d'échec en échec sans perdre son enthousiasme.",
"La seule limite à nos réalisations de demain sera nos doutes d'aujourd'hui.",
  // Add more random messages as needed
];

module.exports = {
 config: {
 name: "info",
 version: "1.0",
 countDown: 20,
 role: 0,
 shortDescription: { vi: "", en: "" },
 longDescription: { vi: "", en: "" },
 category: "𝗥𝘆ū_",
 guide: { en: "" },
 envConfig: {}
 },
 onStart: async function ({ message }) {
 const botName = "𝗥𝗬𝗨𝗭𝗔𝗞𝗜";
 const createDate = "28/ mars/2024";
 const botPrefix = "4";
 const authorName = "ELIAS BARUTI";
 const ownAge = "18";
 const teamName = "ELIASBARUTI™";
 const authorFB = "facebook.com/elias.baruti45";
 const tikTok = "tiktok.com/@eliasbaruti11";
 
 const now = moment().tz('Africa/Kinshasa');
 const date = now.format('MMMM Do YYYY');
 const time = now.format('H:mm:ss');
 
 const uptime = process.uptime();
 const seconds = Math.floor(uptime % 60);
 const minutes = Math.floor((uptime / 60) % 60);
 const hours = Math.floor(uptime / 3600);
 const days = Math.floor(uptime / (60 * 60 * 24));
 const uptimeString = `${days} jrs ${hours} hrs ${minutes} min ${seconds} sec`;

 // Selecting a random message from the array
 const randomMessage = randomMessages[Math.floor(Math.random() * randomMessages.length)];

 message.reply({
 body: `𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡𝗦\n━━━━━━━━━━━━\n
\ 𝗡𝗢𝗠 : ➠${botName}\n
\ 𝗣𝗥𝗘𝗙𝗜𝗫 : ➠${botPrefix}\n
\ 𝗖𝗥ÉÉ 𝗟𝗘 : ➠${createDate}\n
\ 𝗧𝗘𝗠𝗣𝗦 𝗗'𝗘𝗫É𝗖𝗨𝗧𝗜𝗢𝗡:\n ➠${uptimeString}
━━━━━━━━━━━━━━━━━

\ É𝗗𝗜𝗧𝗘𝗨𝗥 𝗗𝗨 𝗕𝗢𝗧:\n➠${authorName}\n
\ â𝗴𝗲 : ➠${ownAge} ans\n
\ 𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 𝗗𝗘 𝗟'É𝗗𝗜𝗧𝗘𝗨𝗥: ➠${authorFB}\n
\ 𝗧𝗜𝗞𝗧𝗢𝗞 𝗗𝗘 𝗟'É𝗗𝗜𝗧𝗘𝗨𝗥:\n ➠${tikTok}\n
\ 𝗗𝗔𝗧𝗘 : ➠${date}\n
\ 𝗧𝗘𝗠𝗣𝗦 : ➠${time}\n
\ É𝗤𝗨𝗜P𝗘 : ➠${teamName}\n
\ ━━━━━━━━━━━━━━━━━━\n
\ 𝗡𝗕°1: ${randomMessage}\n
\ 𝗡𝗕°2: 𝖲𝖨 𝖳𝖴 𝖲𝖯𝖠𝖬𝖬𝖤𝖲📝\n𝖫𝖤 𝖡𝖮𝖳 🤖 T𝖤 𝖡𝖫𝖮𝖰𝖴𝖤 🛡`
 });
 },

 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "info") {
 this.onStart({ message });
 }
 }
};
