import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (email) => {
                return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
            },
            message: 'Email is not valid',
        },
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    image: {
        type: String,
        require: true,
        default: 'default.jpg',
    },
})

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) next()

    this.password = await bcrypt.hash(this.password, 12)

    next()
})

userSchema.statics.comparePassword = async function (
    candidatePassword,
    password
) {
    return await bcrypt.compare(candidatePassword, password)
}

const User = mongoose.models.User || mongoose.model('User', userSchema)

export default User
