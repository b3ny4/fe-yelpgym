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
    }, [gymid]);

    const onDeleteClick = async (e) => {
        e.preventDefault();

        console.log(gymid);

        await axios.delete(`/gyms/${gymid}`);
        navigate('/gyms/');
    }

    return (
        <>
            {
                gym ? (
                    <div className="row">
                        <div className="col-6 offset-3">
                            <div className="card mb-3">
                                <img src={gym.image} className="card-img-top" alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">{gym.title}</h5>
                                    <p className="card-text">{gym.description}</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item text-muted">{gym.location}</li>
                                    <li className="list-group-item">${gym.price}/month</li>
                                </ul>
                                <div className="card-body">
                                    <Link className="card-link btn btn-info" to={`/gyms/${gymid}/edit`}>Edit</Link>
                                    <button className="btn btn-danger" onClick={onDeleteClick}>DELETE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (<>
                    <h2>No Data</h2>
                </>)

            }
        </>

    )
}

export default Show;