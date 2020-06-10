import ListPage from "./ListPage";
import * as React from "react";
import {connect} from "react-redux";
import {getRep} from "../../redux/listPageReducer";


class ListPageContainer extends React.Component {
    componentDidMount() {

        this.props.getRep();
    }

    render() {
        return (
            <ListPage list={this.props.list}/>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        list: state.listPage.items
    }
}


export default connect(mapStateToProps, {getRep})(ListPageContainer)