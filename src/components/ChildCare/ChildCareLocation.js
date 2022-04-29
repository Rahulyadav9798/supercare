import React from 'react'
import ZipCodeLocation from '../UI/ZipCodeLocation'

const ChildCareLocation = () => {
    let zipProps = {
        heading: "Where do you need care ?",
        link: "need"
    }
    return (
        <div>
            <ZipCodeLocation {...zipProps} />
        </div>
    )
}

export default ChildCareLocation
