"use client";

import * as Sentry from '@sentry/nextjs'

export default function DashboardPage() {

  const fakeAPI = async () => {
    try {
      console.log("try...")
      throw new Error("ERRRR")
      
    } catch (error) {
      console.log("...catch")
      Sentry.captureException(error)
      
    }
  }
  return (
    <div>
      <button onClick={fakeAPI}>Send Error</button>
      <h1>Dashboard page</h1>
    </div>
  );
}
