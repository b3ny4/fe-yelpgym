import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

function Edit() {

    const [gym, setGym] = useState(undefined);

    const { gymid } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            let res = await axios.get(`http://localhost:3001/gyms/${gymid}`);
            setGym(res.data);
        })()
    }, []);

    const onFormSubmit = async (e) => {
        e.preventDefault();

        const gym = {
            title: e.target[0].value,
            location: e.target[1].value
        }

        let res = await axios.put(`/gyms/${gymid}`, gym);
        navigate(`/gyms/${res.data}`);
    }

    return (
        <>
            <h1>Edit Gym</h1>
            <form onSubmit={onFormSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input type="text" name="title" id="title" defaultValue={gym?.title || ""} />
                </div>
                <div>
                    <label htmlFor="location">Location:</label>
                    <input type="text" name="location" id="location" defaultValue={gym?.location || ""} />
                </div>
                <button>Submit</button>
            </form>
            <Link to="/gyms">All Gyms</Link>
        </>
    )
}

export default Edit