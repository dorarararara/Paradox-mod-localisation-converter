const language = 'french'

const fs = require('fs');
const path = require('path'); 
const dirTree = require("directory-tree");

dirTree(__dirname, {extensions:/\.yml$/}, (item, path, stats) => {
    if (path.split('\\').indexOf('localisation') === -1) {
        return
    }
    console.log(' ')
    
    let locPath = path.split('\\');
    let filePath = locPath.splice(locPath.indexOf('localisation') + 1, locPath.length - locPath.indexOf('localisation'))

    filePath[filePath.length - 1] = filePath[filePath.length - 1].replace(/l_english/g, `l_${language}`)
    let content = fs.readFileSync(path, {encoding:'utf8', flag:'r'})
    content = content.replace(/l_english/g, `l_${language}`)

    filePath[0] = language

    let newPath = locPath.join('/') + '/' + filePath.join('/')
    let logPath = locPath.join('/') + '/.addedFiles'

    // console.log(logPath)
    let folders = filePath
    let a = folders.pop()
    let dirPath = locPath.join('/') + '/' + folders.join('/')
    filePath.push(a)

    console.log('CONVERTING \'' + path + '\'')
    console.log('        TO \'' + locPath.join('\\') + '\\' + filePath.join('\\') + '\'')

    try {
        fs.mkdirSync(dirPath, {recursive: true})
        fs.writeFileSync(newPath, content, {encoding:'utf8', flag:'wx'})
        fs.writeFileSync(logPath, `/${filePath.join('/')} \n`, {encoding:'utf8', flag: 'a'})
        fs.writeFileSync('.logs', `Added file : ${newPath} \n`, {encoding:'utf8', flag:'a'})
    } catch (error) {
        if (error.errno === -4075) {
            console.log('File already exist')
        } else {
            console.log(error)
        }
    }

    console.log(' ')
});
