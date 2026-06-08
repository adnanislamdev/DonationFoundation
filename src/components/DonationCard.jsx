import { useState } from "react"
function DonationCard({amount, desc}){
    const [selected, setSelection] = useState(false)
    return(
        <div className = 'text-center m-8 bg-gray-100 flex gap-4 rounded-lg p-12'>
            ${amount}<br/>
            {desc} <br/>
            <button onClick={() => setSelection(true)} className = "bg-[#303090] rounded-lg p-2">{selected ? "Selected" : "Unselected"}</button>
        </div>
    )
}
export default DonationCard