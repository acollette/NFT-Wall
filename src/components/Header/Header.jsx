import React, {useEffect, useState, useRef} from 'react'
import './header.css'
import {Container} from "reactstrap"
import {ethers} from "ethers"

import {NavLink, Link} from "react-router-dom";

const NAV__LINKS = [
    {
        display: 'Home',
        url: '/home'
    },
    {
        display: 'Wall',
        url: '/wall'
    },
    {
        display: 'Wallet',
        url: '/wallet'
    },
    {
        display: 'Team',
        url: '/team'
    },
    {
        display: 'Tag',
        url: '/tag'
    }

]


const Header = () => {

    const [walletAddress, setWalletAddress] = useState("")
    const isConnected = walletAddress !== ""

    async function requestAccount() {
        console.log('Requesting Account')

        if(window.ethereum){
            console.log("detected")
            try {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                })
                setWalletAddress(accounts[0])
            } catch (error) {
                console.log('Error Connecting')
            }

        }
        else{
            alert('MetaMask not detected')
        }
    }

    //create provider to interact with a smart contract

    async function connectWallet(){
        if(typeof window.ethereum !== 'undefined'){
            await requestAccount();

            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const chainId = await provider.getNetwork()
            console.log(chainId);
            if(chainId.chainId !==4){
                alert("Please connect to Rinkeby Testnet")
            }
        }
    }


    const headerRef = useRef(null);

    useEffect(() => {
        window.addEventListener('scroll', () => {
          if (
            document.body.scrollTop > 80 ||
            document.documentElement.scrollTop > 80
          ) {
            headerRef.current.classList.add("header__shrink");
          } else {
            headerRef.current.classList.remove("header__shrink");
          }
        });
       
        //return () => {
        //    window.removeEventListener('scroll');
        //  };
        
      }, []);

    return(
        <header className="padding" ref={headerRef}>
            <Container>
                <div className="navigation">
                <div className="logo">
                    <h2 className=" d-flex gap-2 align-items-center ">
                    <span>
                        <i class="ri-fire-fill"></i>
                    </span>
                    NFT Wall
                    </h2>
                </div>

                <div className="nav__menu">
                    <ul className="nav__list">
                    {NAV__LINKS.map((item, index) => (
                        <li className="nav__item" key={index}>
                        <NavLink
                            to={item.url} className={navClass => navClass.isActive ? "active":""}>
                            {item.display}
                        </NavLink>
                        </li>
                    ))}
                    </ul>
                </div>

                <div className="nav__right d-flex align-items-center gap-5 ">
                    <button onClick={() => connectWallet()} className="btn d-flex gap-2 align-items-center">
                    <span>
                        <i class="ri-wallet-line"></i>
                    </span>
                    Connect Wallet
                    </button>

                    <span className="mobile__menu">
                    <i class="ri-menu-line"></i>
                    </span>
                </div>
                </div>
            </Container>
        </header>
    );
};
    


export default Header;