import { useClubContext } from "../../layout/ClubAdminLayout";
const ClubHero = ()=>{
    const club = useClubContext()
    const clubprofile = club?.clubprofile
    return(
        <>
        <div className="w-7/10 flex justify-center items-center border-1 border-border bg-[radial-gradient(circle_at_left_bottom,_#002F2B_10%,_#000000_40%,_#000000_70%)] h-[150px] p-[20px] rounded-[20px] transition-all duration-300 hover:border-primary hover:shadow-[0_0_20px_rgba(3,154,0,0.15)] responsive-container">
                <div className="flex items-center gap-3">
                    <p className="text-white text-3xl text-center font-medium responsive-text-lg">
                        {`${clubprofile?.club || 'club name'}`}
                    </p>
                </div>
            </div>
        </>
    )
}

export default ClubHero;