import connectDB from '@/middleware/mongodb'
import Phase from '@/models/PhaseModel'
import Task from '@/models/TaskModel'

const handler = async (req, res) => {
    if (req.method === 'PATCH') {
        const { isComplete } = req.body
        const { slug } = req.query

        if (slug.length === 3 && slug[1] === 'phases') {
            const phaseId = slug[2]

            try {
                const updatedPhase = await Phase.findByIdAndUpdate(
                    phaseId,
                    {
                        isComplete,
                    },
                    {
                        new: true,
                        runValidators: true,
                    }
                )

                res.status(200).json({
                    status: 'success',
                    data: {
                        phase: updatedPhase,
                    },
                })
            } catch (error) {
                res.status(400).json({
                    status: 'fail',
                    error: error.message,
                })
            }
        } else {
            res.status(400).json({
                status: 'fail',
                message: 'incomplete_request',
            })
        }
    } else if (req.method === 'POST') {
        const { slug } = req.query
        const { purpose } = req.body

        if (purpose === 'DELETE_PHASE') {
            if (slug.length === 3 && slug[1] === 'phases') {
                const phaseId = slug[2]
                const taskId = slug[0]

                try {
                    // delete the phase in db
                    const task = await Task.findById(taskId)
                    if (task.phases.length === 1) {
                        return res.status(400).json({
                            status: 'fail',
                            message: 'The task must have at least 1 phase',
                        })
                    }

                    await Phase.findByIdAndDelete(phaseId)
                    // remove the phase id in task db
                    task.phases = task.phases.filter(
                        (phase) => phase._id.toString() !== phaseId
                    )

                    await task.save().then((task) => task.populate('phases'))

                    res.status(200).json({
                        status: 'success',
                        data: {
                            task,
                        },
                    })
                } catch (error) {
                    res.status(400).json({
                        status: 'fail',
                        error: error.message,
                    })
                }
            }
        } else {
            res.status(400).json({
                status: 'fail',
                message: 'incomplete_request',
            })
        }
    }
}

export default connectDB(handler)
