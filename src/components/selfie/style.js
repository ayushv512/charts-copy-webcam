import styled from 'styled-components';
import {deviceWidths} from '../../config/config';

export const SelfieComponentWrapper = styled.div`
    margin: 20px 0;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .webcam-btns, .webcam-video {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
    }

    button {
        width: 292px;
        height: 75px;
        margin: 20px;
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
    .MuiButton-contained a {
        color: #FFF;
    }
    .MuiButton-contained.Mui-disabled a{
        color: rgba(0, 0, 0, 0.26);
    }

    @media (max-width:${deviceWidths.smallDesktop}) {
       .webcam-video {
            flex-direction: column;
            align-items: center;
            canvas {
                margin-top: 20px;
            }
       }
    }

    @media (max-width:${deviceWidths.phoneWidth}) {
        .webcam-btns {
            flex-direction: column;
            align-items: center;
            button {
                width: 200px;
                height: 40px;
                font-size: 15px;
            }
        }
    }
    
`