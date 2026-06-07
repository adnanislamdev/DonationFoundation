import DonationCard from "./DonationCard"
function DonationSection(){
    return(
        <div>
            <DonationCard amount = {10} desc="Silver"/>
            <DonationCard amount = {20} desc="Gold"/>
            <DonationCard amount = {30} desc="Platinum"/>
        </div>
    )
}
export default DonationSection
