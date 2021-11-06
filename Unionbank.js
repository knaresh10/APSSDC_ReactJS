// to import a file type the <Filename />
import React from 'react'
import Andhrabank from './Andhrabank'
import Corporationbank from './Corporationbank'

export default function Unionbank() {
    let initialData = {
        uname:"kalyan",
        age:""
    }
    
    return (
        <div>
            <Andhrabank location="Guntur" data={initialData}/>
            <Corporationbank location="Kakinada" data={initialData}/>
            
        </div>
    )
}
