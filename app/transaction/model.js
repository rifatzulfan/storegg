const mongoose = require('mongoose')

let transactionSchema = mongoose.Schema({
    historyVoucherTopup: {
        gameName: {
            type: String,
            require: [true, 'Nama Game Harus Diisi']
        },
        category: {
            type: String,
            require: [true, 'Kategori Harus Diisi']
        },
        thumbnail: {
            type: String
        },
        coinName: {
            type: String,
            require: [true, 'Nama Koin Harus Diisi']
        },
        coinQuantity: {
            type: String,
            require: [true, 'Jumlah Koin Harus Diisi']
        },
        price: {
            type: Number
        }
    },

    historyPayment: {
        name: {
            type: String,
            require: [true, 'Nama Harus Diisi']
        },
        type: {
            type: String,
            require: [true, 'Tipe Pembayaran Harus Diisi']
        },
        bankName: {
            type: String,
            require: [true, 'Nama Bank Harus Diisi']
        },
        noRekening: {
            type: String,
            require: [true, 'Nomor Rekening Harus Diisi']
        },
    },

    name: {
        type: String,
        require: [true, 'Nama Harus Diisi'],
        maxlength: [225, 'Panjang Nama Harus Antara 3-225 Karakter'],
        minlength: [3, 'Panjang Nama Harus Antara 3-225 Karakter']
    },

    accountUser: {
        type: String,
        require: [true, 'Nama Akun Harus Diisi'],
        maxlength: [225, 'Panjang Nama Harus Antara 3-225 Karakter'],
        minlength: [3, 'Panjang Nama Harus Antara 3-225 Karakter']
    },

    tax: {
        type: Number,
        default: 0
    },

    value: {
        type: Number,
        default: 0
    },

    status: {
        type: String,
        enum: ['pending', 'success', 'failed'],
        default: 'pending'
    },

    player: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Player'
    },

    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    historyUser: {
        name: {
            type: String,
            require: [true, 'Nama Harus Diisi']
        },
        phoneNumbe: {
            type: Number,
            require: [true, 'Nomor Telepon Harus Diisi'],
            maxlength: [225, 'Panjang Nomor Telepon Harus Antara 3-225 Karakter'],
            minlength: [3, 'Panjang Nomor Telepon Harus Antara 3-225 Karakter']
        }
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Transaction', transactionSchema)