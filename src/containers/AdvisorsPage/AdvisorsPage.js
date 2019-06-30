import React, {Component, Fragment} from 'react';
import request from 'superagent';
import debounce from 'lodash.debounce';
import AdvisorsList from '../../components/AdvisorsList/AdvisorsList';
import Loader from '../../components/Loader/Loader';
import Sorter from '../../components/Sorter/Sorter';
import FilterStatus from '../../components/Filter/FilterStatus';
import FilterLanguage from '../../components/Filter/FilterLanguage';

class AdvisorsPage extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          error: false,
          isLoading: true,
          advisors: [],
          sortAsc: true,
          statusFilter: -1,
          languagesFilter: ['en','ru','fr','de','es']
        };
    
        window.onscroll = debounce(() => {
          const {
            loadAdvisors,
            state: {
              error,
              isLoading,
            },
          } = this;
    
          if (error || isLoading) return;
    
          if (
            window.innerHeight + document.documentElement.scrollTop
            === document.documentElement.offsetHeight
          ) {
            loadAdvisors();
          }
        }, 100);
    }

    componentDidMount() {
        this.loadAdvisors();
    }

    loadAdvisors = () => {
        this.setState({ isLoading: true }, () => {
            request
            .get('http://localhost:5000/')
            .then((results) => {
                const nextAdvisors = results.body.advisors;

                this.setState({
                    isLoading: false,
                    advisors: [
                        ...this.state.advisors,
                        ...nextAdvisors,
                    ],
                });
            })
            .catch((err) => {
                this.setState({
                    error: err.message,
                    isLoading: false,
                });
            })
        });
    }

    sortHandler = () => {
        const { advisors, sortAsc } = this.state;
        const sortedAdvisors = advisors.sort((first, second) => {
            return sortAsc 
                ? (first.numberOfReviews - second.numberOfReviews)
                : (second.numberOfReviews - first.numberOfReviews);
        });

        this.setState({
            advisors: sortedAdvisors,
            sortAsc: !sortAsc
        });
    }

    filterStatusHandler = (e) => {
        const statusFilter = parseInt(e.target.value, 10);

        this.setState({
            statusFilter
        });
    }

    filterLanguageHandler = (e) => {
        const language = e.target.value;
        let languagesFilter = this.state.languagesFilter;

        if (e.target.checked) {
            languagesFilter.push(language);
        } else {
            languagesFilter = languagesFilter.filter(current => {
                return current !== language;
            });
        }

        this.setState({
            languagesFilter
        });
    }

    render() {
        const {
            error,
            isLoading,
            advisors,
            statusFilter,
            languagesFilter
        } = this.state;

        return (
            <Fragment>
                <Sorter clicked={this.sortHandler} />
                <FilterStatus changed={this.filterStatusHandler} statusFilter={statusFilter} />
                <FilterLanguage changed={this.filterLanguageHandler} languagesFilter={languagesFilter} />
                <AdvisorsList advisors={advisors} statusFilter={statusFilter} languagesFilter={languagesFilter} />
                <hr />
                {error &&
                    <div style={{ color: '#900' }}>
                        {error}
                    </div>
                }
                {isLoading &&
                    <Loader />
                }
            </Fragment>
        );
    }
}

export default AdvisorsPage;
