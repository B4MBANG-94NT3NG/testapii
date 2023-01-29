const fs = require('fs')

global.creator = 'BambangOfc' 
global.apikey = ["apikey", "Alphabot", "Alpha"]

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
	delete require.cache[file]
	require(file)
})
