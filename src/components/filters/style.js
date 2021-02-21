import styled from 'styled-components';
import {deviceWidths} from '../../config/config';

export const FiltersComponentWrapper = styled.div`
    display: flex;
    border: 1px solid #CCC;
    .apply-button {
        width: 100px;
        height: 50px;
        margin-top: 20px;
        font-size: 16px;
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

    @media (max-width:${deviceWidths.smallDesktop}) {
        flex-direction: column;
        align-items: center;
    }
    @media (max-width:${deviceWidths.phoneWidth}) {
        margin-top: 20px;
        .apply-button {
            font-size: 14px;
            padding: 0px;
        }
    }
`
