import React from 'react'

export default function Button(props) {
    const { onPress, title, buttonStyle} = props
    if (buttonStyle === 'primary'){
        return (
            <button onClick={onPress} className="btn btn-primary no-printme">{title}</button>
        )
    }
    else if (buttonStyle=== 'danger'){
        return (
            <button onClick={onPress} className="btn btn-danger no-printme">{title}</button>
        )
    }
    
}
