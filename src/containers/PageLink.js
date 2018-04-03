import { connect } from 'react-redux';
import { nextPage, previousPage } from '../state/actions/index.js';
import Navigation from '../components/Navigation';

// connect state to component props
const mapStateToProps = (state) => ({
    pages: state.pages
});

// dispatch actions to update store
const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: (active_page) => {
        if(active_page === 'GO_BACK') {
            dispatch(previousPage());
        } else dispatch(nextPage(active_page));
    }
});

// connect functions above to Navigation component
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navigation);
