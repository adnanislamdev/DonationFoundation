import DonationCard from "./DonationCard"
function DonationSection(){
    return(
        <div className = "flex justify-center gap-6 flex-row ">
            <DonationCard amount = {10} desc="Blankets"/>
            <DonationCard amount = {20} desc="Gold"/>
            <DonationCard amount = {30} desc="Platinum"/>
        </div>
    )
}
export default DonationSection
