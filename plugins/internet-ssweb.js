import fetch from 'node-fetch'
let handler = async(m, { conn, usedPrefix, text, args, command }) => {
if (!args[0]) throw `Contoh  ${usedPrefix + command} https://s.id`

	let lis = [
'https://api.lolhuman.xyz/api/ssweb?apikey=${}&url=args[0]', 
'https://api.lolhuman.xyz/api/sswebfull?apikey=${}&url= args[0]',
'https://botcahx-rest-api.herokuapp.com/api/tools/ssweb?link==args[0]', 
'https://nurutomo.herokuapp.com/api/ssweb?url= args[0]',
'https://shot.screenshotapi.net/screenshot?token=WCCYKR0-X5CMMV0-JB4G5Z5-P6SPC8R&url=' + args[0] + '&full_page=true&fresh=true&output=image&file_type=jpg',
'https://api.popcat.xyz/screenshot?url=' + args[0],
'https://api.apiflash.com/v1/urltoimage?access_key=7eea5c14db5041ecb528f68062a7ab5d&wait_until=page_loaded&url=' + args[0]
]
let liss = [
'Screeshot1',
'Screenshot full',
'Screeshot2',
'nurutomo',
'shot.screenshotapi',
'api.popcat',
'api.apiflash'
]
let row = Object.keys(lis, liss).map((v, index) => ({
		title: 'By ' + liss[v],
		description: 'Bot ' + author,
		rowId: usedPrefix + 'get ' + lis[v]
	}))
	let button = {
		buttonText: `☂️ Theme Here ☂️`,
		description: `⚡ Please choose a theme in the button below...\n*Text you send:* ${text}\n\nRetype *${usedPrefix + command}* your text to change the text again`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
}
handler.help = ['ssweb']
handler.tags = ['internet']
handler.command = /^ss(web)?|scre?e?nshu?o?t|sswebdown$/i

export default handler
