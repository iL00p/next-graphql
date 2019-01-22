import React from 'react';
import { Query, graphql } from 'react-apollo';

import StudentPage from './student';
import Apollo from '../../config';
import {
    getStudentQuery,
    toggleActiveMutation,
} from '../../constants/queries';

const MutationWrapper = graphql(toggleActiveMutation, {name : 'toggleActive'})(StudentPage);

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
    </Apollo>
);

export default Student;