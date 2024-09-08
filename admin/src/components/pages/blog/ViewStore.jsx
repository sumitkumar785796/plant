import React from 'react';
import { NavLink } from 'react-router-dom';
const ViewStore = ({ id,description, blogname,image }) => {
  return (
    <>
      <div className="col-sm-6 col-xl-6">
        <div className={`card`}>
          <div className="position-relative">
            <img src={`../../upload/${image}`} className="card-img-top rounded-0" alt={blogname} style={{width:"470px",height:"350px"}} />

            <NavLink to={`/admin/addblog/${id}`} className="bg-primary rounded-circle p-2 text-white d-inline-flex position-absolute bottom-0 end-0 mb-n3 me-3" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add To Cart">
              Edit
            </NavLink>
          </div>
          <div className="card-body pt-3 p-4">
            <h6 className="fw-semibold fs-4">{blogname}</h6>
            <p className="text-muted">{description}</p>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewStore;
