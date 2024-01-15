import { Row } from 'antd';
import styled from 'styled-components';

export const WrapperHeader = styled(Row)`
    padding: 10px 100px;
    
    background-color: var(--white-color);
    `

export const WrapperHeaderText = styled.span`
    background-color: white;
    `

export const WrapperAccount = styled.div`
    display: flex;
    gap: 30px;
    justify-content: center;
    align-items: center;

    span{
        margin-left: 5px;
    }
`

export const WrapperCart = styled.div`
    display:flex;
    justify-content: center;
`