import React from 'react'

import {Routes, Route, Navigate} from 'react-router-dom'

import Home from '../pages/Home'
import Team from '../pages/Team'
import Wall from '../pages/Wall'
import Wallet from '../pages/Wallet'
import Tag from '../pages/Tag'


const Routers = () => {
    return(
        <Routes>
            <Route path = '/' element={<Navigate to = '/home'/>} />
            <Route path = '/home' element={<Home/>} />
            <Route path = '/wall' element={<Wall/>} />
            <Route path = '/wallet' element={<Wallet/>} />
            <Route path = '/team' element={<Team/>} />
            <Route path = '/tag' element={<Tag/>} />

        </Routes>
    )
}

export default Routers