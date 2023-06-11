import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Gyms() {

    const [gyms, setGyms] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await axios.get("/gyms");
            setGyms(res.data.gyms);
        })();
    }, []);

    return (
        <div>
            <h1>All Gyms</h1>
            {gyms?.length ? (
                gyms.map((gym, idx) => <div key={idx}>
                    <div className="card mb-3">
                        <div className="row">
                            <div className="col-md-4">
                                <img src={gym.image} className="img-fluid" alt="" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{gym.title}</h5>
                                    <p className="card-text">{gym.description}</p>
                                    <p className="card-text">
                                        <small className="text-muted">{gym.location}</small>
                                    </p>
                                    <Link className="btn btn-primary" to={`/gyms/${gym._id}`}>VIEW</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)
            ) : <h2>No data</h2>}
        </div>
    )
}

export default Gyms;