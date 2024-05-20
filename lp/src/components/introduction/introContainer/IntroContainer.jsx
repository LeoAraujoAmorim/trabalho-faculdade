import React from 'react'

const IntroContainer = ({ children, url }) => {
    return (
        <div className="bg-blue-600 text-center h-screen w-full" id={url}>
            {children}
        </div>

    )
}

export default IntroContainer