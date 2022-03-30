import React,{useState}  from 'react'
import { BiMinus } from "react-icons/bi";
import { BiPlus } from "react-icons/bi";

const FaqContent = ({ question, answer }) => {
    const [show, setShow] = useState(false);
    return (
        <>
           <div className="main-heading">
                <p style={{marginBottom:'5px'}} onClick={() => setShow(!show)}> { show? <BiMinus color="white" size="1.5rem"/> : <BiPlus size="1.5rem" color="white"/>}  </p>
                <h3>{question}</h3>
                   
            </div>
            { show &&  <p className="answers"> {answer} </p> }
         
        </>
    )
}

export default FaqContent;