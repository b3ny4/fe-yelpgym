import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

function Edit() {

    const [gym, setGym] = useState(undefined);

    const { gymid } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            let res = await axios.get(`http://localhost:3001/gyms/${gymid}`);
            setGym(res.data);
        })()
    }, [gymid]);

    const onFormSubmit = async (e) => {
        e.preventDefault();

        const gym = {
            title: e.target[0].value,
            location: e.target[1].value,
            image: e.target[2].value,
            price: e.target[3].value,
            description: e.target[4].value
        }

        let res = await axios.put(`/gyms/${gymid}`, gym);
        navigate(`/gyms/${res.data}`);
    }

    return (
        <div>
            <div className="row">
                <h1 className="text-center">Edit Gym</h1>
                <div className="col-6 offset-3">
                    <form onSubmit={onFormSubmit}>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="title">Title:</label>
                            <input className="form-control" type="text" name="title" id="title" defaultValue={gym?.title || ""} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="location">Location:</label>
                            <input className="form-control" type="text" name="location" id="location" defaultValue={gym?.location || ""} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="image">Image:</label>
                            <input className="form-control" type="text" name="image" id="image" defaultValue={gym?.image || ""} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="price">Price:</label>
                            <div className="input-group">
                                <span className="input-group-text" id="price-addon">$</span>
                                <input className="form-control" type="text" name="price" id="price" defaultValue={gym?.price || ""} />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="description">Description:</label>
                            <textarea className="form-control" type="text" name="description" id="description" defaultValue={gym?.description || ""}></textarea>
                        </div>
                        <div className="mb-3">
                            <button className='btn btn-success'>Submit</button>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    )
}

export default Edit