import './RunCountdown.css'
import RunCountdown from './RunCountdown'
import SetCountdown from './SetCountdown'
import { useState } from 'react'

const Countdown = () => {
	let [getCountdown, setCountdown] = useState(
		{
			hours: 15,
			minutes: 0,
			seconds: 0
		})

	const setTimer = (evt) => {
		setCountdown({
			hours: evt.hours,
			minutes: evt.minutes,
			seconds: evt.seconds
		})
	}

	const startTimer = () => {
		
	}

	return (
		<div className="countdown">
			<SetCountdown onSetTimer={setTimer} onStartTimer={startTimer} />
			<RunCountdown dataCountdown={getCountdown} />
		</div>
	)
}

export default Countdown