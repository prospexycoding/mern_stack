
import MessageContainer from "./components/messagescontainer"
import Form from "./components/form"
import "./style.css"
import Header from "./components/header"
import Footer from "./components/footer"


export default function App(){
    return(
        <div className="all">
            <Header/>
            <Form/>
            <MessageContainer/>
            <Footer/>
        </div>
    )
}