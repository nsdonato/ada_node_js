const app = require('./app');
const mongoose = require('mongoose');

const port = 3002;

// conectate a la base de mongo que te voy a aclarar, 3 params:
mongoose.connect('mongodb://localhost:27017/', { dbName: 'ada'},
err => (err ? console.log(err) : console.log('Conectado a la base de datos')))

// Schema = un esquema es un modelo a partir del cual podemos crear  muchos objetos (como una clase)
const gatitoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  edad: Number,
  disponible: Boolean
})

// cada vez que el usuario quiera crear un gatito, va a usar este modelo, esquema, colleccion.
const Gatito = mongoose.model('Gatito', gatitoSchema, 'gatitos');

// damos de alta un gatito
const gatito = new Gatito({
  nombre: 'La gata Noelia es la impostora',
  edad: 69,
  disponible: true
})

gatito.save()
.then(doc => console.log(doc))
.catch(err => console.log(err))

app.listen(port, () => {
  console.log(`App esta corriendo en el puerto ${port}`);
});

