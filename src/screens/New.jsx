import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

function New() {

    const navigate = useNavigate();

    const onFormSubmit = async (e) => {
        e.preventDefault();

        const gym = {
            title: e.target[0].value,
            location: e.target[1].value,
            image: e.target[2].value,
            price: e.target[3].value,
            description: e.target[4].value
        }

        let res = await axios.post("/gyms", gym);
        let gymid = res.data;
        navigate(`/gyms/${gymid}`);
    }

    return (
        <div>
            <div className="row">
                <h1 className="text-center">Add Gym</h1>
                <div className="col-6 offset-3">
                    <form onSubmit={onFormSubmit}>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="title">Title:</label>
                            <input className="form-control" type="text" name="title" id="title" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="location">Location:</label>
                            <input className="form-control" type="text" name="location" id="location" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="image">Image:</label>
                            <input className="form-control" type="text" name="image" id="image" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="price">Price:</label>
                            <div className="input-group">
                                <span className="input-group-text" id="price-addon">$</span>
                                <input className="form-control" type="text" name="price" id="price" />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="description">Description:</label>
                            <textarea className="form-control" type="text" name="description" id="description"></textarea>
                        </div>
                        <div className="mb-3">
                            <button className='btn btn-success'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default New