import React  from "react"
import "./NftCard.css"


const NftCard = (props) =>{
    
    const id = props.item.id;
    const name = props.item.name.substring(0,20);
    const image = props.item.image
    const contract = props.item.contract_address
    const quantity = props.item.quantity
    const price = props.item.price
    console.log(image)

    return (
        <div className="single__nft__card">
          <div className="nft__img ">
            <img src={image} alt="" className="image w-75"/>
          </div>
    
          <div className="nft__content">
            <h5 className="nft__name">
              {name}
            </h5>
    
            <div className="data__info d-flex gap-3">
    
              <div className="data__info w-100 d-flex align-items-center justify-content-between">
                <div>
                  <h6>Traded</h6>
                  <p >{quantity}</p>
                </div>
                <div>
                  <h6 >Volume</h6>
                  <p>{parseInt(price)}  ETH</p>
                </div>
                

              </div>
              
            </div>
            <div className="contract">{contract}</div>
    
            
          </div>
        </div>
      );
    };

export default NftCard;