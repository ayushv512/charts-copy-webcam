import styled from 'styled-components';
import {deviceWidths} from '../../config/config';

export const CopyComponentWrapper = styled.div`
    margin: 50px 0;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    textarea {
        width: 500px;
        font-family: 'Open Sans';
        font-size: 22px;
        padding: 20px;
        line-height: 1.2;
        ::placeholder{
            line-height: 1.5;
        }
    }
    button {
        width: 292px;
        height: 75px;
        margin-top: 20px;
        font-size: 20px;
        display: flex;
        justify-content: space-between;
        padding: 25px;
        border-radius: 15px;
        background-color: #2c2c2c;
        color: white;
        font-weight: bold;
        :hover {
            background-color: #2c2c2c;
            opacity: 0.9;
        }
    }
    
    @media (max-width:${deviceWidths.phoneWidth}) {
        textarea {
            width: 300px;
        }
        button {
            width: 200px;
            height: 40px;
            font-size: 15px;
        }
    }

`
