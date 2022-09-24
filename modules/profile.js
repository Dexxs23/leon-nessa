(async () => {
	switch (command) {
		case 'owner': case 'creator': {
       //         let ty = await shizu.sendContact(m.chat, global.owner, m)
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:;Kakashi.;;;'
                    + 'FN:KakashiS.\n' // full name
                    + 'ORG:Secktor;\n' // the organization of the contact
                    + 'item1.TEL;type=CELL;type=VOICE;waid=491621612964:491621612964\n' // WhatsApp ID + phone number
                    + 'item1.X-ABLabel:Secktor Bot Owner\n'
                    + 'item2.EMAIL;type=INTERNET: Dex23@gmail.com\n'
                    + 'item2.X-ABLabel:Email\n'
                    + 'item3.URL:https://github.com/DarkenWaves/Secktor-Md\n'
                    + 'item3.X-ABLabel:Github\n'
                    + 'item4.ADR:;;INDIA;;;;\n'
                    + 'item4.X-ABLabel:Region\n'
                    + 'item5.X-ABLabel:Enjoy❤️\n'
                    + 'END:VCARD'
                Void.sendMessage(citel.chat, { contacts: { displayName: 'SamPandey001', contacts: [{ vcard }] } }, { quoted: citel })
            }
            break
		case "p":
		case "profile":
			if (querie === "help") {
				return citel.reply(`*❗Command:* ${command}\n*🧩Category:* General\n*🛠️Usage:* ${
              prefix + command
            } reply/taq user\n\n*📚Description:* Shows profile of tagged/replied user `);
			}
			var bio = await Void.fetchStatus(citel.sender);
			var bioo = bio.status;
			////console.log(bio)
			const adn = isAdmins ? "True" : "False";
			try {
				pfp = await Void.profilePictureUrl(citel.sender, "image");
			}
			catch (e) {
				pfp = picsecktor;
			}
			const profile = `
 𝐻𝑖𝑖 ${pushname} 𝐷𝑎𝑟𝑙𝑖𝑛𝑔,𝐻𝑒𝑟𝑒 𝑖𝑠 𝑦𝑜𝑢𝑟 𝐶𝑢𝑡𝑒 𝑃𝑟𝑜𝑓𝑖𝑙𝑒.
👤 Benutzer  : ${pushname}
⚡ Bio :  ${bioo}
👪 Gruppe :  ${groupName}
🎊 ADMIN: ${adn}

*Powered by ${LangG.title}*
`;
			const buttonsd = [
				{
					buttonId: `${prefix}alive`,
					buttonText: {
						displayText: "Alive",
					},
					type: 1,
          },
				{
					buttonId: `${prefix}help`,
					buttonText: {
						displayText: " Help",
					},
					type: 1,
          },
        ];
			let buttonMessage = {
				image: {
					url: pfp,
				},
				caption: profile,
				footer: LangG.footer,
				buttons: buttonsd,
				headerType: 4,
			};
			Void.sendMessage(citel.chat, buttonMessage, {
				quoted: citel,
			});
			break;
	}
})()