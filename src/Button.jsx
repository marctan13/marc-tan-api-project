/* eslint-disable react/prop-types */
import React from 'react'

export default function Button(props){
    return(
        <button className='randomButton'>
            {props.name}
        </button>
    )
}