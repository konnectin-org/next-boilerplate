"use client";

import Button from '@mui/material/Button'

export default function Profile () {
  function Hey(params:type) {
    Greetings("heyo")
  }

  function Greetings(msg) {
    alert(msg)
  }
    return (
        <>
        <Button onClick={Hey}>Profile Button</Button>
        </>

    )
}
