import React from 'react'

function TextContainer({ children }) {
  return (
    <div className="h-screen flex flex-col text-center align-middle items-center mt-32 container" id="fashion">
        {children}
    </div>
  )
}

export default TextContainer