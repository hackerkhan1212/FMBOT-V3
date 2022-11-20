import fetch from 'node-fetch'
import axios from 'axios'
import fs from 'fs'

let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Uhm...url nya mana?'
  let chat = global.db.data.chats[m.chat]
  m.reply(wait)
  await conn.reply(m.chat, `Downloading media from Tiktok`, 0, {
    contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
        mediaUrl: '',
        mediaType: 2,
        description: sgc,
        title: global.wm,
        body: 'Nih Kak', //`${fileSizeH}`,
        sourceUrl: snh,
        thumbnail: fs.readFileSync('./thumbnail.jpg')
      }
    }
  })
  let url = `https://api.lolhuman.xyz/api/tiktokwm?apikey=${global.lolkeysapi}&url=${args[0]}`
  let txt = `🚀 *Link:* ${await (await axios.get(`https://tinyurl.com/api-create.php?url=${args[0]}`)).data}`
  await conn.sendFile(m.chat, url, 'tiktokaudio.mp3', `
┏┉━━━━━━━━━━━❏
┆ *TIKTOK MP3*
├┈┈┈┈┈┈┈┈┈┈┈
┆• *Title:* 
│• *Type:* MP3
┆• *📥 File Size:* 
└❏
`.trim(), m, null, {
    document: { url }, mimetype: 'audio/mpeg', fileName: 'tiktok.mp3', conntextInfo: {
      externalAdReply: {
        title: '▶︎ ━━━━━━━•────────────────── ',
        body: 'Now Playing...',
        description: 'Now Playing...',
        mediaType: 2,
        thumbnail: await (await fetch('https://telegra.ph/file/3b7ec1308edb07983efef.png')).buffer(),
        mediaUrl: `https://www.youtube.com/results?search_query=.`
      }
    }
  })
}
handler.tags = ['downloader']
handler.command = /^(tt|tiktok)(a(udio)?|mp3|sound)(dl)?(download(er)?)?$/i

handler.limit = true

export default handler
