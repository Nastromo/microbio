import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactTable from "react-table";
import '../table.css';





export class TestsList extends Component {
    

    initColumns = () => {
        return [
            {
                Header: 'Test',
                accessor: 'test',
            },
            {
                Header: 'Description',
                accessor: 'desc',
            },
            {
                Header: 'Count',
                accessor: 'count',
            }
        ];
    }

    handleRowClick = (state, rowInfo, column, instance) => {
        if (rowInfo) {
            return {
                onClick: (e, handleOriginal) => this.props.setPhy(Number(rowInfo.index)),
                style: {
                    fontWeight: rowInfo.index === this.props.selected ? '700' : '600',
                    color: rowInfo.index === this.props.selected ? '#1ab394' : '#4e4e4e',
                    background: rowInfo.index === this.props.selected ? '#e2fff9' : '',
                }
            }
        } else {
            return {}
        }
    }

    handleCreate = () => {
        this.props.setCreateMode(true);
    }

    renderList = (list, text) => {
        return (
            <div className="bas30 marg15">
                <ReactTable
                    data={list}
                    getTdProps={this.handleRowClick}
                    columns={this.initColumns()}
                    resizable={false}
                    filterable={true}
                    defaultPageSize={15}
                    noDataText={text}
                />
            </div>
        )
    }

    render() {
        if (this.props.isLoading) return this.renderList([], `Loading list...`);
        if (this.props.isErrored) return this.renderList([], `Error occurred...`);
        return this.renderList(this.props.list, `No any tests...`);
    }
}

const mapStateToProps = (state) => ({
    list: state.phys,
    selected: state.activePhyRaw,
})

const mapDispatchToProps = dispatch => ({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(TestsList)
