import RepositoryPage from "./RepositoryPage";
import * as React from "react";
import {connect} from "react-redux";
import {getRep, onPageChange, setCurrentPage} from "../../redux/listPageReducer";
import {withRouter} from "react-router-dom";


class RepositoryPageContainer extends React.Component {
    componentDidMount() {

       // this.props.getRep(this.props.currentPage);
    }

    render() {
        debugger
        return (
            <RepositoryPage items={this.props.items}
            params={this.props.match.params}/>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        items: state.listPage.items
    }
}
const RepositoryPageContainerWithRouter = withRouter(RepositoryPageContainer);

export default connect(mapStateToProps, {})(RepositoryPageContainerWithRouter)