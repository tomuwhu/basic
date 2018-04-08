const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const bpo = { extended: true, limit:1000 }

app.use( bodyParser.urlencoded(bpo) )

app.get( '/', (req, res) => res.send(`

       <form method="post">
         <input name="a" />
         <input name="b" />
         <button>Küld</button>
       </form>
`) )

app.post( '/', (req, res) => {
  var a = parseInt(req.body.a)
  var b = parseInt(req.body.b)
  res.send(`${ a*b/lnko(a, b) }`)
} )

lnko = (a ,  b) =>
        a == b
        ?    a
        :    a < b
             ? lnko ( a  , b-a )
             : lnko ( a-b, a   )

app.listen(3000)
