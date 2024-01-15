import React from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import { WrapperBannerComponent, WrapperBannerImg } from './style';


export default function BannerComponent(props) {
    const { sliders } = props;


    return (
        <WrapperBannerComponent>
            {sliders?.map((slide, index) => (
                <WrapperBannerImg key={index}>
                    <img src={slide} alt={`Slide ${index}`} />
                </WrapperBannerImg>
            ))}
        </WrapperBannerComponent>
    );
}
