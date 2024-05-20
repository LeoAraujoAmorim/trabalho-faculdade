import React from 'react'

function TextContainer({ children, urlText }) {
  return (
    <div className="h-screen flex flex-col text-center align-middle items-center pt-20 container" id={urlText}>
        {children}
    </div>
  )
}

export default TextContainer