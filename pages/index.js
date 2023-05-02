import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import {useMoralis} from "react-moralis"
import { Stepper,Avatar,Information, LinkTo, Hero, Button, Card } from 'web3uikit'
import Table from './WinnerList'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const {isWeb3Enabled} = useMoralis();
  const image1 = "/hero-img-1.png"
  const image2 = "/hero-img-2.jpg"


  return (
    <div>

    <div
      style={{
        minHeight: '500px',
        padding:"35px"
      }}
    >
      <Stepper
        headerWidth={390}
        onComplete={function noRefCheck(){}}
        onNext={function noRefCheck(){}}
        onPrev={function noRefCheck(){}}
        orientation='vertical'
        step={1}

        stepData={[
          {
            content: <Image src="/home-img-1.jpg" width={800} height={430}/>,
            
          },
          {
            content: <Image src="/home-img-2.webp" width={800} height={430}/>,

          },
          {
            content: <Image src="/home-img-4.png" width={800} height={430}/>,
            
          },
          {
            content:<Image src="/hero-img-1.png" width={800} height={430}/>,

          }
        ]}
      />
    </div>

    <div style={{
      marginLeft:"4.5%",
      marginRight:"4.5%",
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-around"
    }}> 
        <div style={{
            display:"flex",
            flexDirection:"column",
            gap:"5px"
          }}>
          <div>
              <Information
                  information="ख़बरें: एक झलक"
                  topic="लोकसभा २०२४ की ताजा खबरे जनिये यहाँ."
                />
          </div>
          <div style={{
              margin:"3px",
              display:"flex",
              flexDirection:"column",
              gap:"5px",
              padding:"9px"
            }}>
              <LinkTo
                address="https://www.youtube.com/results?search_query=moving+strip+of+news+in+react"
                fontSize="10px"
                text="भारत निर्वाचन आयोग ने बूथ लेवल आफिसरों (बीएलओ) के साथ प्रत्यक्ष संवाद कायम करने के लिए बीएलओ ई-पत्रिका का विमोचन किया"
                type="external"
              />
              <LinkTo
                address="https://www.youtube.com/results?search_query=moving+strip+of+news+in+react"
                fontSize="10px"
                text="महत्वपूर्ण है मत मेरा - खण्ड III अंक 2"
                type="external"
              />
              <LinkTo
                address="https://www.youtube.com/results?search_query=moving+strip+of+news+in+react"
                fontSize="10px"
                text="General Election to Legislative Assemblies of Meghalaya, Nagaland and Tripura, 2023 - Press Note- reg."
                type="external"
              />
              <LinkTo
                address="https://www.youtube.com/results?search_query=moving+strip+of+news+in+react"
                fontSize="10px"
                text="मेघालय और नागालैंड में अग्रिम आयोजना, प्रौद्योगिकी के उपयोग और कड़ी निगरानी रखने से कुल मिलाकर शांतिपूर्वक निर्वाचन सुनिश्चित हुए"
                type="external"
              />
              <LinkTo
                address="https://www.youtube.com/results?search_query=moving+strip+of+news+in+react"
                fontSize="10px"
                text="मेघालय और नागालैंड में अग्रिम आयोजना, प्रौद्योगिकी के उपयोग और कड़ी निगरानी रखने से कुल मिलाकर शांतिपूर्वक निर्वाचन सुनिश्चित हुए"
                type="external"
              />
              <LinkTo
                address="https://www.youtube.com/results?search_query=moving+strip+of+news+in+react"
                fontSize="10px"
                text="मेघालय और नागालैंड में अग्रिम आयोजना, प्रौद्योगिकी के उपयोग और कड़ी निगरानी रखने से कुल मिलाकर शांतिपूर्वक निर्वाचन सुनिश्चित हुए"
                type="external"
              />
              <LinkTo
                address="https://www.youtube.com/results?search_query=moving+strip+of+news+in+react"
                fontSize="10px"
                text="मेघालय और नागालैंड में अग्रिम आयोजना, प्रौद्योगिकी के उपयोग और कड़ी निगरानी रखने से कुल मिलाकर शांतिपूर्वक निर्वाचन सुनिश्चित हुए"
                type="external"
              />
              <LinkTo
                address="https://www.youtube.com/results?search_query=moving+strip+of+news+in+react"
                fontSize="10px"
                text="मेघालय और नागालैंड में अग्रिम आयोजना, प्रौद्योगिकी के उपयोग और कड़ी निगरानी रखने से कुल मिलाकर शांतिपूर्वक निर्वाचन सुनिश्चित हुए"
                type="external"
              />
              <LinkTo
                address="https://www.youtube.com/results?search_query=moving+strip+of+news+in+react"
                fontSize="10px"
                text="मेघालय और नागालैंड में अग्रिम आयोजना, प्रौद्योगिकी के उपयोग और कड़ी निगरानी रखने से कुल मिलाकर शांतिपूर्वक निर्वाचन सुनिश्चित हुए"
                type="external"
              />

              <Button theme='colored' color='red' text='वर्तमान मुद्दे'></Button>
              <hr></hr>
              <br></br>
              <h4>लोकसभा २०२४ चुनाव में अपना वोट दें.</h4>
              <Link href={'/GiveVotePage'}>
                <Button theme='primary' text='यहाँ click करें'></Button>
              </Link>
            </div>
        </div>
        <div style={{display:"flex",flexDirection:"column"}}>
            <div style={{
              display:"flex",
              flexDirection:"column",
              justifyContent:"center",
              alignItems:"center",
              textAlign:"center"

            }}>
              <h3>निर्वाचन आयोग Adhikari</h3>
              <hr></hr>
              <hr></hr>
              <br></br>
              <Image src={'/hero-img-1.png'} width={200} height={200}></Image>
              <ul style={{listStyleType:"none"}}>
                <li>
                  <span>Miss S.R.Aherkar</span>
                </li>
                <li>
                  <span>Central election commisionor</span>
                </li>
                <li>
                  <span>Miss S.R.Aherkar</span>
                </li>
              </ul>
              
            </div>
            <br></br>
            <hr></hr>
            <br></br>
            <div style={{
              display:"flex",
              flexDirection:"column",
              justifyContent:"center",
              alignItems:"center",
              textAlign:"center"

            }}>
              <h3>निर्वाचन आयोग Adhikari</h3>
              <hr></hr>
              <hr></hr>
              <br></br>
              <Image src={'/hero-img-1.png'} width={200} height={200}></Image>
              <ul style={{listStyleType:"none"}}>
                <li>
                  <span>Miss S.R.Aherkar</span>
                </li>
                <li>
                  <span>Central election commisionor</span>
                </li>
                <li>
                  <span>Miss S.R.Aherkar</span>
                </li>
              </ul>
              
            </div>
            <br></br>
            <hr></hr>
            <br></br>
            <div style={{
              display:"flex",
              flexDirection:"column",
              justifyContent:"center",
              alignItems:"center",
              textAlign:"center"

            }}>
              <h3>निर्वाचन आयोग Adhikari</h3>
              <hr></hr>
              <hr></hr>
              <br></br>
              <Image src={'/hero-img-1.png'} width={200} height={200}></Image>
              <ul style={{listStyleType:"none"}}>
                <li>
                  <span>Miss S.R.Aherkar</span>
                </li>
                <li>
                  <span>Central election commisionor</span>
                </li>
                <li>
                  <span>Miss S.R.Aherkar</span>
                </li>
              </ul>
              
            </div>
            
        </div>
        <footer/>
        
    </div>














    
    
    
    
    
    

    
    
    
    </div>
  )
}
