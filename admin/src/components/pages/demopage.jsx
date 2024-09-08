import React from 'react'

const demopage = () => {
    return (
        <>

            <div className="pb-3 options text-nowrap">
                <div className="nav-small-cap">
                    <i className="ti ti-dots nav-small-cap-icon fs-5" />
                    <span className="hide-menu">More options</span>
                </div>
                <ul className="sidebar-list">
                    <li className="sidebar-list-item">
                        <i className="ti ti-circle text-primary fs-4" />
                        <span className="hide-menu ms-2">Applications</span>
                    </li>
                    <li className="sidebar-list-item">
                        <i className="ti ti-circle text-danger fs-4" />
                        <span className="hide-menu ms-2">Form Options</span>
                    </li>
                    <li className="sidebar-list-item">
                        <i className="ti ti-circle text-warning fs-4" />
                        <span className="hide-menu ms-2">Table Variations</span>
                    </li>
                    <li className="sidebar-list-item">
                        <i className="ti ti-circle text-success fs-4" />
                        <span className="hide-menu ms-2">Charts Selection</span>
                    </li>
                    <li className="sidebar-list-item">
                        <i className="ti ti-circle text-indigo fs-4" />
                        <span className="hide-menu ms-2">Widgets</span>
                    </li>
                </ul>
            </div>
            <div className="mt-5 blocks-card sidebar-ad">
                <div className="card bg-light-primary">
                    <div className="card-body">
                        <div className="text-center">
                            <img src="../assets/images/backgrounds/education-blocks.png" width={136} height={136} className="mt-n9" alt="" />
                            <h5>Are you<br /> satisfied ?</h5>
                            <div className="mt-4">
                                <a href target="_blank" className="btn btn-primary buynow-link w-100 px-2">
                                    Buy Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default demopage