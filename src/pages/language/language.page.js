import React from 'react';
import axios from 'axios';

import { LanguagePageWrapper } from './style';
import FiltersComponent from '../../components/filters/filters.component';
import ChartComponent from '../../components/chart/chart.component';
import Button from '@material-ui/core/Button';
import { dummyChartsData } from '../../config/config';
import { withAlert } from "react-alert";
import CircularProgress from '@material-ui/core/CircularProgress';

class LanguagePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            filtersPanelHide: true,
            chartData: [],
            filtersData: {
                pageSize: 30,
                order: { name: 'Descending', value: 'desc' },
                selectedFromDate: new Date('2000-01-01'),
                selectedToDate: new Date()
            }
        }
    }
    componentDidMount() {
        this.getLanguagesList();
    }

    getLanguagesList = () => {
        const alert = this.props.alert;
        let pageSize = this.state.filtersData.pageSize;
        let order = this.state.filtersData.order ? this.state.filtersData.order.value : '';
        let fromdate = Math.floor(this.state.filtersData.selectedFromDate.getTime() / 1000);
        let todate = Math.floor(this.state.filtersData.selectedToDate.getTime() / 1000);
        let apiUrl = 'https://api.stackexchange.com/2.2/tags?pagesize=' + pageSize + '&fromdate=' + fromdate + '&todate=' + todate + '&order=' + order +
            '&sort=popular&site=stackoverflow'
        axios.get(apiUrl)
            .then((response) => {
                console.log("response", response.data.items);
                let chartData = response.data.items.map((item) => {
                    return { "count": item.count, "language": this.capitalize(item.name) }
                });
                this.setState({ isLoading: false, chartData: chartData });
            })
            .catch((error) => alert.error(`Network Error due to ${error.response.data.error_message + ' ' + error.response.data.error_name}`))

        //getting data from local json
        // let chartData = dummyChartsData.items.map((item) => {
        //     return { "count": item.count, "language": this.capitalize(item.name) }
        // });
        // this.setState({ isLoading: false, chartData: chartData });
    }

    capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

    render() {
        const filterClass = this.state.filtersPanelHide ? 'filter-panel-hide' : '';
        return (
            <LanguagePageWrapper>
                <div className="filters-wrapper">
                    <Button variant="contained" color="primary" onClick={this.handleFilterClick} className="filters-btn">
                        <div>Filters</div>
                        <img src="https://zolve.com/static/images/ic-redirect-white.svg" />
                    </Button>
                    <div className={filterClass}>
                        <FiltersComponent
                            filterValues={this.state.filtersData || ''}
                            filterApplyClick={this.filterApplyClick}
                            changeFilter={this.changeFilter}
                        />
                    </div>
                </div>
                {this.state.isLoading ?
                    <div className="loading-progress">
                        <CircularProgress />
                    </div> :
                    this.state.chartData.length > 0 ?
                        <ChartComponent data={this.state.chartData} /> :
                        <div className="error-msg">Not enough data to display!</div>
                }
            </LanguagePageWrapper>
        );
    }

    handleFilterClick = () => {
        this.setState({ filtersPanelHide: !this.state.filtersPanelHide })
    }

    changeFilter = (key, newValue, ) => {
        //console.log("key", key);
        //console.log("value", newValue);
        let filterObj = { ...this.state.filtersData };
        switch (key) {
            case 'pageSize':
                filterObj[key] = (newValue === '') ? '' : Number(newValue);
                break;
            case 'order':
                filterObj[key] = newValue;
                break;
            case 'selectedFromDate':
                filterObj[key] = new Date(newValue);
                break;
            case 'selectedToDate':
                filterObj[key] = new Date(newValue);
                break;
        }

        this.setState({
            filtersData: filterObj
        });
    }
    filterApplyClick = () => {
        //console.log("Apply button clicked");
        this.getLanguagesList();
    }
}

export default withAlert()(LanguagePage);