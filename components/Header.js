import { Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Button, ConnectButton, Input } from "web3uikit";

export default function Header(){

    return(
        <nav style={{
            display: "flex",
            flexDirection: "row",
            justifyContent:"space-between",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            padding: "1%"       
        }}>
            <div style={{
                display:"flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Image src="/election_logo.png" width={50} height={50} />
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap:"5px",
                    
                }}>
                        <h4>भारतीय निर्वाचन आयोग</h4>
                        <p>Election Commission of India</p>
                </div>

            </div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                gap:"8px"
            }}>
                <div style={{
                    display:"flex",
                    flexDirection:"row",
                    gap: "22px"
                }}>
                    <Link href={"/"} >
                        मुख्य पृष्ठ 
                    </Link>
                    <Link href={"/NewCommencement"}>
                        निर्वाचन आयोग 
                    </Link>
                    <Link href={'/GiveVotePage'}>
                        Give vote 
                    </Link>
                    
                </div>
                <Input
                    size="regular"
                    label="यहाँ खोज करें"
                    name="Test text Input"
                    onBlur={function noRefCheck(){}}
                    onChange={function noRefCheck(){}}
                    />
                <Button
                    onClick={function noRefCheck(){}}
                    text="Search"
                    theme="outline"
                    />
                

                <ConnectButton moralisAuth={true}/>
            </div>
            

            
            
            

        </nav>
    )
}