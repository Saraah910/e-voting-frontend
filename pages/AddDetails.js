import Link from "next/link";
import { ContractAbi, ContractAddress } from "../constants";
import { useEffect, useState } from "react";
import { useMoralis, useWeb3Contract } from "react-moralis";
import { Button, Form, useNotification,SvgArrowCircleRight, SvgArrowCircleLeft } from "web3uikit";

export default function AddDetails(){

    const {runContractFunction} = useWeb3Contract()
    const {isWeb3Enabled} = useMoralis()
    const [reset, setReset] = useState(false)
    const [detailsAdded, setDetailsAdded] = useState(false)

    const dispatch = useNotification()

    const handleNewNotification = () => {
        dispatch({
            type: "info",
            message: "Details added sucessfully!",
            title: "Transaction Notification",
            position: "topR",
            icon: "🔔",
        })
    }

    async function handleDetailsAddedSubmit(data){
        const AddName = data.data[0].inputResult
        const AddAge = parseInt(data.data[1].inputResult)
        const AddNationality = data.data[2].inputResult
        const AddAadhar = parseInt(data.data[3].inputResult)
        const AddPan = data.data[4].inputResult
        const AddWardNumber = parseInt(data.data[5].inputResult)
        const AddVotedOrNot = false

        console.log(typeof AddName, typeof AddAge, typeof AddNationality,typeof AddAadhar)
        console.log(data)

        const tx = await runContractFunction({
            params:{
                abi: ContractAbi,
                contractAddress: ContractAddress,
                functionName: "EntreDetails",
                params:{
                    name: AddName,
                    age: AddAge,
                    nationality: AddNationality,
                    aadhar: AddAadhar,
                    pan:AddPan,
                    ward_no:AddWardNumber
                },
            },
            onError: (error) => console.log(error),  
            // onSuccess: () =>{
            //     <Link href={'GiveVotePage'}>
            //     </Link>
            // } 
        })
        await tx.wait(1)
        handleNewNotification()
        setDetailsAdded(true)
        
        console.log("Added")
        console.log(typeof tx)
        
        


    }
    useEffect((data)=>{
        if(isWeb3Enabled && detailsAdded){
            alert("Click to go back to voting page")
            window.location = "/GiveVotePage"
        }
    },[isWeb3Enabled, detailsAdded])

    function handleResetForm(){
        setReset(true)
        console.log("Resetting the form...")
    }
    return(
        <div style={{
            margin:"1.5%",
            display:"flex",
            flexDirection:"column",
            marginLeft:"14%",
            marginRight:"14%",
        }}>
            {isWeb3Enabled ? (
                <div>
                    <Form
                        buttonConfig={{
                            onClick: function noRefCheck(){},
                            theme: 'primary'
                        }}
                        data={[
                            {
                            inputWidth: '100%',
                            name: 'पुरा नाम',
                            type: 'text',
                            value: '',
                            validation:{required:true}
                            },
                            {
                            name: 'जन्मदिन',
                            // state:'initial',
                            type: 'number',
                            value: '',
                            validation:{required:true}
                            },
                            {
                            inputWidth: '100%',
                            name: 'नागरिकत्व',
                            type: 'text',
                            validation: {required:true},
                            value: ''
                            },
                            {
                            name: 'आधार कार्ड क्रमांक',
                            type: 'number',
                            validation: {required: true,characterMinLength:12,characterMaxLength:12},                   
                            value: ''
                            },
                            {
                            name: 'पैन कार्ड क्रमांक',
                            type: 'text',
                            validation: {
                                required: true
                            },
                            value: ''
                            },
                            {
                            name: "वार्ड नंबर",
                            type: 'number',
                            validation: {
                                numberMax: 200,
                                numberMin: 100,
                                required: true
                            },
                            value: ''
                            },
                        
                        ]}
                        onSubmit={handleDetailsAddedSubmit}
                        title="अपनी जानकारी यह लिखें"

                        />
                        <Button theme="secondary" text="Reset" onClick={handleResetForm} size="large"/>
                </div>
            ) : (
                <div>Connect to your wallet</div>
            )}
            
        </div>
    )
}