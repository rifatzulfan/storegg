const mongoose = require('mongoose')

let userSchema = mongoose.Schema({
    email: {
        type: String,
        require: [true, 'Email Harus Diisi']
    },
    name: {
        type: String,
        require: [true, 'Nama Harus Diisi']
    },
    password: {
        type: String,
        require: [true, 'Kata Sandi Harus Diisi']
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'admin'
    },
    status: {
        type: String,
        enum: ['Y', 'N'],
        default: 'Y'
    },
    phoneNumber: {
        type: String,
        require: [true, 'Nomor Telepon Harus Diisi']
    }
}, {timestamps: true})

module.exports = mongoose.model('User', userSchema)