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
        <>
            <h1>All Gyms</h1>
            <Link to="/gyms/new">Add new gym</Link>
            <ul>
                {gyms?.length ? (
                    gyms.map((gym, idx) => <li key={idx}>
                        <Link to={`/gyms/${gym._id}`}>{gym.title}</Link>
                    </li>)
                ) : <h2>No data</h2>}
            </ul>
        </>
    )
}

export default Gyms;