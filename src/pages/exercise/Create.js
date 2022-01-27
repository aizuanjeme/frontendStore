import React, { useState } from 'react';
import { agent } from '../../agent';

export default function Create() {

    const [state, setState] = useState({
        username: '',
        description: '',
        duration: 0,
        date: new Date(),
        users: []
    })
    const handleChange = (e) => {
        const { id, value } = e.target
        setState(prevState => ({
            ...prevState,
            [id]: value
        }))
    }




    const onSubmit = (e) => {
        e.preventDefault();

        const exercise = {
            "username": state.username,
            "description": state.description,
            "duration": state.duration,
            "date": state.date
        }

        console.log(exercise);

        agent.post(`/exercises/add`, exercise, setState)

        window.location = '/exercises';
    }


    return <>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Username</label>
                <input type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={state.username}
                    onChange={handleChange}
                />
            </div>
            <div class="form-group">
                <label for="inputAddress">Description</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="she is good"
                    value={state.description}
                    onChange={handleChange} />
            </div>
            <div class="form-group">
                <label for="inputAddress">Duration</label>
                <input type="number" class="form-control" id="inputDuration" placeholder="1234"
                    value={state.duration}
                    onChange={handleChange}
                />
            </div>
            <div class="form-group">
                <label for="inputAddress">Date</label>
                <input type="date" class="form-control" id="inputDate"
                    value={state.date}
                    onChange={handleChange}
                />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>

    </>;
}
