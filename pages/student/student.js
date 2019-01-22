import React, { Component } from 'react';
import CourseItem from '../../components/courseItem';

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
        const { studentDetails, url, allCourses: { allCourses, loading : loadingCourses } } = this.props;
        const { loading, error } = studentDetails;
        const studentData = Object.assign({}, studentDetails.data.Student);
        const studentCourseIds = (studentData.Courses || []).map(i => i.id);
        if (loading || loadingCourses) return 'Loading...';
        if (error) return 'Has error...';
        
        const filteredCourses = allCourses.filter(course => !studentCourseIds.includes(course.id));
 
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
                <div className='container'>
                    <div className='box'>
                        <h2>Courses</h2>
                        <hr/>
                        {
                            (studentData.Courses || []).map((i, index) => (
                                <CourseItem 
                                    key={i.id} 
                                    index={index}
                                    data={{...i, index}}
                                />
                            ))
                        }
                    </div>
                    <div className='box'>
                        <h2>All Courses</h2>
                        <hr/>
                        {
                            (filteredCourses || []).map((i, index) => (
                                <CourseItem
                                    key={i.id}
                                    index={index}
                                    data={{ ...i, index }}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
};