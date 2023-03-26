import connectDB from '@/middleware/mongodb'
import Phase from '@/models/PhaseModel'

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
    }
}

export default connectDB(handler)
