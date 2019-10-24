import React, { Component } from 'react';
import { connect } from 'react-redux';
import { activate } from '../store/actions/ScrPend';
import SearchInput from './SearchInput';
import PendTestsList from './PendTestsList';



export class ScreenPendingList extends Component {

    render() {
        return (
            <div className="bas30">
                <h3>Screen Pending List</h3>
                <div className="flex">
                    <p onClick={this.props.activate} id="scrn" className={this.props.isScreen ? "scr-list acty" : "scr-list"}>Screening List</p>
                    <p onClick={this.props.activate} id="batch" className={this.props.isScreen ? "scr-list" : "scr-list acty"}>Batch Results</p>
                </div>
                <SearchInput
                    id="tests"
                    type="text"
                    view="search-input"
                    url="tests"
                    onItemClick={this.props.getTests}
                    isLoading={this.props.isLoadTests}
                    searchQuery={this.props.searchTests}
                    searchResults={this.props.tests} />

                <PendTestsList />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isScreen: state.isScreen,
    isLoadTests: state.searchLoading.tests,
    searchTests: state.searchQuery.tests,
    tests: state.searchResults.tests,
})

const mapDispatchToProps = dispatch => ({
    activate: (e) => dispatch(activate(e)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ScreenPendingList)
