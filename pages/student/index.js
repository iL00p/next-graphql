import React from 'react';
import { Query, graphql, compose } from 'react-apollo';

import StudentPage from './student';
import Styles from './styles';
import Apollo from '../../config';
import {
    getStudentQuery,
    toggleActiveMutation,
    allCoursesQuery,
} from '../../constants/queries';

const MutationWrapper = compose(
    graphql(toggleActiveMutation, { name: 'toggleActive' }),
    graphql(allCoursesQuery, { name : 'allCourses' })
)(StudentPage);

const Student = (props) => (
    <Apollo>
        <Query 
            query={getStudentQuery}
            variables={props.url.query}
        >
            {
                data => <MutationWrapper {...props} studentDetails={data}/>
            }
        </Query>
        <Styles/>
    </Apollo>
);

export default Student;