'use client'
import React, { useEffect, useState } from 'react'

const Mindfulness = () => {
  const [mindfullTime, setMindfullTime] = useState(4) // Starting time for Inhale
  const [breathType, setBreathType] = useState('Inhale') // Initial breath type
  const [isStart, setIsStart] = useState(false) // To check if session is started
  const [countdown, setCountdown] = useState(3) // Countdown timer state
  const [sessionStarted, setSessionStarted] = useState(false) // To check if session has started

  function timeFunction() {
    // Logic for managing the breathing intervals
    if (breathType === 'Inhale' && mindfullTime === 0) {
      setMindfullTime(7) // Set time for holding breath
      setBreathType('Hold')
    } else if (breathType === 'Inhale') {
      setMindfullTime((prev) => prev - 1)
    } else if (breathType === 'Hold' && mindfullTime === 0) {
      setMindfullTime(8) // Set time for exhaling
      setBreathType('Exhale')
    } else if (breathType === 'Hold') {
      setMindfullTime((prev) => prev - 1)
    } else if (breathType === 'Exhale' && mindfullTime === 0) {
      setMindfullTime(4) // Set time for inhaling
      setBreathType('Inhale')
    } else if (breathType === 'Exhale') {
      setMindfullTime((prev) => prev - 1)
    }
  }

  useEffect(() => {
    const tid = setInterval(() => {
      if (isStart && !sessionStarted) {
        // Countdown timer
        if (countdown > 0) {
          setCountdown((prev) => prev - 1)
        } else {
          setSessionStarted(true) // Start the session
          setMindfullTime(4) // Reset mindfullTime for the session start
        }
      } else if (sessionStarted) {
        // Call the timeFunction only after the session starts
        timeFunction()
      }
    }, 1000)

    return () => {
      clearInterval(tid)
    }
  }, [mindfullTime, isStart, countdown, sessionStarted])

  const handleStartClick = () => {
    setIsStart(true) // Start the countdown
    setCountdown(3) // Reset countdown to 3 seconds
    setSessionStarted(false) // Reset session started state
  }

  return (
    <div className="bg-[#0A192F] min-h-screen text-[#CCD6F6] font-sans flex items-center justify-center">
      <div className="container mx-auto py-10 px-4 text-center">
        <h1 className="text-6xl font-bold mb-8 text-[#FFC300]">
          Mindfulness Session
        </h1>
        <p className="text-xl leading-relaxed mb-6">
          Take a moment to relax and breathe deeply. This mindfulness session is
          designed to help you unwind and focus on the present moment.
        </p>

        <p className="text-lg leading-relaxed">
          Breathe in... Breathe out... Repeat this for a few minutes to feel
          refreshed.
        </p>

        {!isStart && !sessionStarted && (
          <button
            onClick={handleStartClick}
            className="bg-[#FFC300] text-[#0A192F] px-4 py-2 rounded-full text-lg font-semibold hover:bg-[#0A192F] hover:text-[#FFC300] transition-colors duration-300 mt-8" // Added mt-8 for top margin
          >
            Start Breathing Session
          </button>
        )}

        {/* Display countdown or breathing instructions */}
        {isStart && !sessionStarted && (
          <div className="flex justify-center my-6">
            <h1 className="text-4xl font-bold text-[#FFC300]">
              Starting in {countdown}...
            </h1>
          </div>
        )}

        {/* Circular element with a border */}
        {sessionStarted && (
          <div className="flex justify-center  mt-8">
            <div className="w-[400px] h-[400px] rounded-full border-2 border-[#FFC300] flex items-center justify-center">
              {/* Centered content inside the circle */}
              <div className="flex flex-col items-center">
                <h1 className="text-6xl font-bold text-[#FFC300]">
                  {breathType}
                </h1>
                <h1 className="text-8xl font-bold text-[#FFC300] mt-2">
                  {mindfullTime}
                </h1>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Mindfulness
