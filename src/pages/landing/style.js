import styled from 'styled-components';
import {deviceWidths} from '../../config/config';

export const LandingPageWrapper = styled.div`
   
    .header {
        display: flex;
        box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
        img {
            margin: 20px;
        }
        .MuiPaper-elevation1 {
            margin: 20px;
            box-shadow: none;
        }
        .MuiButtonBase-root{
            font-size: 20px;
        }
        .MuiTabs-centered{
            justify-content: flex-end;
        }
        .MuiTabs-indicator {
            display: none;
        }
        .MuiTab-textColorPrimary.Mui-selected {
            color: #E83C41;
        }

    }
    @media (max-width:${deviceWidths.tabletWidth}) {
        .header {
            img {
                width: 50px;
                margin: 10px 30px;
            }
            .MuiTabs-centered {
                justify-content: flex-start;
            }
            .MuiButtonBase-root{
                font-size: 15px;
            }
        }
    }

`
