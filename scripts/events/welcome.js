const { getTime, drive } = global.utils;
if (!global.temp.welcomeEvent)
  global.temp.welcomeEvent = {};

module.exports = {
  config: {
    name: "welcome",
    version: "1.5",
    author: "NTKhang",
    category: "events"
  },

  langs: {
   fr: {
      welcomeMessage:"━━━━━━━━━━━━━━━\n    𝖱𝖺𝗏𝗂𝖾𝗌 𝖽'ê𝗍𝗋𝖾 𝖺𝗃𝗈𝗎𝗍é\n     𝖣𝖺𝗇𝗌 𝖼𝖾 𝗀𝗋𝗈𝗎𝗉𝖾 🤭\n     𝗠𝗢𝗡 𝗣𝗥É𝗙𝗜𝗫𝗘:%1 \n     𝖨𝖳𝖠𝖢𝖧𝖨,𝖻𝗈𝗍 é𝖽𝗂𝗍é\n   𝗉𝖺𝗋: 𝗘𝗟𝗜𝗔𝗦 𝗕𝗔𝗥𝗨𝗧𝗜  \n ━━━━━━━━━━━━━━━",
      defaultWelcomeMessage:`╭━━━━━━━━━━━━━━━╮\n┃𝖲𝖺𝗅𝗎𝗍 {userName}\n┃𝖡𝗂𝖾𝗇𝗏𝖾𝗇𝗎𝖾 𝗉𝖺𝗋𝗆𝗂 𝗇𝗈𝗎𝗌\n┃𝗋𝖾𝗌𝗍𝖾 𝗌𝖺𝗀𝖾 🫂\n┃𝖩𝖾 𝗌𝗎𝗂𝗌 𝖨𝗍𝖺𝖼𝗁𝗂,𝖻𝗈𝗍 é𝖽𝗂𝗍é\n┃𝗉𝖺𝗋: 𝗘𝗟𝗜𝗔𝗦 𝗕𝗔𝗥𝗨𝗧𝗜\n┃━━━━━━━━━━━━━━━━━╮\n┃facebook.com/eliasbaruti45┃ \n╰━━━━━━━━━━━━━━━━━╯` 
   },	  
    en: {
      welcomeMessage: "━━━━━━━━━━━━━━━━\n  𝖣𝖾𝗅𝗂𝗀𝗁𝗍𝖾𝖽 𝗍𝗈 𝖻𝖾 𝖺𝖽𝖽𝖾𝖽\n          𝖨𝗇 𝗍𝗁𝗂𝗌 𝗀𝗋𝗈𝗎𝗉 🤭\n         𝗠𝗬 𝗣𝗥𝗘𝗙𝗜𝗫:%1 \n     𝖨𝖳𝖠𝖢𝖧𝖨,𝖻𝗈𝗍 𝖾𝖽𝗂𝗍𝖾𝖽\n     By: 𝗘𝗟𝗜𝗔𝗦 𝗕𝗔𝗥𝗨𝗧𝗜\n━━━━━━━━━━━━━━━━",
      defaultWelcomeMessage: `╭━━━━━━━━━━━━━━━╮\n┃𝖧𝗂 {userName} \n┃𝖶𝖾𝗅𝖼𝗈𝗆𝖾 𝖺𝗆𝗈𝗇𝗀 𝗎𝗌 \n┃𝗌𝗍𝖺𝗒 𝗐𝗂𝗌𝖾 🫂 \n┃𝖨 𝖺𝗆 𝖨𝗍𝖺𝖼𝗁𝗂, 𝖾𝖽𝗂𝗍𝖾𝖽 𝖻𝗈𝗍\n┃𝖻𝗒: 𝗘𝗟𝗜𝗔𝗦 𝗕𝗔𝗥𝗨𝗧𝗜\n┃━━━━━━━━━━━━━━━━━╮\n┃facebook.com/eliasbaruti45┃ \n╰━━━━━━━━━━━━━━━━━╯`
    }
  },

  onStart: async ({ threadsData, message, event, api, getLang }) => {
    if (event.logMessageType == "log:subscribe")
      return async function () {
        const hours = getTime("HH");
        const { threadID } = event;
        const { nickNameBot } = global.GoatBot.config;
        const prefix = global.utils.getPrefix(threadID);
        const dataAddedParticipants = event.logMessageData.addedParticipants;
        // if new member is bot
        if (dataAddedParticipants.some((item) => item.userFbId == api.getCurrentUserID())) {
          if (nickNameBot)
            api.changeNickname(nickNameBot, threadID, api.getCurrentUserID());
          return message.send(getLang("welcomeMessage", prefix));
        }
        // if new member:
        if (!global.temp.welcomeEvent[threadID])
          global.temp.welcomeEvent[threadID] = {
            joinTimeout: null,
            dataAddedParticipants: []
          };

        global.temp.welcomeEvent[threadID].dataAddedParticipants.push(...dataAddedParticipants);
        clearTimeout(global.temp.welcomeEvent[threadID].joinTimeout);

        global.temp.welcomeEvent[threadID].joinTimeout = setTimeout(async function () {
          const threadData = await threadsData.get(threadID); // Correction: moved this line up
          const dataBanned = threadData.data.banned_ban || [];
          if (threadData.settings.sendWelcomeMessage == false)
            return;
          const threadName = threadData.threadName;
          const userName = [],
            mentions = [];
          let multiple = false;

          if (dataAddedParticipants.length > 1)
            multiple = true;

          for (const user of dataAddedParticipants) {
            if (dataBanned.some((item) => item.id == user.userFbId))
              continue;
            userName.push(user.fullName);
            mentions.push({
              tag: user.fullName,
              id: user.userFbId
            });
          }
          // {userName}:   name of new member
          // {multiple}:
          // {boxName}:    name of group
          // {threadName}: name of group
          // {session}:    session of day
          if (userName.length == 0) return;
          let { welcomeMessage = getLang("defaultWelcomeMessage") } =
            threadData.data;
          const form = {
            mentions: welcomeMessage.match(/\{userNameTag\}/g) ? mentions : null
          };
          welcomeMessage = welcomeMessage
            .replace(/\{userName\}|\{userNameTag\}/g, userName.join(", "))
            .replace(/\{boxName\}|\{threadName\}/g, threadName)
            .replace(
              /\{multiple\}/g,
              multiple ? getLang("multiple2") : getLang("multiple1")
            )
            .replace(
              /\{session\}/g,
              hours <= 10
                ? getLang("session1")
                : hours <= 12
                  ? getLang("session2")
                  : hours <= 18
                    ? getLang("session3")
                    : getLang("session4")
            );
								

          form.body = welcomeMessage;

          if (threadData.data.welcomeAttachment) {
            const files = threadData.data.welcomeAttachment;
            const attachments = files.reduce((acc, file) => {
              acc.push(drive.getFile(file, "stream"));
              return acc;
            }, []);
            form.attachment = (await Promise.allSettled(attachments))
              .filter(({ status }) => status == "fulfilled")
              .map(({ value }) => value);
          }
          message.send(form);
          delete global.temp.welcomeEvent[threadID];
        }, 1500);
      };
  }
};
