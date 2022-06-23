import React from "react";
import { useState } from 'react'
import MyForm from './App'

function StudentTable(props) {
    // const [arr, setArr] = useState(props.data)
    <MyForm />
    const displayData = props.data.map((item) => {
        return (
            <tr>
                <td>{item.id}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.gender}</td>
                <td>{item.mark}</td>

            </tr>
        )
    }
    );
    return (
        <div className="container">
            <table className='table'>
                <thead clas>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Mark</th>
                    </tr>
                </thead>
                <tbody>
                    {displayData}
                </tbody>
            </table>
        </div>


        // <table>
        //     {arr.map((item) => {
        //         return (
        //             <tr>
        //                 <th>avav</th>
        //                 <th>avav</th>
        //                 <th>avav</th>
        //                 <th>avav</th>
        //                 <td>{item.first_name}</td>
        //             </tr>
        //         )

        //     })}
        // </table>

    )
}

export default StudentTable;