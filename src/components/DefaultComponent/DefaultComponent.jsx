import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import { WrapperComponent, WrapperComponent2 } from './style';
import NavigatorComponent from '../NavigatorComponent';
import { Col, Row } from 'antd';
import MainComponent from '../MainComponent/MainComponent';

export default function DefaultComponent() {
    return (
        <>
            <HeaderComponent />
            <WrapperComponent>

                <Row>
                    <Col span={5}>
                        <NavigatorComponent />
                    </Col>

                    <Col span={19}>
                        <MainComponent />
                    </Col>
                </Row>
            </WrapperComponent>
        </>
    )
}
