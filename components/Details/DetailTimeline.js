import { Suspense, useEffect, useRef, useState } from 'react'
import Calendar from 'react-calendar'
// import 'react-calendar/dist/Calendar.css'

const displayOccupiedDates = (dateButtons, activePhases) => {
    dateButtons
        .filter((button) => {
            const date = new Date(
                button.querySelector('abbr').getAttribute('aria-label')
            ).setHours(0, 0, 0, 0)

            return activePhases.some((phase) => phase.time === date)
        })
        .forEach((button) => {
            button.classList.add('occupied')
        })
}

const DetailTimeline = ({ task }) => {
    const calendarRef = useRef()
    const [clickCount, setClickCount] = useState(0)

    const { phases } = task
    const phasesWithDates = phases.map((phase) => {
        return {
            ...phase,
            time: new Date(phase.time).setHours(0, 0, 0, 0),
        }
    })

    useEffect(() => {
        if (calendarRef.current == null) return

        const allDateButtons = [
            ...calendarRef.current.querySelectorAll(
                '.react-calendar .react-calendar__month-view__days .react-calendar__tile.react-calendar__month-view__days__day'
            ),
        ]

        displayOccupiedDates(allDateButtons, phasesWithDates)
    }, [clickCount])

    return (
        <div
            className="px-4 py-5"
            ref={calendarRef}
            onClick={() => setClickCount((prevCount) => prevCount + 1)}
        >
            <Suspense>
                <Calendar
                    onChange={() => setClickCount((prevCount) => prevCount + 1)}
                />
            </Suspense>
        </div>
    )
}

export default DetailTimeline
