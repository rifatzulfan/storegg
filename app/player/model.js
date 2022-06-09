const mongoose = require('mongoose')

const bcrypt = require('bcryptjs')

const HASH_ROUND = 10

let playerSchema = mongoose.Schema({
    email: {
        type: String,
        require: [true, 'Email Harus Diisi']
    },
    name: {
        type: String,
        require: [true, 'Nama Harus Diisi'],
        maxlength: [225, 'Panjang Nama Harus Antara 3-225 Karakter'],
        minlength: [3, 'Panjang Nama Harus Antara 3-225 Karakter']
    },
    password: {
        type: String,
        require: [true, 'Kata Sandi Harus Diisi'],
        maxlength: [225, 'Panjang Kata Sandi Harus Antara 6-225 Karakter'],
        minlength: [6, 'Panjang Kata Sandi Harus Antara 6-225 Karakter']
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
    status: {
        type: String,
        enum: ['Y', 'N'],
        default: 'Y'
    },
    phoneNumber: {
        type: String,
        require: [true, 'Nomor Telepon Harus Diisi'],
        maxlength: [13, 'Panjang Nomor Telepon Harus Antara 9-13 Karakter'],
        minlength: [9, 'Panjang Nomor Telepon Harus Antara 9-13 Karakter']
    },
    avatar: {
        type: String,
    },
    fileName: {
        type: String,
    },
    favorit: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
}, {
    timestamps: true
})

playerSchema.path('email').validate(async function (value){
    try {
      const count = await this.model('Player').countDocuments({ email : value })
      return !count;
    } catch (err) {
      throw err
    }
  
  }, attr => `${attr.value} sudah terdaftar`)

playerSchema.pre('save', function (next) {
    this.password = bcrypt.hashSync(this.password, HASH_ROUND)
    next()
})

module.exports = mongoose.model('Player', playerSchema)