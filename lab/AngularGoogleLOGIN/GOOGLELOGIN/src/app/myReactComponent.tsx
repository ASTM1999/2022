import * as React from 'react'
import { useState } from 'react'

const MyReactCoponent = () =>{
    const [text, setText] = useState('First Box')
    return (
        <div>
            {text}
        </div>
    )
}