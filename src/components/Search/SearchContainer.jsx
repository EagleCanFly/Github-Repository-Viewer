import * as React from "react";
import {connect} from "react-redux";
import Search from "./Search";
import {getTopSorted, onSearchKeyUp, search, setCurrentPage, setReps} from "../../redux/listPageReducer";


class SearchContainerContainer extends React.Component {

    render() {
        return (
           <Search  onSearchKeyUp={this.props.onSearchKeyUp}
                    search={this.props.search}
                    currentPage={this.props.currentPage}
                    searchValue={this.props.searchValue}
                    lastSearchValue={this.props.lastSearchValue}
                    setReps={this.props.setReps}
                    getTopSorted={this.props.getTopSorted}
                    setCurrentPage={this.props.setCurrentPage}
                    convertDate={this.props.convertDate}
           />
        )

    }
}

const mapStateToProps = (state) => {
    return {
        currentPage: state.listPage.currentPage,
        searchValue: state.listPage.searchValue,
        lastSearchValue: state.listPage.lastSearchValue,
    }
}


export default connect(mapStateToProps, {onSearchKeyUp, search, setReps,getTopSorted,setCurrentPage})(SearchContainerContainer)