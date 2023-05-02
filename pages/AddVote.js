import { ContractAbi, ContractAddress } from "../constants"
import { useEffect, useState } from "react"
import { useMoralis, useWeb3Contract } from "react-moralis"
import { Input, Modal, Radios,useNotification } from "web3uikit"
export default function AddVote({isVisible, onClose}){

    const {account, isWeb3Enabled} = useMoralis()
    const [candidateChosen, setCandidateChosen] = useState("0")
    const [AadharNumber, setAadharNumber] = useState(0)
    const [aadharOptionPopUp, setAadharOptionPopUp] = useState(false)
    const [hideModal, setHideModal] = useState(true)
    const [threwError, setThrewError] = useState(false)
    const {runContractFunction} = useWeb3Contract()

    const dispatch = useNotification()

    const handleNewNotification = () => {
        dispatch({
            type: "info",
            message: "Vote added sucessfully!",
            title: "Successfully Added!",
            position: "topR",
            icon: "🔔",
        })
    }


    const {runContractFunction: updateVoteGiven} = useWeb3Contract({
        abi: ContractAbi,
        contractAddress: ContractAddress,
        functionName: "giveVote",
        params:{
            voter: account,
            candidate: candidateChosen
        },
    })

    const {runContractFunction: aproveVote} = useWeb3Contract({
        abi: ContractAbi,
        contractAddress: ContractAddress,
        functionName: "approveVote",
        params:{
            voter: account,
            aadhar: AadharNumber
        },
        onError:()=>{
            alert("Aadhar number is incorrect")
            window.location = "/GiveVotePage"
        }
    })
    
    async function handleCandidateChoosen(){
        onClose()
        setAadharOptionPopUp(true)
    
    }
    function closeModal(){
        setHideModal(false)
    }

    // async function handleSuccess(){
    //     setHideModal(false)
    //     onClose()
    //     await aproveVote()
    //     console.log("Vote approved")
    // }
    const handleErrorNotification = ()=>{
        dispatch({
            type: "info",
            message: "Aadhar number is incorrect",
            title: "Entre correct Aadhar number",
            position: "topR",
            icon: "🚫",
        })
    }
    async function handleContractSuccess(){
        
        const functionCall = await aproveVote({onError:(error)=>console.log(error)})
        if(typeof functionCall == "undefined"){
            setThrewError(true)
            handleErrorNotification()
            console.log("Aadhar incorrect")
            alert("Aadhar number is incorrect.")
        }else{
            handleNewNotification()
            alert("Vote added successfully!")
            window.location = "/GiveVotePage"
        }
        closeModal()
    }


    return(

        <div>
            <Modal
                isVisible={isVisible}
                onCancel={onClose}
                onCloseButtonPressed={onClose}
                onOk={handleCandidateChoosen}
            >    
                <Radios
                    items={[
                        'Amit shah',
                        "Rahul gandhi",
                        "Mamata banargee",
                        "Arvind Kejariwal"
                      ]}
                      onBlur={function noRefCheck(){}}
                      onChange={(event) => {
                        setCandidateChosen(event.target.value)
                        console.log(candidateChosen)
                      }}
                      title="Choose the candidate."
                />

            </Modal>
            
            {aadharOptionPopUp ? (
                <div>
                    <Modal
                        isVisible={hideModal}
                        onCancel={closeModal}
                        onCloseButtonPressed={closeModal}
                        onOk={()=>{
                            console.log("entred in function")
                            updateVoteGiven({
                                onError: (error)=>console.log(error), 
                                // onSuccess: () => {
                                //     aproveVote({onError:(error)=>console.log(error)})
                                //     closeModal()
                                // }
                                onSuccess: handleContractSuccess
                            },
                            
                            )
                            
                            
                            
                        }}
                        
                    >
                        <Input
                            label="Entre your Aadhar number to confirm"
                            name="Aadhar number"
                            onChange={(event) => {
                                setAadharNumber(event.target.value)
                            }}
                        />
                    </Modal>
                </div>
            ) : (
                
                console.log("Something went wrong")
                
            )}

        </div>
       
    )
}