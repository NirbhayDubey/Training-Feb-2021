import React from 'react'

export default function button({handleDelete}) {
    return (
        <button type="button" onClick={handleDelete} style={{background : "red" , color : "white" , fontsize : "2rem"}}>
            delete me
        </button>
    )
}
