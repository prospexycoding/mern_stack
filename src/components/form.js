import { useState } from "react"
import Axios from "axios"


export default function Form(){

    

    const [data,Setdata] = useState({
        firstsubject:"",
        secondsubject:"",
        thirdsubject:"",
        forthsubject:""
    })


    function handlechsnge(event){
        const{name,value} = event.target

        Setdata((prev)=>{
            return{
                ...prev,
                [name]:value
            }
        })
    }

    function handlesubmit(e){
        e.preventDefault()

        Axios.post('http://localhost:5000/sub/posting',{
            Firstsubject:data.firstsubject,
            Secondsubject:data.secondsubject,
            Thirdsubject:data.thirdsubject,
            Forthsubject:data.forthsubject
        }).then(()=>{
            console.log('sent successfully')
        }).catch((errr)=>{
            console.log(errr)
        })
    }

    return(
        <form onSubmit={handlesubmit}>
            <h1>Form</h1>
            <input type="text" name="firstsubject" placeholder="first subject" onChange={handlechsnge} value={data.firstsubject}/>
            <input type="text" name="secondsubject" placeholder="second subject" onChange={handlechsnge} value={data.secondsubject}/>
            <input type="text" name="thirdsubject" placeholder="third subject" onChange={handlechsnge} value={data.thirdsubject}/>
            <input type="text" name="forthsubject" placeholder="forth subject" onChange={handlechsnge} value={data.forthsubject}/>

            <button type="submit">Post</button>
        </form>
    )

}