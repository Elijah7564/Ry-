module.exports = {
  config: {
    name: "stats",
    aliases: ["ping", "upt", "time"],
    version: "1.0",
    author: "OtinXSandip",
    role: 0,
    shortDescription: {
      en: "stats"
    },
    longDescription: {
      en: "shows stats of bot."
    },
    category: "𝗥𝘆ū_",
    guide: {
      en: "Use {p}stats to see stats of bot."
    }
  },

  onStart: async function ({ api, event, args, usersData, threadsData }) {
    try {
      const allUsers = await usersData.getAll();
      const allThreads = await threadsData.getAll();
      const uptime = process.uptime();

      const hours = Math.floor(uptime / 3600);
      const minutes = Math.floor((uptime % 3600) / 60);
      const seconds = Math.floor(uptime % 60);

      const uptimeString = `${hours}Hrs ${minutes}min ${seconds}sec`;

      const currentDate = new Date();
      const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
      const date = currentDate.toLocaleDateString('en-US', options);
      const time = currentDate.toLocaleTimeString('fr-FR', { timeZone: 'Africa/Kinshasa', Hour24: true });

      const timeStart = Date.now();
      await api.sendMessage({
        body: "..."
      }, event.threadID);

      const ping = Date.now() - timeStart;

      let pingStatus = "Not smooth throw your router bitch";
      if (ping < 400) {
        pingStatus = "Smooth like your tiny pussy";
      }

      api.sendMessage({
        body: `╭━━━━━━━━━━━━━━━━╮\n┃🏃🏼‍♂𝖡𝗈𝗍 𝗋𝗎𝗇𝗇𝗂𝗇𝗀 𝗍𝗂𝗆𝖾:\n┃➠${uptimeString}\n┃\n┃📅 ┃𝖣𝖺𝗍𝖾:${date}\n┃⏰ ┃𝖳𝗂𝗆𝖾:➠${time} \n┃🫂 ┃𝖳𝗈𝗍𝖺𝗅 𝖴𝗌𝖾𝗋𝗌 :➠${allUsers.length} \n┃📜 ┃𝖳𝗈𝗍𝖺𝗅 𝗍𝗁𝗋𝖾𝖺𝖽𝗌 :➠${allThreads.length} \n┃🔊 ┃𝖯𝗂𝗇𝗀:➠${ping} \n┃ 🏍┃𝖲𝗉𝖾𝖾𝖽:➠\n┃ 258.071857 𝖬𝖡𝖲\n┃━━━━━━━━━━━━━━━━━╮\n┃facebook.com/eliasbaruti45┃\n╰━━━━━━━━━━━━━━━━━╯`
      }, event.threadID);
    } catch (error) {
      console.error(error);
      api.sendMessage("An error occurred while retrieving data.", event.threadID);
    }
  }
};
