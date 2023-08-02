import {useState, useEffect} from 'react'
import {
  ClockContainer,
  Heading,
  ClockImage,
  Time,
  Button,
} from './styledComponents'

const Clock = () => {
  const [date, setDate] = useState(new Date())
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let timer
    if (isRunning) {
      timer = setInterval(() => {
        setDate(new Date())
      }, 1000)
      console.log('main')
    }

    return () => {
      clearInterval(timer)
      console.log('soni')
    }
  }, [isRunning])

  const clicking = () => {
    setIsRunning(true)
  }

  const stopping = () => {
    setIsRunning(false)
  }

  return (
    <ClockContainer>
      <Heading>Clock</Heading>
      <ClockImage
        src="https://assets.ccbp.in/frontend/hooks/clock-img.png"
        alt="clock"
      />
      <Time> {date.toLocaleTimeString()} </Time>
      <Button onClick={clicking}>Start</Button>
      <Button onClick={stopping}>Stop</Button>
    </ClockContainer>
  )
}

export default Clock
