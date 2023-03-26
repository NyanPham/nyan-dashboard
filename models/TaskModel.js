import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    refLink: {
        type: String,
        default: '',
    },
    comments: [String],
    progressColor: {
        type: String,
        minlength: 1,
        default: 'bg-sky-500',
    },
    image: {
        type: String,
        default: '',
    },
    startFrom: {
        type: Date,
        default: new Date(),
    },
    phases: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Phase',
        },
    ],
})

const Task = mongoose.models.Task || mongoose.model('Task', taskSchema)

export default Task
