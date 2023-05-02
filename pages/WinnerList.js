import ElectionData from "./ElectionData"
import { Card,Illustration } from "web3uikit"
export default function WinnerList(){
    return(
        <div style={{
            display: "flex", 
            flexDirection:"column", 
            justifyContent:"space-around",
            alignItems:"center",
            padding: "10% 15% 10% 15%"}}>
            
            {ElectionData.map((item) => {
                            
                return <div key={item.sr}>
                    
                </div>
            })}
            
            
            

        </div>
    )
}