import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderComponent from '../HeaderComponent/HeaderComponent';
  
export default function DefaultComponent() {
    return (
        <div>
            <HeaderComponent />
            <Outlet />
        </div>
    )
}
