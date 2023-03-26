import mongoose from 'mongoose'

const phaseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    time: {
        type: Date,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
        default: 'camera',
    },
    image: {
        type: String,
        default: '',
    },
    isComplete: {
        type: Boolean,
        default: false,
    },
})

const Phase = mongoose.models.Phase || mongoose.model('Phase', phaseSchema)

export default Phase
