const db = require('../_helpers/database');
const psa = db.PSA;

module.exports = {
    addPSA,
    getAllPSAs,
    markInactive
}

async function addPSA(addPSA) {
    console.log(addPSA)
    const newMsg = new psa(addPSA);
    await newMsg.save();
}

async function getAllPSAs() {
   return await psa.find({isActive: true});
}

async function markInactive(num) {
    const newNum = parseInt(num);
    const foundPSA = await psa.findOne({number: newNum})
    if (!foundPSA) {
        throw 'cannot find psa to mark'
    }
    return await foundPSA.updateOne({isActive: false});
}