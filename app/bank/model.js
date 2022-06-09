const mongoose = require('mongoose')

let bankSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, 'Nama Pemilik Harus Diisi']
    },
    bankName: {
        type: String,
        require: [true, 'Nama Bank Harus Diisi']
    },
    noRekening: {
        type: String,
        require: [true, 'No Rekening Bank Harus Diisi']
    },
}, {timestamps: true})

module.exports = mongoose.model('Bank', bankSchema)