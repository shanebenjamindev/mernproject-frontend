import React from 'react'
import { Outlet } from 'react-router-dom'
import { WrapperMainComponent } from './style'

export default function MainComponent() {
    return (
        <WrapperMainComponent>
            <Outlet />
        </WrapperMainComponent>
    )
}
