"use client"

import * as Sentry from '@sentry/nextjs'

const Hello = () => {
    const fakeAPI = async () => {
        try {
            console.log("try..")
            throw new Error("ERRRRR")
        } catch (error) {
            console.log("cath..")
            Sentry.captureException(error)            
        }
    }

    return (
        <button onClick={fakeAPI}>ok</button>
    )
}

export{Hello}