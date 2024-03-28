const fs = require("fs-extra");
const axios = require("axios");
const path = require("path");
const { commands, aliases } = global.GoatBot;
const doNotDelete = "[]";

module.exports = {
  config: {
    name: "help",
    version: "1.17",
    author: "NTKhang",
    countDown: 5,
    role: 0,
    shortDescription: {
      en: "Afficher l'utilisation des commandes.",
    },
    longDescription: {
      en: "Afficher l'utilisation des commandes et répertorier directement toutes les commandes.",
    },
    category: "info",
    guide: {
      en: " pour voir toutes les commandes veuillez taper : help",
    },
    priority: 1,
  },

  onStart: async function ({ message, args, event, threadsData, role }) {
    const { threadID } = event;
    const threadData = await threadsData.get(threadID);
    const prefix = "";

    if (args.length === 0) {
      const categories = {};
      let msg = "";

      msg += ``;

      for (const [name, value] of commands) {
        if (value.config.role > 1 && role < value.config.role) continue;

        const category = value.config.category || "Uncategorized";
        categories[category] = categories[category] || { commands: [] };
        categories[category].commands.push(name);
      }

      Object.keys(categories).forEach((category) => {
        if (category !== "info") {
          msg += `\n╭━━━━━━━━━━━╮`;
msg+=`\n┃『${category.toUpperCase()}🇨🇩』`;
          const names = categories[category].commands.sort();

          for (let i = 0; i < names.length; i += 1) {
            const cmds = names.slice(i, i + 1).map((item) => `⚙️➠${item}`);
            msg += `\n┃ ${cmds.join(" ".repeat(Math.max(1, 10 - cmds.join("").length)))}`;
          }
          msg +=`\n╰━━━━━━━━━━━╯\n꧁𝗘𝗟𝗜𝗔𝗦𝗕𝗔𝗥𝗨𝗧𝗜꧂`;
        }
      });

      const totalCommands = commands.size;

      msg += ``;

msg+=``;

      await message.reply(msg);
    } else {
      const commandName = args[0].toLowerCase();
      const command = commands.get(commandName) || commands.get(aliases.get(commandName));

      if (!command) {
        await message.reply(`la Commande "${commandName}" n'est pas existante.`);
      } else {
        const configCommand = command.config;
        const roleText = roleTextToString(configCommand.role);
        const author = configCommand.author || "inconnu 🤷🏾‍♂";
        const longDescription = configCommand.longDescription ? configCommand.longDescription.en || "pas de description 🤷🏾‍♂" : "pas de description 🤷🏾‍♂";
        const guideBody = configCommand.guide?.en || "Aucun guide disponible🤷🏾‍♂.";
        const usage = guideBody.replace(/{p}/g, prefix).replace(/{n}/g, configCommand.name);

        const response = `╭━━━━━〘INFOS〙━━━━━❍
┃━━━━❍〘 ${configCommand.name}〙
┃𝗱𝗲𝘀𝗰𝗿𝗶𝗽𝘁𝗶𝗼𝗻➠ ${longDescription}
┃
┃𝗮𝘂𝘁𝗿𝗲𝘀𝗡𝗼𝗺𝘀/𝗼𝘁𝗵𝗲𝗿𝘀𝗡𝗮𝗺𝗲𝘀:
┃➠ ${configCommand.aliases ? configCommand.aliases.join(", ") : "Ne pas avoir"}
┃
┃𝗩𝗲𝗿𝘀𝗶𝗼𝗻:➠ ${configCommand.version || "1.0"}
┃𝗥ô𝗹𝗲 :➠ ${roleText}
┃
┃𝘁𝗲𝗺𝗽𝘀𝗣𝗮𝗿𝗖𝗼𝗺𝗺𝗮𝗻𝗱/𝗧𝗶𝗺𝗲𝗣𝗲𝗿𝗖𝗺𝗱: 
┃➠ ${configCommand.countDown || 1}s
┃𝗔𝘂𝘁𝗲𝘂𝗿/𝗮𝘂𝘁𝗵𝗼𝗿: ➠  ${author}
┃
╭━━━━━〘𝘂𝘁𝗶𝗹𝗶𝘀𝗮𝘁𝗶𝗼𝗻 〙━━━╮\n${usage}\n╰━━━━━━━━-━-━━━━━━━━╯`;

        await message.reply(response);
      }
    }
  },
};

function roleTextToString(roleText) {
  switch (roleText) {
    case 0:
      return "0 (Tout le monde peut utiliser)";
    case 1:
      return "1 (seuls les administrateurs du groupe)";
    case 2:
      return "2 (seul l'administrateur du bot peut utiliser)";
    default:
      return "Unknown role";
  }
        }
