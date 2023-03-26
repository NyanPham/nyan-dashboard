import mongoose from 'mongoose'

const connectDB = (handler) => async (req, res) => {
    if (mongoose.connections[0].readyState) {
        return handler(req, res)
    }

    const dbUrl = process.env.mongodburl.replace(
        '<PASSWORD>',
        process.env.mongopassword
    )
    try {
        await mongoose.connect(dbUrl)
    } catch {
        console.log('Failed to connect to MongoDB')
    }
    return handler(req, res)
}

export default connectDB
