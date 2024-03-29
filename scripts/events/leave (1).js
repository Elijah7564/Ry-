const { getTime, drive } = global.utils;

module.exports = {
	config: {
		name: "leave",
		version: "1.4",
		author: "NTKhang",
		category: "events"
	},

	langs: {
     fr: {
       leaveType1: "𝗇𝗈𝗎𝗌 𝖺 𝗊𝗎𝗂𝗍𝗍é 🙀,𝗆𝖺𝗂𝗌 𝗊𝗎'𝖾𝗌𝗍-𝖼𝖾 𝗊𝗎'𝗂𝗅 𝗇'𝖺 𝗉𝖺𝗌 𝗍𝗋𝗈𝗎𝗏é 𝖽𝖾 𝖻𝗈𝗇 𝖽𝖺𝗇𝗌 𝖼𝖾 𝗀𝗋𝗈𝗎𝗉𝖾 ?😞",
       leaveType2: "a é𝗍é 𝗌𝗎𝗉𝗉𝗋𝗂𝗆é 𝖽𝗎 𝗀𝗋𝗈𝗎𝗉𝖾 𝗉𝖺𝗋 u𝗇 𝖺𝖽𝗆𝗂𝗇𝗂𝗌𝗍𝗋𝖺𝗍𝖾𝗎𝗋 𝖽𝖾 𝖼𝖾 𝗀𝗋𝗈𝗎𝗉𝖾 👮🏾‍♂️, 𝗌𝗈𝗂𝗍 𝗂𝗅 𝖺 𝖼𝗈𝗆𝗆𝗂𝗍 𝗊𝗎𝖾𝗅𝗊𝗎𝖾 𝖼𝗁𝗈𝗌𝖾 𝖽𝖾 𝗉𝖺𝗌 𝖻𝗈𝗇...🤷🏾‍♂️",
      defaultLeaveMessage: "{userName} {type} "
    },
		vi: {
			session1: "sáng",
			session2: "trưa",
			session3: "chiều",
			session4: "tối",
			leaveType1: "tự rời",
			leaveType2: "bị kick",
			defaultLeaveMessage: "{userName} đã {type} khỏi nhóm"
		},
		en: {
			leaveType1: "𝗅𝖾𝖿𝗍 𝗎𝗌 🙀,𝖻𝗎𝗍 𝗐𝗁𝖺𝗍 𝖽𝗂𝖽𝗇'𝗍 𝗁𝖾 𝖿𝗂𝗇𝖽 𝗀𝗈𝗈𝖽 𝖺𝖻𝗈𝗎𝗍 𝗍𝗁𝗂𝗌 𝗀𝗋𝗈𝗎𝗉?😢",
			leaveType2: "\n╭━━━━━━━━━━━━━━━━━━╮\n┃𝗐𝖺𝗌 𝖽𝖾𝗅𝖾𝗍𝖾𝖽 𝖿𝗋𝗈𝗆 𝗍𝗁𝖾 𝗀𝗋𝗈𝗎𝗉\n┃  𝖻𝗒 𝖺𝗇 𝖺𝖽𝗆𝗂𝗇 𝗈𝖿 𝗍𝗁𝗂𝗌 𝗀𝗋𝗈𝗎𝗉\n┃ 👮🏾‍♂,𝖾𝗂𝗍𝗁𝖾𝗋 𝖻𝖾𝖼𝖺𝗎𝗌𝖾 𝗁𝖾  \n┃   do  𝗌𝗈𝗆𝖾𝗍𝗁𝗂𝗇𝗀 𝖻𝖺𝖽...🤷🏾‍♂\n╰━━━━━━━━━━━━━━━━━━╯",
			defaultLeaveMessage: "{userName} {type} "
		}
	},

	onStart: async ({ threadsData, message, event, api, usersData, getLang }) => {
		if (event.logMessageType == "log:unsubscribe")
			return async function () {
				const { threadID } = event;
				const threadData = await threadsData.get(threadID);
				if (!threadData.settings.sendLeaveMessage)
					return;
				const { leftParticipantFbId } = event.logMessageData;
				if (leftParticipantFbId == api.getCurrentUserID())
					return;
				const hours = getTime("HH");

				const threadName = threadData.threadName;
				const userName = await usersData.getName(leftParticipantFbId);

				// {userName}   : name of the user who left the group
				// {type}       : type of the message (leave)
				// {boxName}    : name of the box
				// {threadName} : name of the box
				// {time}       : time
				// {session}    : session

				let { leaveMessage = getLang("defaultLeaveMessage") } = threadData.data;
				const form = {
					mentions: leaveMessage.match(/\{userNameTag\}/g) ? [{
						tag: userName,
						id: leftParticipantFbId
					}] : null
				};

				leaveMessage = leaveMessage
					.replace(/\{userName\}|\{userNameTag\}/g, userName)
					.replace(/\{type\}/g, leftParticipantFbId == event.author ? getLang("leaveType1") : getLang("leaveType2"))
					.replace(/\{threadName\}|\{boxName\}/g, threadName)
					.replace(/\{time\}/g, hours)
					.replace(/\{session\}/g, hours <= 10 ?
						getLang("session1") :
						hours <= 12 ?
							getLang("session2") :
							hours <= 18 ?
								getLang("session3") :
								getLang("session4")
					);

				form.body = leaveMessage;

				if (leaveMessage.includes("{userNameTag}")) {
					form.mentions = [{
						id: leftParticipantFbId,
						tag: userName
					}];
				}

				if (threadData.data.leaveAttachment) {
					const files = threadData.data.leaveAttachment;
					const attachments = files.reduce((acc, file) => {
						acc.push(drive.getFile(file, "stream"));
						return acc;
					}, []);
					form.attachment = (await Promise.allSettled(attachments))
						.filter(({ status }) => status == "fulfilled")
						.map(({ value }) => value);
				}
				message.send(form);
			};
	}
};
