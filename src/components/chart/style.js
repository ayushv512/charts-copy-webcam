import styled from 'styled-components';
import {deviceWidths} from '../../config/config';

export const ChartComponentWrapper = styled.div`
    .chart-div {
        width: 90%;
        margin: 20px auto;
        height: 600px;
    }

    @media (max-width:${deviceWidths.phoneWidth}) {
        .chart-div {
            width: 100%;
            margin: 0px auto;
        }
    }

`
