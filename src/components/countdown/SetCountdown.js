import { useState } from 'react'
import './RunCountdown.css'

const SetCountdown = (props) => {

    const [getCountdown, setCountdown] = useState({
        hours: 0,
        minutes: 10,
        seconds: 0
    })

    const setTimer = (hours, minutes, seconds) => {
        props.onSetTimer(getCountdown)
    }

    const startTimer = () => {
        props.onStartTimer()
    }

    return (
        <div id="set-countdown">
            <input type="number" id="hours" value={getCountdown.hours} onChange={evt => setCountdown({...getCountdown, hours: parseInt(evt.target.value)})} />
            <input type="number" id="minutes" value={getCountdown.minutes} onChange={evt => setCountdown({...getCountdown, minutes: parseInt(evt.target.value)})} />
            <input type="number" id="seconds" value={getCountdown.seconds} onChange={evt => setCountdown({...getCountdown, seconds: parseInt(evt.target.value)})} />
            <button type="submit" onClick={setTimer}>Set time</button>
            <button type="submit" onClick={startTimer}>Start timer</button>
        </div>
    )
}

export default SetCountdown