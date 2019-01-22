import React, { Component } from 'react';

export default class Home extends Component {
    componentDidMount() {
        console.log('PROPS!!', this.props);
    }

    onAddStudent = () => {
        const { addStudent } = this.props;
        const variables = {
            id : parseInt(Math.random() * 100, 10),
            firstName : 'Arjun',
            lastName: 'Sreedhar',
            active: 'true'
        }

        addStudent({ variables });
    }

    render() {
        const { studentsData } = this.props;

        if (studentsData.loading) return 'Loading!';
        if (studentsData.error) return 'Error!';

        return (
            <div>
                <h1>Students</h1>
                <pre>{JSON.stringify(studentsData.allStudents, null, 2)}</pre>
                <button onClick={this.onAddStudent}>
                    Add Student
                </button>
            </div>
        )
    }
}