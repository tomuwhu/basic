# basic
Hello world app
```javascript
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const bpo = { extended: true, limit:300000 }
app.use( bodyParser.urlencoded(bpo) )

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/animals');

const Mammals = mongoose.model('mammal', {
    name: { type: String, trim: true }
})

function allatok(req,res) {
  p = /.*/i
  Mammals
    .find(
      {name: p}
    )
    .then(arr => {
      arr.sort(
        (a,b) =>
         - b.name.localeCompare( a.name )
      )
      res.send(`
<html>
<meta charset="utf-8">
<body>
  <form method="post">
    <input name="name" placeholder="Állat neve"/>
    <button>Felvesz</button>
  </form>

  <table>${
    arr.map(
        animal =>`
     <tr>
       <td>
         ${ animal.name }
       </td>
     </tr>`).join('')
  }
  </table>
</body>
      `)
    })
}

app.get( '/', allatok )

app.post( '/', (req, res) => {
    const ujallat = new Mammals(req.body);
    ujallat.save().then( () => allatok(req, res) )
})

app.listen(3000)
```
