var express = require("express")
var app = express()
var shell = require("shelljs")

app.get("/api/test-shell", (req,res,next) =>{
    shell.echo('Accessing the shell now')
    shell.exec('git remote add origin https://github.com/zachhirschman/auto-commit-project.git')
    shell.exec('git add .')
    shell.exec('git status')
    shell.exec('git commit -m "auto commit from server"')
    shell.exec('git push -u origin master')
})


app.listen(4000, () => console.log(`Listening on port ${4000}`))