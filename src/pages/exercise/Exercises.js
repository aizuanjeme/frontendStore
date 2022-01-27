import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import agent from '../../agent';
// import { get } from '../../agent';
import { agent } from '../../agent';

export default function Exercises() {

    const [exercis, setExercis] = useState([]);

    useEffect(() => {
        agent.get(`/exercises`, setExercis)
        console.log({ exercis })
    }, []);

    return <>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">S/N</th>
                    <th scope="col">Username</th>
                    <th scope="col">Description</th>
                    <th scope="col">Duration</th>
                </tr>
            </thead>
            <tbody>
                {exercis &&
                    exercis.length > 0 && exercis.map((exe, index) => <tr key={index} >
                        <th scope="row">{index + 1}</th>
                        <td><Link to={"/exercise/view/" + exe._id} >{exe.username}</Link></td>
                        <td>{exe.description}</td>
                        <td>{exe.duration}</td>
                    </tr>)}
            </tbody>
        </table>
    </>;
}
