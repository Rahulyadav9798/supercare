import React from 'react'
import EmailAccount from '../UI/EmailAccount'


const emailProps = {
    heading: "Create a free account",
    link: "name"
}

const ChildCareAccount = () => {
    return (
        <EmailAccount {...emailProps} />
    )
}

export default ChildCareAccount
