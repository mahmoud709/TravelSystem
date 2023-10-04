import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Joi from 'joi';

export default function AddTourForm() {
    const notify = () => toast.success('Tour added Successfully!', {
        position: "top-left",
    });
    const [tourData, settourData] = useState({
        title:'',
        city:'',
        address:'',
        desc:'',
        price:0,
        featured:false,
    })
    function takeData(e){
        const inputData={...tourData};
        inputData[e.target.name]=e.target.value;
        settourData(inputData);
    }
    function handleFileChange(e) {
        const file = e.target.files[0];
        console.log(file)
        const maxSize = 10 * 1024 * 1024; // 10MB (adjust as needed)
        if (file && file.size > maxSize) {
            // Handle the case where the file is too large
            alert('File is too large. Please select a smaller file.');
            return;
        }
        const reader = new FileReader();
        reader.onload = () => {
            settourData({ ...tourData, photo: reader.result });
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    }

    function validateForm() {
        const schema = Joi.object({
            title: Joi.string().min(3).required(),
            city: Joi.string().required(),
            address: Joi.string(),
            desc: Joi.string().required(),
            price: Joi.number().required(), // Corrected the schema
        })
        return schema.validate(tourData, { abortEarly: true })
    }

    async function sendData() {
        const { data } = await axios.post('http://localhost:5000/dashboard/create', tourData);
        if (data.success === true) {
            notify();
        }
    }
    function handleSubmit(e){
        e.preventDefault()
        sendData();
        let validate=validateForm();
        console.log(validate.error)
    }
    return (
        <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="mb-3">
                <label className="form-label">tour title</label>
                <input type="text" name='title' className="form-control" onChange={takeData}  />
            </div>
            <div className="mb-3">
                <label className="form-label">city</label>
                <input type="text" name='city' className="form-control" onChange={takeData}  />
            </div>
            <div className="mb-3">
                <label className="form-label">address</label>
                <input type="text" name='address' className="form-control" onChange={takeData}  />
            </div>
            <div className="mb-3">
                <label className="form-label">photo</label>
                <input type="file" name="photo" className="form-control" onChange={handleFileChange} />
            </div>
            <div className="mb-3">
                <label className="form-label">description</label>
                <textarea type="text" name='desc' className="form-control" onChange={takeData} >
                </textarea>
            </div>
            <div className="mb-3">
                <label className="form-label">tour price</label>
                <input type="number" name='price' className="form-control" onChange={takeData} />
            </div>
            <div className="col-md-12 mb-3">
                <label htmlFor="inputState" className="form-label">featured</label>
                <select id="inputState" className="form-select" onChange={takeData} name='featured'>
                    <option>Choose...</option>
                    <option defaultValue='true'>yes</option>
                    <option defaultValue='false'>no</option>
                </select>
            </div>
            <ToastContainer/>
            <button type="submit" className="btn btn-primary fw-bold">Create tour</button>
        </form>
    )
}
