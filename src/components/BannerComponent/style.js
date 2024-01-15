import styled from "styled-components";
import { Col, Row } from "antd";

export const WrapperBannerComponent = styled(Row)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10%, 1fr));
    gap: 10px;
    align-items: center; 
`;

export const WrapperBannerImg = styled(Col)`

    img {
        border-radius: var(--item-border-radius);
        width: 100%;
    }
    &:nth-child(1){
        grid-column: 1/6;
        grid-row: 1/3;
    }
    
`;