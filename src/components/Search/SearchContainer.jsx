import * as React from "react";
import {connect} from "react-redux";
import Search from "./Search";
import {onSearchKeyUp, search, setReps} from "../../redux/listPageReducer";


class SearchContainerContainer extends React.Component {

    componentDidMount() {

    }

    render() {
        return (
           <Search  onSearchKeyUp={this.props.onSearchKeyUp}
                    search={this.props.search}
                    currentPage={this.props.currentPage}
                    searchValue={this.props.searchValue}
                    lastSearchValue={this.props.lastSearchValue}
                    setReps={this.props.setReps}
                    list={this.props.list}
           />
        )

    }
}

const mapStateToProps = (state) => {
    return {
        currentPage: state.listPage.currentPage,
        searchValue: state.listPage.searchValue,
        lastSearchValue: state.listPage.lastSearchValue,
        list: state.listPage.items
    }
}


export default connect(mapStateToProps, {onSearchKeyUp, search, setReps})(SearchContainerContainer)