import React from 'react'

function TextContainer({ children, urlText }) {
  return (
    <div className=" md:h-screen flex flex-col text-center align-middle items-center container pt-32" id={urlText}>
        {children}
    </div>
  )
}

export default TextContainer