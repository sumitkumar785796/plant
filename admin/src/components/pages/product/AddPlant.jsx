import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';

const AddPlant = () => {
  const navigate = useNavigate();
  const { pid } = useParams(); // Get plantId from URL
  const [view, setView] = useState([]);
  const [input, setInput] = useState({
    plantname: '',
    desc: '',
    image: null,
    price: '',
    category: '',
    qty: '',
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (pid) {
      setIsEditing(true);
      axios.get(`/api/viewplant/${pid}`)
        .then(response => {
          const { plantname, desc,image, price, category, qty } = response.data.data;
          setInput({
            plantname,
            desc,
            image: null, // Handle image separately
            price,
            category,
            qty,
          });
          // Set image preview for existing plants
          if (image) {
            setImagePreview(image);
          }
        })
        .catch(error => {
          console.error('Error fetching plant data:', error);
          toast.error('Failed to load plant data.');
        });
    }
  }, [pid]);

  useEffect(() => {
    (async () => {
      try {
        const resp = await axios.get('/api/viewcategorie');
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
    formData.append('plantname', input.plantname);
    formData.append('desc', input.desc);
    formData.append('price', input.price);
    formData.append('category', input.category);
    formData.append('qty', input.qty);
    if (input.image) {
      formData.append('image', input.image);
    }

    try {
      let response;
      if (isEditing) {
        // Update request
        response = await axios.put(`/api/updateplant/${pid}`, formData);
        if (response.status === 200) {
          setInput({
            plantname: "",
            desc: "",
            image: null,
            price: '',
            category: '',
            qty: '',
          });
          setImagePreview(null);
          toast.success(response.data.message);
          navigate('/admin/viewproduct');
        }
      } else {
        // Add request
        response = await axios.post('/api/plant', formData);

        if (response.status === 201) {
          setInput({
            plantname: "",
            desc: "",
            image: null,
            price: '',
            category: '',
            qty: '',
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
                    <div className="col-sm-6">
                      <label htmlFor="category" className="form-label">Categories</label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        id="category"
                        name="category"
                        value={input.category}
                        onChange={ChangeInput}
                      >
                        <option value="">Select Category</option>
                        {view.map((e) => (
                          <option value={e._id} key={e._id}>
                            {e.categoryname}
                          </option>
                        ))}
                      </select>

                    </div>
                    <div className="col-sm-6">
                      <label htmlFor="plantname" className="form-label">Plant Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="plantname"
                        placeholder="Enter Plant Name"
                        name="plantname"
                        onChange={ChangeInput}
                        value={input.plantname}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <label htmlFor="price" className="form-label">Plant Price</label>
                      <input
                        type="number"
                        className="form-control"
                        id="price"
                        placeholder="Enter Plant Price"
                        name="price"
                        onChange={ChangeInput}
                        value={input.price}
                      />
                    </div>
                    <div className="col-sm-6">
                      <label htmlFor="qty" className="form-label">Plant Quantity</label>
                      <input
                        type="number"
                        className="form-control"
                        id="qty"
                        placeholder="Enter Plant Quantity"
                        name="qty"
                        onChange={ChangeInput}
                        value={input.qty}
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="image" className="form-label">Upload Image</label>
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
                  <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <textarea
                      className="form-control"
                      id="desc"
                      placeholder="Enter Plant Description"
                      name="desc"
                      onChange={ChangeInput}
                      value={input.desc}
                    />

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

export default AddPlant;
