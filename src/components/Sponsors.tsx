"use client"

import * as Sentry from '@sentry/nextjs'

const Sponsors = () => {

  const fakeAPICall = async () => {
    alert("called")
    try {
      throw new Error("Errorrr")
    } catch (error) {
      console.log("catch")
      Sentry.captureException(error)
    }
  }
  return (
  <div>
    <button onClick={fakeAPICall}>ok</button>
  </div>
)}

export {Sponsors}