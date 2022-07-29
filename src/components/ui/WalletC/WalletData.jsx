import React, {useState} from "react"
import {Container,Row, Col} from "reactstrap"
import Select from "react-select"

import{NFT_DATA} from "../../../assets/data/data.js"
import{NFT_DATA_WEEK} from "../../../assets/data/dataWeek.js"
import NftCard from "../Nft-card/NftCard"
import "../WallComp/wallData.css"
import "./walletData.css"

const WalletData = () => {
    let sumQuantity = 0;
    NFT_DATA.slice(0,10).forEach(element =>{
        sumQuantity += element.quantity
    })

    const [data, setData] = useState(NFT_DATA)

    //function getWidth(quantity){
    //    let percentage = quantity/sumQuantity;
    //    let width = percentage*1000;
    //    if(width>500){
    //        return "500"
    //    }
    //    else{
    //        return width.toString()
    //    }
       

    //}

    //function getHeight(quantity){
    //    let percentage = quantity/sumQuantity;
    //    let height = percentage*1000;
    //    if(height>500){
    //        return "500"
    //    }
    //    else{
    //        return height.toString()
    //    }
    //}
   
    return(
        <section>
            <Container>
                <Row>
                    <Col lg="12" className="mb-5 filter gap-4">
                        <h3 className="trending__title">Most traded in the past</h3>
                        <button className="btn" onClick={()=>setData(NFT_DATA)}>24H</button>
                        <button className="btn" onClick={()=>setData(NFT_DATA_WEEK)}>Week</button>
                        
                    </Col>
                    <div className="d-flex flex-wrap" >
                    {data.slice(0,30).map((item)=>(
                        <div key={item.id} className="" width="199.5" height="199.5">
                            <img src={item.image} alt="Missing Image" width="199.5" height="199.5" className="d-flex"/>
                        </div>

                    ))}
                    </div>
                </Row>
            </Container>



        </section>
 )
}

export default WalletData;