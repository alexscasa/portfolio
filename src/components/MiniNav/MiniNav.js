import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { ButtonGroup, Button } from 'react-bootstrap';

import ProjectScreen from '../ProjectScreen/ProjectScreen.js';
import Resume from '../Resume/Resume.js';


/* params: tag: componentName
           pages: list of links and routes to create
           match: url and path data from parent component
*/
class MiniNav extends React.Component {
    components = {
        portfolio: ProjectScreen,
        resumes: Resume
    };
    
    render() {
        const TagName = this.components[this.props.tag];
        
        return(
            <div>
                <ButtonGroup>
                {
                    this.props.pages
                    .map((page, i) => {
                        return(
                            <Button key={i} componentClass='span'>
                                <Link key={i} to={ '/' + this.props.tag + '/' + page.replace(/\//g, '-').replace(/\s/g, '') }>{ page }</Link>
                            </Button>
                        );
                    })
                }
                </ButtonGroup>
                <Switch>
                    <Route exact path={this.props.match.path}
                           render={() => (<div className='content'>
                             { this.props.tag === 'portfolio' ?
                                <div>Please select a project.</div> :
                                <div>Please select a resume.</div> }
                            </div>)} />
                    {
                        this.props.pages
                        .map((project, i) => {
                            return(
                                <Route
                                    key={i}
                                    path={`${this.props.match.path}/:name`}
                                    render={ (props) => <TagName { ...props }/> }
                                />
                            );
                        })
                    }
                </Switch>
            </div>
        )}
} 

export default MiniNav;