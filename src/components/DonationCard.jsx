import { useState } from "react"
function DonationCard({amount, desc}){
    const [selected, setSelection] = useState(false)
    return(
        <div>
            {amount}<br/>
            {desc} <br/>
            <button onClick={() => setSelection(true)}>{selected ? "Selected" : "Unselected"}</button>
        </div>
    )
}
export default DonationCard