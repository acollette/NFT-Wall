import React, {useState, useEffect} from "react"
import {Container,Row, Col} from "reactstrap"
import {ethers} from "ethers"
import tagContractJSON from "../../../assets/contracts/tagContract.json"
import "../WallComp/wallData.css"
import "../WalletC/walletData.css"
import "./tagData.css"

const TagContractAddress = "0xdE7475DfcF46a4e3B523C7dFc884A3a8100191aC"

const provider = new ethers.providers.Web3Provider(window.ethereum)
const signer = provider.getSigner()
const TagContract = new ethers.Contract(TagContractAddress, tagContractJSON.abi, signer)

const TagData = () => {

    const[img1, setImg1] = useState("")
    const[img2, setImg2] = useState("")
    const[img3, setImg3] = useState("")
    const[img4, setImg4] = useState("")

    const[shareSpot, setShareSpot] = useState("")
    const[shareCollection, setShareCollection] = useState("")
    const[shareDescription, setShareDescription] = useState("")
    const[shareDate, setShareDate] = useState("")

    const spot = (e) =>{
        console.log(e.target.value);
        setShareSpot(e.target.value)
    }

    const collection = (e) =>{
        console.log(e.target.value);
        setShareCollection(e.target.value);
    }

    const description = (e) =>{
        console.log(e.target.value);
        setShareDescription(e.target.value);
    }

    const date = (e) =>{
        console.log(e.target.value);
        setShareDate(e.target.value);
    }

    const share = async() => {
        const newSpot = ethers.BigNumber.from(shareSpot);
        const newCollection = shareCollection;
        const newDescription = shareDescription;
        const newDate = shareDate;

        let tx1 = await TagContract.customizeData(newSpot, newCollection, newDescription, newDate);
        await tx1.wait();
        alert("New project added - Please refresh page")

    }

    async function getImages(){
        let img1metaBase64 = await TagContract.tokenURI(ethers.BigNumber.from(1))
        let img2metaBase64 = await TagContract.tokenURI(ethers.BigNumber.from(2))
        let img3metaBase64 = await TagContract.tokenURI(ethers.BigNumber.from(3))
        let img4metaBase64 = await TagContract.tokenURI(ethers.BigNumber.from(4))
        
        var img1Base64  =  atob(await img1metaBase64.substr(29))
        var img2Base64  =  atob(await img2metaBase64.substr(29))
        var img3Base64  =  atob(await img3metaBase64.substr(29))
        var img4Base64  =  atob(await img4metaBase64.substr(29))


        var img1test = JSON.parse(await img1Base64)
        var img2test = JSON.parse(await img2Base64)
        var img3test = JSON.parse(await img3Base64)
        var img4test = JSON.parse(await img4Base64)

        var newImage1 = await img1test.image
        var newImage2 = await img2test.image
        var newImage3 = await img3test.image
        var newImage4 = await img4test.image

        setImg1(newImage1)
        setImg2(newImage2)
        setImg3(newImage3)
        setImg4(newImage4)

        

    }


    useEffect(()=>{
        getImages();
    },[])
   
    return(
        <section>
            <Container>
                <Row >
                    <Col lg="12" className="mb-5 filter gap-4 d-flex justify-content-center">
                        <h3 className="trending__title">Tag below NFT's</h3>
                        
                        
                    </Col>
                    <div className=" nft__img__tag d-flex flex-wrap  justify-content-center gap-4" >
                        
                        <img  src={img1} width="450" height="450" />
                        <img  src={img2} width="450" height="450"  />                       
                        <img  src={img3} width="450" height="450"  />                   
                        <img  src={img4} width="450" height="450"  />
                        
                    </div>
                </Row>
            </Container>
            <Container>
                <Row>
                    <div  className=" filter gap-4 d-flex justify-content-center">
                            <h2 className="mt-5 ">Share your project</h2>
                    </div>
                    <div  className=" filter gap-4 d-flex justify-content-center">
                            <h4 className="">price: 0.01 ETH</h4>
                    </div>
                    <div className=" filter gap-4 d-flex justify-content-center">
                        <input onChange={spot}  type="text" className="newsletter w-25" placeholder="Spot #"/>
                    </div>

                    <div className=" filter gap-4 d-flex justify-content-center">
                        <input onChange={collection} type="text" className="newsletter w-25" placeholder="Collection Name"/>
                    </div>
                    <div className=" filter gap-4 d-flex justify-content-center">
                        <input onChange={description} type="text" className="newsletter w-25" placeholder="Description"/> 
                    </div>
                    <div className=" filter gap-4 d-flex justify-content-center">
                        <input onChange={date} type="text" className="newsletter w-25" placeholder="Date and Location"/> 
                    </div>
                    <div className=" mt-4 filter gap-4 d-flex justify-content-center">
                        <button onClick={share} className="btn btn__tag gap-2 w-25">Share</button>
                    </div>

                    

                </Row>
            </Container>
                
                
                
           



        </section>
 )
}

export default TagData;