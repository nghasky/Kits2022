import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Welcome from './Welcome'
import StudentTable from './StudentTable'

function Sorting(props) {
    const [students, setStudents] = useState(null);
    const [direction, setDirection] = useState(1);

    useEffect(() => {
        console.log("to call useEffect")
        setStudents(props.data);
    }, [props.data]);

    const sortFirstName = () => {
        console.log("call sorting")
        const sortData = [...students]
        sortData.sort((a, b) => direction * a.first_name.localeCompare(b.first_name));
        setDirection(direction * -1);
        setStudents(sortData);

    };

    var student_list = [];
    if (students != null) {
        student_list = students.map((item) => {

        })

    }
}

export default Sorting;