
import { useState,useEffect } from "react"
import MessageDesign from "./messagedesign"

export default function MessageContainer(){

    const [subject,setSubject] = useState([])


    useEffect(()=>{

        fetch('http://localhost:5000/sub/getall').then((res)=>{
            return res.json()
        }).then((data)=>{
            setSubject(data.subjects)
        })

    },[1])




    const finished = subject.map((eee)=>{
        return <MessageDesign  key={eee._id}
                               prod = {eee}/>
    })








    return(
        <div className="message-contain">
            <div className="message-box">
                    {finished}
            </div>
        </div>
    )
}