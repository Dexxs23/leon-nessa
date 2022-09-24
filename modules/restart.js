(async () => {
	switch (command) {
		case 'r':
			if (!isCreator) return citel.reply(LangG.owner);
			const Heroku = require("heroku-client");
			const heroku = new Heroku({
				token: Config.HEROKU.API_KEY,
			});
			let baseURI = "/apps/" + Config.HEROKU.APP_NAME;
			citel.reply(`Neustart ${LangG.title}`)
			//console.log(baseURI);
			await heroku.delete(baseURI + '/dynos')
				.catch(async (error) => {
					citel.reply('got an error')
				});
			break
	}
})()