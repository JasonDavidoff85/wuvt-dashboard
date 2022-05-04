const db = require('../_helpers/database');
const psa = db.PSA;

module.exports = {
    addPSA,
    getAllPSAs
}

async function addPSA(addPSA) {
    console.log(addPSA)
    const newMsg = new psa(addPSA);
    await newMsg.save();
}

async function getAllPSAs() {
   return await psa.find();
}