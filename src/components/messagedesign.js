import Axios from "axios"
import { useState } from "react"


export default function MessageDesign({prod}){

// updating
    const[Show,Setshow]= useState(false)

    const[update,Setupdate] = useState({
        firstsubject:"",
        secondsubject:"",
        thirdsubject:"",
        forthsubject:""
    })

    function handleChange(event){
         const{name,value} = event.target

         Setupdate((prev)=>{
             return {
                ...prev,
                [name]:value
             }
         })
    }

    // updating
    function handleUpdate(event){
        event.preventDefault()

        Axios.patch('http://localhost:5000/sub/' + prod._id,{
            Firstsubject:update.firstsubject,
            Secondsubject:update.secondsubject,
            Thirdsubject:update.thirdsubject,
            Forthsubject:update.forthsubject
        }).then(()=>{
            console.log('Updated successfully')
        }).catch((err)=>{
            console.log('Failed to update')
        })
    }
 


    
 
// deleteing
    function handledelete(){
        Axios.delete('http://localhost:5000/sub/' + prod._id )

    }


    if(Show){
        return(
            <form>
                <input type="text" name="firstsubject"  onChange={handleChange} value={update.firstsubject}/>
                <input type="text"  name="secondsubject" onChange={handleChange} value={update.secondsubject}/>
                <input type="text" name="thirdsubject" onChange={handleChange} value={update.thirdsubject}/>
                <input type="text" name="forthsubject" onChange={handleChange} value={update.forthsubject}/>
                <div className="btn">
                <button type="submit" onClick={handleUpdate}>Update Subject</button>
                <button type="submit" onClick={()=> Setshow(!Show)}>Cancle Update</button>
                </div>

            </form>
        )
    }



    return(
        <div className="message-design">
            <h1>first-subject</h1>
            <span className="first-subject">{prod.Firstsubject}</span>
            <h1>second-subject</h1>
            <span className="second-subject">{prod.Secondsubject}</span>
            <h1>third-subject</h1>
            <span className="third-subject">{prod.Thirdsubject}</span>
            <h1>forth-subject</h1>
            <span className="forth-subject">{prod.Forthsubject}</span>


            <div className="btn">
            <button onClick={handledelete} type="submit">Delete</button>
            <button type="submit" onClick={()=> Setshow(!Show)}>Update</button>
            </div>


            
        </div>
    )
}