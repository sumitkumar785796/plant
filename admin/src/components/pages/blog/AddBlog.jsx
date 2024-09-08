import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';

const AddBlog = () => {
    const navigate = useNavigate();
    const { pid } = useParams(); // Get plantId from URL
    const [view, setView] = useState([]);
    const [input, setInput] = useState({
        blogname: '',
        description: '',
        image:null
    });
    const [imagePreview, setImagePreview] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (pid) {
            setIsEditing(true);
            axios.get(`/api/blog/${pid}`)
                .then(response => {
                    const { blogname, image, description } = response.data.data;
                    setInput({
                        blogname,
                        image: null, // Handle image separately
                        description
                    });
                    // Set image preview for existing plants
                    if (image) {
                        setImagePreview(image);
                    }
                })
                .catch(error => {
                    console.error('Error fetching blog data:', error);
                    toast.error('Failed to load blog data.');
                });
        }
    }, [pid]);

    useEffect(() => {
        (async () => {
            try {
                const resp = await axios.get('/api/blog');
                setView(resp.data.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
                toast.error('Failed to load categories.');
            }
        })();
    }, []);

    const ChangeInput = (e) => {
        const { name, value } = e.target;
        setInput((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const changeFile = (e) => {
        const file = e.target.files[0];
        if (file) {
            setInput((prevState) => ({
                ...prevState,
                image: file,
            }));
            // Set image preview
            const previewUrl = URL.createObjectURL(file);
            setImagePreview(previewUrl);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        const formData = new FormData();
        formData.append('blogname', input.blogname);
        formData.append('description', input.description);
        if (input.image) {
            formData.append('image', input.image);
        }

        try {
            let response;
            if (isEditing) {
                // Update request
                response = await axios.put(`/api/blog/${pid}`, formData);
                if (response.status === 200) {
                    setInput({
                        blogname:'',
                        description:''
                    });
                    setImagePreview(null);
                    toast.success(response.data.message);
                    navigate('/dashboard/viewblog');
                }
            } else {
                // Add request
                response = await axios.post('/api/blog', formData);

                if (response.status === 201) {
                    setInput({
                        blogname:'',
                        description:''
                    });
                    setImagePreview(null);
                    toast.success(response.data.message);
                }
            }
        } catch (error) {
            if (error.response && error.response.status === 400) {
                const errorData = error.response.data;
                if (errorData.errors) {
                    errorData.errors.forEach((error) => {
                        toast.error(error.msg);
                    });
                } else {
                    toast.error(errorData.message || 'An error occurred');
                }
            } else {
                console.error('An error occurred:', error);
                toast.error('An error occurred. Please try again later.');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <div className="container-fluid">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title fw-semibold mb-4">
                            {isEditing ? 'Edit Plant' : 'Add Plant'}
                        </h5>
                        <ToastContainer />
                        <div className="card">
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="row">

                                        <div className="col-sm-12">
                                            <label htmlFor="blogname" className="form-label">
                                                Blog Name
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="plantname"
                                                placeholder="Enter Plant Name"
                                                name="blogname"
                                                onChange={ChangeInput}
                                                value={input.blogname}
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-ms-12">
                                            <label htmlFor="description" className="form-label">
                                                Description
                                            </label>
                                            <textarea name="description" id="description" className='form-control'
                                            onChange={ChangeInput}
                                            value={input.description}
                                             />
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="image" className="form-label">
                                            Upload Image</label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            id="image"
                                            onChange={changeFile}
                                            name="image"
                                            accept="image/*"
                                        />
                                        {imagePreview && (
                                            <div className="mt-2">
                                                <img
                                                    src={imagePreview}
                                                    alt="Preview"
                                                    style={{ maxWidth: '100%', maxHeight: '200px' }}
                                                />
                                            </div>
                                        )}
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Saving...' : (isEditing ? 'Update' : 'Save')}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddBlog;
