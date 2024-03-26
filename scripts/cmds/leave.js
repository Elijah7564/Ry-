const axios = require("axios");
const fs = require("fs-extra");
const request = require("request");
module.exports = {
	config: {
		name: "leave",
		aliases: ["l"],
		version: "1.0",
		author: "Sandy",
		countDown: 5,
		role: 2,
		shortDescription: "bot will leave gc",
		longDescription: "",
		category: "𝗥𝘆ū_",
		guide: {
			vi: "{pn} [tid,blank]",
			en: "{pn} [tid,blank]"
		}
	},

	onStart: async function ({ api,event,args, message }) {
 var id;
 if (!args.join(" ")) {
 id = event.threadID;
 } else {
 id = parseInt(args.join(" "));
 }
 return api.sendMessage('𝗴𝗼𝗼𝗱𝗯𝘆𝗲 𝗲𝘃𝗲𝗿𝘆𝗼𝗻𝗲\n🕊━━━━━━━━━━━━😿\n𝗮𝘂-𝗿𝗲𝘃𝗼𝗶𝗿 𝘁𝗼𝘂𝘁 𝗹𝗲 𝗺𝗼𝗻𝗱𝗲', id, () => api.removeUserFromGroup(api.getCurrentUserID(), id))
		}
	};
