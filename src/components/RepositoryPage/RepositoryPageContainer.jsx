import RepositoryPage from "./RepositoryPage";
import * as React from "react";
import {connect} from "react-redux";
import {getContributors, getRep, onPageChange, setCurrentPage} from "../../redux/listPageReducer";
import {withRouter} from "react-router-dom";


class RepositoryPageContainer extends React.Component {

    componentDidMount() {
        let currentRep = this.props.items.filter(rep => rep.id == this.props.match.params.id);
        let login = currentRep.map(rep => rep.owner.login);
        let name = currentRep.map(rep => rep.name);
        debugger
       this.props.getContributors(...login, ...name);
    }

    render() {
        return (
            <RepositoryPage
                items={this.props.items}
                params={this.props.match.params}
                contributors={this.props.contributors}/>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        items: state.listPage.items,
        currentPage: state.listPage.currentPage,
        contributors: state.listPage.contributors
    }
}
const RepositoryPageContainerWithRouter = withRouter(RepositoryPageContainer);

export default connect(mapStateToProps, {getRep,getContributors})(RepositoryPageContainerWithRouter)