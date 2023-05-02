import { useEffect, useState } from "react";
import { ContractAbi, ContractAddress } from "../constants";
import { useMoralis, useWeb3Contract } from "react-moralis";
import { Button, Information, useNotification } from "web3uikit";

export default function NewCommencement(){
    const {isWeb3Enabled} = useMoralis()
    const [totalVotedCount, setTotalVotedCount] = useState("0")
    const [totalNonVotedCount, setTotalNonVotedCount] = useState("0")
    const [winner, setWinner] = useState("0")
    const [electionCommissionor, setElectionCommissionor] = useState(false)

    const {runContractFunction: votedStatistics} = useWeb3Contract({
        abi: ContractAbi,
        contractAddress: ContractAddress,
        functionName:"showTotalVotedCount",
        params:{}
    })

    const {runContractFunction: nonVotedStatistics} = useWeb3Contract({
        abi: ContractAbi,
        contractAddress: ContractAddress,
        functionName:"totalNonVotedCount",
        params:{}
    })

    const {runContractFunction: calculateVote} = useWeb3Contract({
        abi:ContractAbi,
        contractAddress:ContractAddress,
        functionName:"CalculateWinnerCandidate",
        params:{

        },
        
    })

    const {runContractFunction: showWinner} = useWeb3Contract({
        abi:ContractAbi,
        contractAddress:ContractAddress,
        functionName:"showWinner",
        params:{}
    })

    const dispatch = useNotification()

    const handleNewNotification = () => {
        dispatch({
            type: "info",
            message: "Transaction failed! Reload!",
            title: "Check your account",
            position: "topR",
            icon: "🚫",
        })
    }

    useEffect(()=>{
        if(isWeb3Enabled ){
            updateUIFunction()
        }
        
        
    },[isWeb3Enabled])

    async function handleClick(){
        // const calculateVoteFunctionCall = (await calculateVote({onError:(error)=>console.log(error)})).toString()   
        // console.log(typeof calculateVoteFunctionCall)
        // setWinner(calculateVoteFunctionCall)  
        const showWinnerFronCall = (await showWinner({onError:(error)=>console.log(error)})).toString()
        setWinner(showWinnerFronCall)
    }

    async function updateUIFunction(){
        const votedStatisticsCall = (await votedStatistics({onError:(error)=>console.log(error)})).toString()
        setTotalVotedCount(votedStatisticsCall)
        const nonVotedStatisticsCall = (await nonVotedStatistics({onError:(error)=>console.log(error)})).toString()
        setTotalNonVotedCount(nonVotedStatisticsCall)
        
        
    }
    return(
        <div>
            {isWeb3Enabled ? (
                <div style={{display:"flex",flexDirection:"column", gap:"5%",margin:"3%",padding:"2%"}}>
                    <Information
                        topic={totalVotedCount}
                        information="Number of people who have voted till now."
                    />
                    <Information
                        topic={totalNonVotedCount}
                        information="Number of people who have not voted"
                    />
                    <Button type="outline" size="large" text="CalculateVotes" onClick={()=>{
                        calculateVote({
                            onError: handleNewNotification,
                            onSuccess: handleClick
                        })
                    }}></Button>
                    {winner != "" ? (
                        <div>
                            <div>Winner is {winner}</div>
                            
                        </div>
                        
                    ) : (
                        <div>
                            {console.log("Something went wrong!")}
                        </div>
                        
                    )}
                </div>
                

            ) : (
                <div style={{textAlign:"center", padding:"15%", fontFamily:"roboto", fontSize:"large"}}>
                    <h1>Please connect to your wallet</h1>

                </div>
            )}

            <div>
                
            </div>
        </div>


        
        
    )
}