import React from 'react';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import { orderOptions } from '../../config/config';
import { FiltersComponentWrapper } from './style';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: '8px 20px',
            width: '25ch',
        },
    },
}));

const FiltersComponent = (props) => {
    //console.log("filterProps", props);
    const classes = useStyles();
    return (
        <FiltersComponentWrapper className={classes.root}>
            <TextField
                id="filled-basic"
                label="Page Size"
                type="number"
                InputProps={{ inputProps: { min: 1 } }}
                value={props.filterValues.pageSize}
                onChange={(event) => props.changeFilter('pageSize', event.target.value)}
            />

            <Autocomplete
                id="combo-box-demo"
                options={orderOptions}
                name="order"
                getOptionLabel={(option) => option.name}
                renderInput={(params) => <TextField {...params} label="Order" />}
                value={props.filterValues.order}
                getOptionSelected={(option, value) => option.value === value.value}
                onChange={(event, value) => props.changeFilter('order', value)}
            />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                    margin="normal"
                    label="From date"
                    format="MM/dd/yyyy"
                    maxDate={new Date()}
                    value={props.filterValues.selectedFromDate}
                    onChange={(date) => props.changeFilter('selectedFromDate', date)}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
                <KeyboardDatePicker
                    margin="normal"
                    label="To date"
                    format="MM/dd/yyyy"
                    maxDate={new Date()}
                    value={props.filterValues.selectedToDate}
                    onChange={(date) => props.changeFilter('selectedToDate', date)}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
            </MuiPickersUtilsProvider>

            <Button variant="contained" color="primary" className="apply-button" onClick={props.filterApplyClick}>
                <div>Apply</div>
            </Button>
        </FiltersComponentWrapper>
    )
}

export default FiltersComponent;