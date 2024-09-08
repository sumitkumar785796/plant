import React from 'react';
import { Link } from 'react-router-dom';

const NoPage = () => {
    return (
        <>
            <div className="d-flex align-items-center justify-content-center vh-100 bg-dark text-white">
                <div className="text-center">
                    <h1 className="display-1">404</h1>
                    <p className="lead">Oops! The page you are looking for cannot be found.</p>
                    <Link to="/" className="btn btn-primary">Go to Homepage</Link>
                </div>
            </div>
        </>
    )
}

export default NoPage;