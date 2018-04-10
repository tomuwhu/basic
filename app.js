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

app.get( '/', (req, res) => {
  s = `
    <form method="post">
      <input name="name" placeholder="Állat neve"/>
      <button>Felvesz</button>
    </form>
  `
  Mammals.find().sort({name:1}).then( arr => {
      s += `<table>`
      arr.forEach( v =>
         s+=`<tr><td>${v.name}</td></tr>`
      )
      s+= `</table>`
      res.send(s)
  })
})

app.post( '/', (req, res) => {

})

app.listen(3000)
