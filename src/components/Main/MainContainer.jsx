import * as React from "react";
import {connect} from "react-redux";
import Main from "./Main";

class MainContainer extends React.Component {
    componentDidMount() {
        // if (this.props.searchValue !== '') {
            this.props.getTopTen();
        }
    // }

    render() {
       return <Main/>
    }
}

const mapStateToProps = (state) => {
    return {

    }
}


export default connect(mapStateToProps, {})(MainContainer)