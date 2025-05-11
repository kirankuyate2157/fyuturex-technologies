import React from 'react'

const Section = ({title}) => {
  return (
    <div>
      <p>{title??" Some section..."}</p>
    </div>
  )
}

export default Section
