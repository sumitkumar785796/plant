import React from 'react'
import { NavLink } from 'react-router-dom'

const StoreProduct = ({categoryname,image,id}) => {
    return (
        <>
            <div className="col-sm-6 col-xl-3">
                <div className="card overflow-hidden rounded-2">
                    <div className="position-relative">
                        <NavLink to={`/admin/viewproduct/${id}`}>
                            <img src={`../upload/${image}`} className="card-img-top rounded-0" alt="..." style={{width:"100%",height:"25vh"}}/>
                        </NavLink>
                        <NavLink to={`/admin/addcategories/${id}`} className="bg-primary rounded-circle p-2 text-white d-inline-flex position-absolute bottom-0 end-0 mb-n3 me-3" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add To Cart">
                            Edit
                        </NavLink>
                    </div>
                    <div className="card-body pt-3 p-4">
                        <h6 className="fw-semibold fs-4">{categoryname}</h6>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StoreProduct