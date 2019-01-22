import React from 'react';
import { graphql, compose } from 'react-apollo';

import Home from './home';
import Apollo from '../../config';
import {
    getAllStudentsQuery,
    createStudentMutation,
} from '../../constants/queries';

const QueryWrapper = compose(
    graphql(createStudentMutation, { name : 'addStudent' }),
    graphql(getAllStudentsQuery, { name: 'studentsData'})
)(Home);

export default () => (
    <Apollo>
        <QueryWrapper/>
    </Apollo>
);
