import './RunCountdown.css'

const RunCountdown = (props) => {
	return (
		<div id="run-countdown">
			<p>{props.dataCountdown.hours}</p>
			<p>{props.dataCountdown.minutes}</p>
			<p>{props.dataCountdown.seconds}</p>
		</div>
	)
}

export default RunCountdown