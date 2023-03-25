import React from 'react'
import DetailsHeader from './DetailsHeader'
import DetailsSteps from './DetailsSteps'
import DetailsSummary from './DetailsSummary'
import DetailTimeline from './DetailTimeline'

const Details = () => {
    return (
        <div className="w-2/5 sticky h-screen top-0 right-0">
            <DetailsHeader />
            <DetailsSummary />
            <DetailTimeline />
            <DetailsSteps />
        </div>
    )
}

export default Details
