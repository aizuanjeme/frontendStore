import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { agent } from '../../agent';

export default function ViewExercise(props) {

    const [exercise, setExercise] = useState({});

    const exerciseId = props.match.params.id;
    // const { id } = useParams();


    useEffect(() => {
        agent.get(`/exercises/${exerciseId}}`, setExercise)
        // console.log({ exercis })
    }, []);

    return <>
        <div class="staff-main view-staff col-lg-9 col-md-8 col-12">

            <Link to={`/exercises`} className="pl-3">
                <button className='btn btn-primary'>Back</button>
            </Link>

            <div class="card mt-1">
                <h4 class="mt-3 ml-3">Basic Information</h4>
                <div class="row">
                    <div class="col-md-6">
                        <ul style={{ listStyleType: 'none', lineHeight: '3em' }}>
                            <li><b>Username:</b> {exercise.username}</li>
                            <li><b>Description:</b> {exercise.description}</li>
                        </ul>
                    </div>
                    <div class="col-md-6">
                        <ul style={{ listStyleType: 'none', lineHeight: '3em' }}>
                            <li><b>Duration:</b> {exercise.duration}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </>;
}
