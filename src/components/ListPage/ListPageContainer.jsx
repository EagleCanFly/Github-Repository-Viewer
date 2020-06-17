import ListPage from "./ListPage";
import * as React from "react";
import {connect} from "react-redux";
import {
    getRep,
    getTopTen,
    onPageChange,
    refresh, setCurrentPage,
    setCurrentPortion,
    toggleIsLoading,
    toggleListPage
} from "../../redux/listPageReducer";


class ListPageContainer extends React.Component {
    componentDidMount() {
        if (this.props.searchValue !== '') {
            this.props.getRep(this.props.currentPage, this.props.searchValue);
        } else if (this.props.list.length === 0) {
            this.props.getTopTen();
        }
    }

    onPageChange = (page, lastSearchValue) => {
        this.props.onPageChange(page, lastSearchValue);
    }

    render() {
        if (this.props.isListPageActive) {
            return (
                <ListPage list={this.props.list}
                          totalCount={this.props.totalCount}
                          currentPage={this.props.currentPage}
                          onPageChange={this.props.onPageChange}
                          toggleListPage={this.props.toggleListPage}
                          searchValue={this.props.searchValue}
                          lastSearchValue={this.props.lastSearchValue}
                          currentPortion={this.props.currentPortion}
                          setCurrentPortion={this.props.setCurrentPortion}
                          setCurrentPage={this.props.setCurrentPage}
                          refresh={this.props.refresh}
                          isLoading={this.props.isLoading}
                          toggleIsLoading={this.props.toggleIsLoading}
                />
            )
        }

    }
}

const mapStateToProps = (state) => {
    return {
        list: state.listPage.items,
        totalCount: state.listPage.total_count,
        currentPage: state.listPage.currentPage,
        isListPageActive: state.listPage.isListPageActive,
        searchValue: state.listPage.searchValue,
        lastSearchValue: state.listPage.lastSearchValue,
        currentPortion: state.listPage.currentPortion,
        isLoading: state.listPage.isLoading
    }
}


export default connect(mapStateToProps, {
    getRep,
    onPageChange,
    toggleListPage,
    getTopTen,
    setCurrentPortion,
    setCurrentPage,
    refresh,
    toggleIsLoading})(ListPageContainer)