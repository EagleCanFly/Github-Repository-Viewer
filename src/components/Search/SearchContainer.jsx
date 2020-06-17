import * as React from "react";
import {connect} from "react-redux";
import Search from "./Search";
import {getTopTen, onSearchKeyUp, search, setCurrentPage, setReps} from "../../redux/listPageReducer";


class SearchContainerContainer extends React.Component {

    render() {
        return (
           <Search  onSearchKeyUp={this.props.onSearchKeyUp}
                    search={this.props.search}
                    currentPage={this.props.currentPage}
                    searchValue={this.props.searchValue}
                    lastSearchValue={this.props.lastSearchValue}
                    setReps={this.props.setReps}
                    getTopTen={this.props.getTopTen}
                    setCurrentPage={this.props.setCurrentPage}
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


export default connect(mapStateToProps, {onSearchKeyUp, search, setReps,getTopTen,setCurrentPage})(SearchContainerContainer)