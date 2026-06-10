import { useState } from "react"
export default function InputBar(){
    const [amount, setAmount] = useState("")
    const [submitted, setSubmitted] = useState(false)
    function handleDonate(){
        console.log(amount)
        setSubmitted(true)
    }
    return(
        <div className = "text-lg flex justify-center p-8">
            <input type="number"
            value = {amount}
            onChange={(e) => setAmount(e.target.value)} 
            className = "bg-white rounded-sm w-80"
            />
            <button onClick = {handleDonate} className = "bg-[#303090] rounded-lg p-2 ml-4 btn text-white">{submitted ? "Selected" : "Unselected"}</button>
        </div>
    )

}