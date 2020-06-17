import ListPage from "./ListPage";
import * as React from "react";
import {connect} from "react-redux";
import {
    getRep,
    getTopSorted,
    onPageChange,
    setCurrentPage,
    toggleIsLoading
} from "../../redux/listPageReducer";


class ListPageContainer extends React.Component {
    componentDidMount() {
        if (this.props.searchValue !== '') {
            this.props.getRep(this.props.currentPage, this.props.searchValue);
        } else if (this.props.items.length === 0) {
            this.props.getTopSorted(10);
        }
    }

    onPageChange = (page) => {
        let lastSearchValue = this.props.lastSearchValue
        if ( lastSearchValue === '') {  lastSearchValue = 'stars:>=10000'}
        this.props.onPageChange(page, lastSearchValue);
    }

    render() {
            return (
                <ListPage items={this.props.items}
                          totalCount={this.props.totalCount}
                          currentPage={this.props.currentPage}
                          onPageChange={this.onPageChange}
                          searchValue={this.props.searchValue}
                          lastSearchValue={this.props.lastSearchValue}
                          setCurrentPage={this.props.setCurrentPage}
                          isLoading={this.props.isLoading}
                          toggleIsLoading={this.props.toggleIsLoading}
                          isResponseEmpty={this.props.isResponseEmpty}
                />
            )
        }
}

const mapStateToProps = (state) => {
    return {
        items: state.listPage.items,
        totalCount: state.listPage.total_count,
        currentPage: state.listPage.currentPage,
        searchValue: state.listPage.searchValue,
        lastSearchValue: state.listPage.lastSearchValue,
        isLoading: state.listPage.isLoading,
        isResponseEmpty: state.listPage.isResponseEmpty
    }
}


export default connect(mapStateToProps, {
    getRep,
    onPageChange,
    getTopSorted,
    setCurrentPage,
    toggleIsLoading})(ListPageContainer)