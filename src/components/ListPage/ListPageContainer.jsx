import ListPage from "./ListPage";
import * as React from "react";
import {connect} from "react-redux";
import {getRep, getTopTen, onPageChange, toggleListPage} from "../../redux/listPageReducer";


class ListPageContainer extends React.Component {
    componentDidMount() {
        if (this.props.searchValue !== '') {
            this.props.getRep(this.props.currentPage, this.props.searchValue);
        } else if (this.props.list.length === 0) {
            this.props.getTopTen();
        }
    }

    onPageChange = (page) => {
        this.props.onPageChange(page);
    }

    render() {
        if (this.props.isListPageActive) {return (
            <ListPage list={this.props.list}
                      totalCount={this.props.totalCount}
                      currentPage={this.props.currentPage}
                      onPageChange={this.props.onPageChange}
                      toggleListPage={this.props.toggleListPage}/>
        )}

    }
}

const mapStateToProps = (state) => {
    return {
        list: state.listPage.items,
        totalCount: state.listPage.total_count,
        currentPage: state.listPage.currentPage,
        isListPageActive: state.listPage.isListPageActive,
        searchValue: state.listPage.searchValue
    }
}


export default connect(mapStateToProps, {getRep, onPageChange, toggleListPage,getTopTen})(ListPageContainer)