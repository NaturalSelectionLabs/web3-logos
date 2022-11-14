const fs = require('fs')
const path = require('path')
const files = fs.readdirSync(process.cwd())
const pics = files.filter( file => file.endsWith('.png') )
const results = pics.map( pic => ({img: pic, name: pic.replace(/\_/g,' ').replace('.png', '')}))
const directoryPath = path.join(process.cwd(), 'directory.json')

fs.writeFileSync(directoryPath, JSON.stringify(results, null, 2), {encoding: 'utf8'})