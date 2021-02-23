import styled from 'styled-components';
import {deviceWidths} from '../../config/config';

export const ChartPageWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    .filters-wrapper {
        display: flex;
        justify-content: space-evenly;
        margin: 20px;
        margin-bottom: 0px;

        .filters-btn {
            width: 200px;
            height: 80px;
            font-size: 16px;
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
        .filter-panel-hide {
            display: none
        }
    }
    .loading-progress {
        height: 500px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 25px;
    }
       
    .error-msg {
        display: flex;
        justify-content: center;
        font-size: 25px;
        margin: 50px;
        color: red;
    }

    @media (max-width:${deviceWidths.phoneWidth}) {
        .filters-wrapper { 
            flex-direction: column;
            align-items: center;
            .filters-btn {
                width: 150px;
                height: 40px;
                font-size: 14px;
            }    
        }
    }
    
`
