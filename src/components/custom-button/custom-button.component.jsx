import React from 'react'

import './custom-button.styles.scss'

const CustomButton = ({ children, isGoogleSignIn, invertd, ...otherProps }) => (
    <button
        className={
            `${invertd ? 'inverted' : ''}
                ${isGoogleSignIn ?
                'google-sign-in' : ''}
                 custom-button`} {...otherProps}>
        {children}
    </button>
)

export default CustomButton