import Main from "./Main";
import * as React from "react";
import {connect} from "react-redux";
import {getRep, onPageChange, onSearchKeyUp, search, setCurrentPage} from "../../redux/listPageReducer";


class MainContainer extends React.Component {
    componentDidMount() {

        this.props.getRep(this.props.currentPage);
    }

    onPageChange = (page) => {
        this.props.onPageChange(page);
    }

    render() {
        return (
            <Main list={this.props.list}
                  totalCount={this.props.totalCount}
                  currentPage={this.props.currentPage}
                  onPageChange={this.props.onPageChange}
                  searchValue={this.props.searchValue}
                  onSearchKeyUp={this.props.onSearchKeyUp}
            search={this.props.search}/>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        list: state.listPage.items,
        totalCount: state.listPage.total_count,
        currentPage: state.listPage.currentPage,
        searchValue: state.listPage.searchValue
    }
}


export default connect(mapStateToProps, {getRep, onPageChange, onSearchKeyUp, search})(MainContainer)