import React from 'react'
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Show() {

    const [gym, setGym] = useState({});
    const { gymid } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            let res = await axios.get(`/gyms/${gymid}`);
            setGym(res.data);
        })()
    }, []);

    const onDeleteClick = async (e) => {
        e.preventDefault();

        console.log(gymid);

        let res = await axios.delete(`/gyms/${gymid}`);
        navigate('/gyms/');
    }

    return (
        <>
            {
                gym ? (
                    <>
                        <h1>{gym.title}</h1>
                        <h3>{gym.location}</h3>
                        <button onClick={onDeleteClick}>DELETE</button>
                        <Link to={`/gyms/${gymid}/edit`}>Edit</Link> <br />
                        <Link to="/gyms/">All Gyms</Link>
                    </>
                ) : (<>
                    <h2>No Data</h2>
                </>)

            }
        </>

    )
}

export default Show;