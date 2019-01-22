import React, { Component } from 'react';

export default class StudentPage extends Component {
    onToggle = async() => {
        const { active, id } = this.props.studentDetails.data.Student;

        const variables = {
            id,
            active: JSON.stringify(!JSON.parse(active))
        }
        await this.props.toggleActive({ variables });
        this.props.studentDetails.refetch();
    }

    render() {
        const { studentDetails, url } = this.props;
        const { loading, error } = studentDetails;
        const studentData = Object.assign({}, studentDetails.data.Student);
        if (loading) return 'Loading...';
        if (error) return 'Has error...';

        return (
            <div>
                <a onClick={url.back}>
                    Back
            </a>
                <h1>{studentData.firstName + ' ' + studentData.lastName}</h1>
                <p>{studentData.active === 'true' ? 'Active' : 'Inactive'}</p>
                <button onClick={this.onToggle}>
                    Toggle Active
                </button>
                <hr />
                <h2>Courses</h2>
                {
                    (studentData.Courses || []).map((i, index) => (
                        <div key={i.id}>
                            <h3>{index + 1}. {i.name}</h3>
                            <p>{i.description}</p>
                        </div>
                    ))
                }
            </div>
        )
    }
};