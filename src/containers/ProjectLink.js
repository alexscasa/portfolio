import { connect } from 'react-redux';
import { nextProject, previousProject } from '../state/actions/index.js';
import Projects from '../components/Projects/Projects';

// connect state to component props
const mapStateToProps = (state) => ({
    projects: state.projects
});

// dispatch actions to update store
const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: (active_project) => {
        if(active_project === 'GO_BACK') {
            dispatch(previousProject());
        } else dispatch(nextProject(active_project));
    }
});

// connect functions above to Projects component
const PageLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Projects);
export default PageLink;
