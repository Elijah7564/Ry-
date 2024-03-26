const fs = require("fs-extra");

module.exports = {
  config: {
    name: "restart",
    version: "1.0",
    author: "NTKhang",
    countDown: 5,
    role: 2,
    shortDescription: {
      en: "Restart bot",
      fr: "Redémarrer le bot"
    },
    longDescription: {
      en: "Restart bot",
      fr: "Redémarre le bot"
    },
    category: "𝗔𝗗𝗠𝗜𝗡",
    guide: {
      en: "   {pn}: Restart bot",
      fr: "   {pn}: Redémarrer le bot"
    }
  },

  langs: {
    en: {
      restarting: "🔄 | Erwin is currently being restarted 💡..."
    },
    fr: {
      restarting: "🔄 | Erwin est en train d'être redémarré 💡..."
    }
  },

  onLoad: function ({ api }) {
    const pathFile = `${__dirname}/tmp/restart.txt`;
    if (fs.existsSync(pathFile)) {
      const [tid, time] = fs.readFileSync(pathFile, "utf-8").split(" ");
      api.sendMessage(`✅ | Erwin a été redemarré\n⏰ | Temps qu'il a fallu: ${(Date.now() - time) / 1000}s`, tid);
      fs.unlinkSync(pathFile);
    }
  },

  onStart: async function ({ message, event, getLang }) {
    const pathFile = `${__dirname}/tmp/restart.txt`;
    fs.writeFileSync(pathFile, `${event.threadID} ${Date.now()}`);
    await message.reply(getLang("restarting"));
    process.exit(2);
  }
};
