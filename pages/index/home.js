import React, { Component } from 'react';
import Link from 'next/link';

export default class Home extends Component {
    state = { selectedId : '' };

    onAddStudent = async () => {
        const { addStudent, studentsData : { refetch } } = this.props;
        const variables = {
            id : parseInt(Math.random() * 100, 10),
            firstName : 'Arjun',
            lastName: 'Sreedhar',
            active: 'true'
        }

       await addStudent({ variables });
       await refetch();
    }

    alertError = () => {
        alert('Invalid ID');
    }

    onRemove = async () => {
        const { removeStudent, studentsData: { refetch, allStudents } } = this.props;
        const { selectedId : id } = this.state;

        if (!id && isNaN(parseInt(id))) {
            this.alertError();
            return
        };
        if(!(allStudents.find(i => i.id === id))) {
            this.alertError();
            return
        };

        await removeStudent({ variables : { id } });
        this.setState({ selectedId : '' }, refetch);
    }

    onToggle = async () => {
        const { toggleActive, studentsData: { refetch, allStudents } } = this.props;
        const { selectedId: id } = this.state;

        if (!id && isNaN(parseInt(id))) {
            this.alertError();
            return
        };
        const selectedStudent = allStudents.find(i => i.id === id);
        if (!selectedStudent) {
            this.alertError();
            return
        };

        const variables = {
            id : selectedStudent.id,
            active : JSON.stringify(!JSON.parse(selectedStudent.active))
        }

        await toggleActive({ variables });
        this.setState({ selectedId : '' }, refetch);
    }

    render() {
        const { studentsData } = this.props;
        const { selectedId } = this.state;

        if (studentsData.loading) return 'Loading!';
        if (studentsData.error) return 'Error!';

        return (
            <div>
                <h1>Students</h1>
                <ul>
                    {
                        studentsData.allStudents.map(i => (
                            <Link href={`/student?id=${i.id}`} key={i.id}>
                                <li>
                                    #{i.id} -- {i.firstName+' '+i.lastName} - {i.active}
                                </li>
                            </Link>
                        ))
                    }
                </ul>
                <button onClick={this.onAddStudent}>
                    Add Student
                </button>
                <input 
                    value={selectedId} 
                    placeholder="Enter ID" 
                    onChange={e => this.setState({ selectedId : e.target.value })}
                />
                <button onClick={this.onRemove}>
                    Remove Student
                </button>
                <button onClick={this.onToggle}>
                    Toggle Active
                </button>
            </div>
        )
    }
}