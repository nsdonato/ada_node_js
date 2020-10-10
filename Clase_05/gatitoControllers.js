const Gatito = require('../models/gatitos');

exports.getGatitos = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'Ruta aun no implementada GET GatitoS',
  });
};

exports.getGatito = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'Ruta aun no implementada GET Gatito',
  });
};

// exports.postGatito = (req, res) => {
//   const gatito = new Gatito(req.body)

//   gatito.save()
//   .then(doc => {
//     return res.status(200).json({
//     status: 'success',
//     data: doc
//   })
// })
//   .catch(err => {
//     return res.status(500).json({
//       status: 'fail',
//       err: err
//     })
//   })
// };

exports.postGatito = async (req, res) => {
  try {
    // una manera de hacerlo:
    // const gatito = new Gatito(req.body)
    // await gatito.save()

    // otra, mas breve: (las dos cosas a la vez)
    const gatito = await Gatito.create(req.body)
    res.status(201).json({
      status: 'success',
      data: {
        gatito
      }
    })

  } catch (err) {
    res.status(400).json({
      status: 'fail',
      err: err
    })
  }
};

exports.deleteGatito = async (req, res) => {
  try {
    // Metodo de mongoose equivalente:
    // await Gatito.findByIdAndDelete({ _id: req.params.id });
    await Gatito.deleteOne({ _id: req.params.id });
    res.status(200).json({
      status: 'success',
      data: 'null',
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: 'No se pudo borrar al gato',
    });
  }
};

exports.putGatito = async (req, res) => {
  try {
    const gatito = await Gatito.replaceOne({ _id: req.params.id}, req.body);
    res.status(200).json({
      status: 'success',
      data: { gatito },
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: 'No se pudo actualizar el gatito',
    });
  }
};

exports.patchGatito = async (req, res) => {
  try {
    const gatito = await Gatito.findByIdAndUpdate({ _id: req.params.id}, req.body);
    res.status(200).json({
      status: 'success',
      data: { gatito },
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: 'No se pudo actualizar el gatito',
    });
  }
};
