import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

import LanguagePage from '../language/language.page';
import CopyComponent from '../../components/copy/copy.component';
import SelfieComponent from '../../components/selfie/selfie.component';
import { LandingPageWrapper } from './style';

const LandingPage = () => {
    const useStyles = makeStyles({
        root: {
            flexGrow: 1,
        },
    });
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const TabPanel = (props) => {
        const { children, value, index, ...other } = props;
        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`scrollable-auto-tabpanel-${index}`}
                aria-labelledby={`scrollable-auto-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box p={3}>
                        <div>{children}</div>
                    </Box>
                )}
            </div>
        );
    }

    return (
        <LandingPageWrapper>
            <div className="header">
                <img src="https://zolve.com/static/images/zolve_logo.svg" />
                <Paper className={classes.root}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                    >
                        <Tab label="Chart" />
                        <Tab label="Copy" />
                        <Tab label="Selfie" />
                    </Tabs>
                </Paper>
            </div>
            <TabPanel value={value} index={0}>
                <LanguagePage />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <CopyComponent />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <SelfieComponent />
            </TabPanel>
        </LandingPageWrapper>
    )
}

export default LandingPage;
