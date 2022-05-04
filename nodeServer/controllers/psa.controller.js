const psaService = require('../services/psa.service')

module.exports = {
    addPsa,
    getAllPSAs
};

function addPsa(req, res, next) {
    console.log("got to psa")
    psaService.addPSA(req.body)
    .then(() => res.json({}))
    .catch((err) => next(err));
}

function getAllPSAs(req, res, next) {
    psaService.getAllPSAs()
    .then((psas) => res.json(psas))
    .catch((err) => next(err));
}