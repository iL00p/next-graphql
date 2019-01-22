import React from 'react';
import { graphql, compose } from 'react-apollo';

import Home from './home';
import Styles from './styles';
import Apollo from '../../config';
import {
    getAllStudentsQuery,
    createStudentMutation,
    removeStudentMutation,
    toggleActiveMutation,
} from '../../constants/queries';

const QueryWrapper = compose(
    graphql(createStudentMutation, { name : 'addStudent' }),
    graphql(removeStudentMutation, { name: 'removeStudent' }),
    graphql(toggleActiveMutation, { name: 'toggleActive' }),
    graphql(getAllStudentsQuery, { name: 'studentsData'})
)(Home);

export default () => (
    <Apollo>
        <QueryWrapper/>
        <Styles />
    </Apollo>
);
