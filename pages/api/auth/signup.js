import connectDB from '@/middleware/mongodb'
import User from '@/models/UserModel'

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const { name, email, password, passwordConfirm } = req.body
        try {
            if (!name || !email || !password) {
                return res.status(400).json({
                    status: 'fail',
                    message: 'Please provide all required fields',
                })
            }

            if (password !== passwordConfirm) {
                return res.status(400).json({
                    status: 'fail',
                    message: 'Passwords do not match',
                })
            }

            const user = await User.create({
                name,
                email,
                password,
            })

            res.status(201).json({
                status: 'success',
                data: {
                    user,
                },
            })
        } catch (error) {
            res.status(400).json({
                status: 'fail',
                error: error.message,
            })
        }
    }
}

export default connectDB(handler)
