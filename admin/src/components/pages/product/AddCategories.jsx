import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';

const AddCategories = () => {
    const navigate = useNavigate();
    const { cid } = useParams(); // Get categoryId from URL
    const [input, setInput] = useState({
        categoryname: "",
        image: null,
    });
    const [imagePreview, setImagePreview] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (cid) {
            setIsEditing(true);
            axios.get(`/api/viewsinglecategorie/${cid}`)
                .then(response => {
                    const { categoryname, imageUrl } = response.data.data; // Adjust according to your API response
                    setInput({
                        categoryname,
                        image: imageUrl ? null : input.image, // handle image preview or URL if needed
                    });
                    // Set image preview for existing categories
                    if (imageUrl) {
                        setImagePreview(imageUrl);
                    }
                })
                .catch(error => {
                    console.error('Error fetching category data:', error);
                    toast.error('Failed to load category data.');
                });
        }
    }, [cid]);

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
        formData.append('categoryname', input.categoryname);
        formData.append('image', input.image);

        try {
            let response;
            if (isEditing) {
                // Update request
                response = await axios.put(`/api/categorie/${cid}`, formData);
                if (response.status === 200) {
                    setInput({ categoryname: "", image: null });
                    setImagePreview(null);
                    toast.success(response.data.message);
                    navigate('/admin/viewproduct')
                }
            } else {
                // Add request
                response = await axios.post('/api/categorie', formData);

                if (response.status === 201) {
                    setInput({ categoryname: "", image: null });
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
                <div className="container-fluid">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title fw-semibold mb-4">
                                {isEditing ? 'Edit Category' : 'Add Category'}
                            </h5>
                            <ToastContainer />
                            <div className="card">
                                <div className="card-body">
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label htmlFor="categories" className="form-label">Category Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="categories"
                                                placeholder="Enter Category Name"
                                                name='categoryname'
                                                onChange={ChangeInput}
                                                value={input.categoryname}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="image" className="form-label">Upload Image</label>
                                            <input
                                                type="file"
                                                className="form-control"
                                                id="image"
                                                onChange={changeFile}
                                                name='image'
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
                                        >
                                            {isSubmitting ? 'Saving...' : (isEditing ? 'Update' : 'Save')}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddCategories;
