import React from 'react'
import GallaryHead from './GallaryHead'
import GalleryStore from './GalleryStore'

const Gallary = () => {
    return (
        <>
            <GallaryHead />
            <div className="container">
                <div className="row">
                    <GalleryStore />
                </div>
            </div>
            <br />
        </>
    )
}

export default Gallary