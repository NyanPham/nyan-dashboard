const ProgressCircle = (props) => {
    let {
        size = 60,
        progress = 23,
        trackWidth = 5,
        trackColor = `#ddd`,
        indicatorWidth = 5,
        indicatorColor = `#07c`,
        indicatorCap = `round`,
        spinnerMode = false,
        spinnerSpeed = 1,
    } = props

    const center = size / 2,
        radius =
            center -
            (trackWidth > indicatorWidth ? trackWidth : indicatorWidth),
        dashArray = 2 * Math.PI * radius,
        dashOffset = dashArray * ((100 - progress) / 100)

    return (
        <>
            <div
                className="svg-pi-wrapper"
                style={{ width: size, height: size }}
            >
                <svg className="svg-pi" style={{ width: size, height: size }}>
                    <circle
                        className="svg-pi-track"
                        cx={center}
                        cy={center}
                        fill="transparent"
                        r={radius}
                        stroke={trackColor}
                        strokeWidth={trackWidth}
                    />
                    <circle
                        className={`svg-pi-indicator ${
                            spinnerMode ? 'svg-pi-indicator--spinner' : ''
                        }`}
                        style={{ animationDuration: spinnerSpeed * 1000 }}
                        cx={center}
                        cy={center}
                        fill="transparent"
                        r={radius}
                        stroke={indicatorColor}
                        strokeWidth={indicatorWidth}
                        strokeDasharray={dashArray}
                        strokeDashoffset={dashOffset}
                        strokeLinecap={indicatorCap}
                    />
                </svg>
            </div>
        </>
    )
}

export default ProgressCircle
