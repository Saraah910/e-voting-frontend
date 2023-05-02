import Link from "next/link"
import { useMoralis, useWeb3Contract } from "react-moralis"
import { Button, ConnectButton, Badge, useNotification, Card, LinkTo } from "web3uikit"
import { ContractAbi,ContractAddress } from "../constants"
import { useEffect, useState } from "react"
import { ethers } from "ethers"
import AddVote from "./AddVote"



export default function GiveVotePage(){
    const { isWeb3Enabled, account } = useMoralis()

    const {dispatch} = useNotification()
    const [showModel, setShowModal] = useState(false)
    const [data, setData] = useState([])
    const [isDetailsAdded,setIsDetailsAdded] = useState(false)
    const [isVoteGiven, setIsVoteGiven] = useState(false)
    let displayAccountDetailsCall

    const {runContractFunction: displayDetails} = useWeb3Contract({
        abi: ContractAbi,
        contractAddress: ContractAddress,
        functionName: "showMyDetails",
        params:{
            voter: account
        },
    })

    useEffect(()=>{
        if(isWeb3Enabled && account){
            updateUIValues()
        }
    },[isWeb3Enabled, account])

    const handleNewNotification = () =>{
        dispatch({
            type: "info",
            message: "You have voted already!",
            title: "Error notification",
            position: "topR",
            icon: "🚫",
        })
    }

    async function updateUIValues(){
        displayAccountDetailsCall = await displayDetails({onError: (error)=>console.log(error)})
        console.log(typeof displayAccountDetailsCall)
        console.log(displayAccountDetailsCall)
        if(typeof displayAccountDetailsCall === "undefined"){
            setIsDetailsAdded(false)
            setIsVoteGiven(true)
        }else{
            setIsDetailsAdded(true)
            setIsVoteGiven(false)
            setData(displayAccountDetailsCall)
            
        }       
        
    }

    async function handleAddingDetails(){
        console.log("handling error...")
        
    }

    const handleClickButton = () => {
        if(isVoteGiven){
            <h1>You have voted already!</h1>
            console.log("vote given already")
        }else{
            account ? setShowModal(true) : setShowModal(false)
        }
        
    }

    const handleClose = () => {
        setShowModal(false)
    }
    useEffect(()=>{
        if(isWeb3Enabled){
            <LinkTo address="/index.js" text="Go to home page"></LinkTo>
        }
    },[isWeb3Enabled])
    

    return(
        <div>
            {isWeb3Enabled ? (
                <div style={{
                    display:"flex",
                    flexDirection:"row",
                    justifyContent:"space-between",
                    alignContent:"center",
                    marginTop:"4%",
                    marginLeft:"5%",
                    marginRight:"5%",
                    border:"1px solid grey",
                    borderRadius:"5px",
                    padding:"2%"
                }}>
                    <div>
                        {isDetailsAdded ?(
                            <div style={{display:"flex", flexDirection:"column", gap:"1.5%"}}>
                                <Card style={{
                                    width:"100%",
                                    textAlign:"flex-start",
                                    marginLeft: "5%",
                                    padding:"5%"
                                }}
                                    title="मतदाता की जानकारी"
                                    description="भारतीय निर्वाचन आयोग अधिकारी"
                                    onClick={handleClickButton}>
                                
                                    <div style={{
                                        display: "flex",
                                        flexDirection:"column",
                                        alignItems:"center",
                                        marginLeft:"1.5%"
                                    }}>
                                        <h5>मतदाता का संपूर्ण नाम: {data[0]}</h5>
                                        <h5>मतदाता की आयु: {data[1]}</h5>
                                        <h5>मतदाता का नागरिकत्व: {data[2]}</h5>
                                        {/* <h5>मतदाता का आधार क्रमांक: {Aadhar}</h5> */}
                                        <h5>मतदाता का पैन कार्ड क्रमांक: {data[4]}</h5>
                                        <h5>मतदाता का वार्ड नंबर: {data[5]}</h5>
                                        {console.log(data[6])}
                                    </div>
                                </Card>
                                <br></br>
                                {data[6] ? (
                                    <div style={{display:"flex"}}>                                        
                                        {handleNewNotification}
                                        <Link href={"/"} style={{textUnderlineOffset:"1%"}}>Go back to home page</Link>
                                    </div>
                                ):(
                                    <AddVote 
                                        isVisible={showModel}
                                        onClose={handleClose}
                                        votedAlready={isVoteGiven}/>
                                )}
                                
                                
                            </div>
    
                        ):(
                            <div style={{display:"flex", flexDirection:"column", gap:"35px",padding:"1.6%"}}>
                                <Link href={"/AddDetails"}>
                                    <Button theme="primary" text="Click to add details"></Button>
                                </Link>
                                
                               
                            </div>

                            
                        )}
                    </div>
                    <div>
                        <Link href={"/WinnerList"}>
                         
                            <Button
                                color="blue"
                                onClick={function noRefCheck(){}}
                                size="large"
                                text="Check Last year's Winners"
                                theme="colored"
                            />

                        </Link>
                    
                        
                        
                        
                    </div>
                </div>
            ) : (
                <div style={{textAlign:"center", padding:"15%", fontFamily:"roboto", fontSize:"large"}}>
                    <h1>Please connect to your wallet</h1>

                </div>
                )
            }
        </div>
        
    )
}





