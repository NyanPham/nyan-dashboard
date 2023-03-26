import connectDB from '@/middleware/mongodb'
import Phase from '@/models/PhaseModel'
import Task from '@/models/TaskModel'
// import bcrypt from '../../middleware/bcrypt'

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const {
            phases,
            title,
            description,
            refLink,
            comments,
            progressColor,
            image,
        } = req.body
        if (title && phases) {
            try {
                const createdPhases = await Promise.all(
                    phases.map(async (phase) => {
                        return await Phase.create({
                            title: phase.title,
                            time: phase.time,
                            location: phase.location,
                            icon: phase.icon,
                            image: phase.image,
                        })
                    })
                )
                const task = new Task({
                    title,
                    description,
                    refLink,
                    comments,
                    progressColor,
                    image,
                    phases: createdPhases.map((phase) => phase._id),
                })

                const createdTask = await task
                    .save()
                    .then((task) => task.populate('phases'))

                return res.status(201).json({
                    status: 'success',
                    data: {
                        task: createdTask,
                    },
                })
            } catch (error) {
                return res.status(500).json({
                    status: 'error',
                    error: error.messgae,
                })
            }
        } else {
            res.status(422).send('data_incomplete')
        }
    } else if (req.method === 'GET') {
        try {
            const tasks = await Task.find({}).populate('phases')

            return res.status(200).json({
                status: 'success',
                data: {
                    tasks,
                },
            })
        } catch (error) {
            return res.status(500).json({
                status: 'error',
                error: error.messgae,
            })
        }
    } else {
        res.status(422).send('req_method_not_supported')
    }
}

export default connectDB(handler)
