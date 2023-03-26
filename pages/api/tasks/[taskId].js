import connectDB from '@/middleware/mongodb'
import Task from '@/models/TaskModel'

const handler = async (req, res) => {
    if (req.method === 'PATCH') {
        const { title, description } = req.body
        const { taskId } = req.query

        if (title && description) {
            try {
                const updatedTask = await Task.findByIdAndUpdate(
                    taskId,
                    {
                        title,
                        description,
                    },
                    {
                        new: true,
                        runValidators: true,
                    }
                )

                res.status(200).json({
                    status: 'success',
                    data: {
                        task: updatedTask,
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
}

export default connectDB(handler)
