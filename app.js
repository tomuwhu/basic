const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const bpo = { extended: true, limit:1000 }

app.use( bodyParser.urlencoded(bpo) )

app.get( '/', (req, res) => {
  t = [5,3,4,2,8,1,4,2]
  //t.sort()

  t.forEach

  s = "<table border='1'><tr>"
  t.forEach(v => s+=`<td>${ v }</td>`)
  res.send(`${ s }</tr></table>`)
})

lnko = (a ,  b) =>
        a == b
        ?    a
        :    a < b
             ? lnko ( a  , b-a )
             : lnko ( a-b, a   )

app.listen(3000)
