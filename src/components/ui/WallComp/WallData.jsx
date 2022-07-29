import React, {useState} from "react"
import {Container,Row, Col} from "reactstrap"
import Select from "react-select"

import{NFT_DATA} from "../../../assets/data/data.js"
import{NFT_DATA_WEEK} from "../../../assets/data/dataWeek.js"
import NftCard from "../Nft-card/NftCard"
import "./wallData.css"

const options = [
    { value: NFT_DATA, label: 'Last Day' },
  { value: NFT_DATA_WEEK, label: 'Last Week' },
]



const WallData = () =>{

    const [data, setData] = useState(NFT_DATA)
    

    return(
        <section>
            <Container>
                <Row>
                    <Col lg="12" className="mb-5 filter gap-4">
                        <h3 className="trending__title">Most traded in the past</h3>
                        <button className="btn" onClick={()=>setData(NFT_DATA)}>24H</button>
                        <button className="btn" onClick={()=>setData(NFT_DATA_WEEK)}>Week</button>
                        
                    </Col>
                    
                    {data.slice(0,20).map((item)=>(
                        <Col lg="3" md="4" sm="6" key={item.id} className="mb-4">
                            <NftCard item={item}/>
                        </Col>

                    ))}
                </Row>
            </Container>



        </section>
 )
}

export default WallData;