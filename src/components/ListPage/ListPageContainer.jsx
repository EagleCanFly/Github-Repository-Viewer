import ListPage from "./ListPage";
import * as React from "react";
import {connect} from "react-redux";
import {getRep, onPageChange, setCurrentPage} from "../../redux/listPageReducer";


class ListPageContainer extends React.Component {
    componentDidMount() {

        this.props.getRep(this.props.currentPage);
    }

    onPageChange = (page) => {
        this.props.onPageChange(page);
    }

    render() {
        return (
            <ListPage list={this.props.list}
                      totalCount={this.props.totalCount}
                      currentPage={this.props.currentPage}
                      onPageChange={this.props.onPageChange}/>
        )

    }
}

const mapStateToProps = (state) => {
    debugger
    return {
        list: state.listPage.items,
        totalCount: state.listPage.total_count,
        currentPage: state.listPage.currentPage
    }
}


export default connect(mapStateToProps, {getRep, onPageChange})(ListPageContainer)