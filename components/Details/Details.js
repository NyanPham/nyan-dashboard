import React from 'react'
import DetailsHeader from './DetailsHeader'
import DetailsSteps from './DetailsSteps'
import DetailsSummary from './DetailsSummary'
import DetailTimeline from './DetailTimeline'

const Details = () => {
    return (
        <div className="w-2/5">
            <DetailsHeader />
            <DetailsSummary />
            <DetailTimeline />
            <DetailsSteps />
        </div>
    )
}

export default Details
