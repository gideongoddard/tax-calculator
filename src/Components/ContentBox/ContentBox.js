import React from "react"
import './ContentBox.css'

export default function ContentBox({children}) {
    return (
        <div className="content-box">
            {children}
        </div>
    )
}