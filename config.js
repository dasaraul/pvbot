global.d = new Date()
global.calender = d.toLocaleDateString('id')

global.prefix = "." 
global.ownNumb = "6282210819939" //no lu ya
global.ownName = "Jawir Botz" 

global.autOwn = "req(62-8S57547ms11).287p"
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
	require('fs').unwatchFile(file)
	console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
	delete require.cache[file]
	require(file)
})