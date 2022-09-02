let handler =  m => m.reply(`
┌──「 Donasi • Pulsa 」──⬣
│ • Telkomsel : 081248009076
│ • Smatfren : 088233832771
└───────⬣
┌──「 Donasi • Dana 」──⬣
│ • https://saweria.co/mursid25
│ • Dana : 081248009076
└───────⬣
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
