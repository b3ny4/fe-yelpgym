import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

function New() {

    const navigate = useNavigate();

    const onFormSubmit = async (e) => {
        e.preventDefault();

        const gym = {
            title: e.target[0].value,
            location: e.target[1].value
        }

        let res = await axios.post("/gyms", gym);
        let gymid = res.data;
        navigate(`/gyms/${gymid}`);
    }

    return (
        <>
            <h1>Add Gym</h1>
            <form onSubmit={onFormSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input type="text" name="title" id="title" />
                </div>
                <div>
                    <label htmlFor="location">Location:</label>
                    <input type="text" name="location" id="location" />
                </div>
                <button>Submit</button>
            </form>
            <Link to="/gyms">All Gyms</Link>
        </>
    )
}

export default New