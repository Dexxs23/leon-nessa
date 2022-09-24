(async () => {
	switch (command) {
		case "p1": {
			if (querie === "help") {
				await citel.reply(`*❗Command:*   Ping\n*🍀Aliases* ${
                prefix + command
              }\n*🧩Category:* General\n*🛠️Usage:* ${
                prefix + command
              }\n\n*📚Description:* Shows ping speed of ${LangG.title}.`);
				return;
			}
			timestampe = speed();
			latensie = speed() - timestampe;
			const pong = `
*「Speed」✨* ${latensie.toFixed(4)} ms`;
			citel.reply(pong);
		}
		break;
	}
})()