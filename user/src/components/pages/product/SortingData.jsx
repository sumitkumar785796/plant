import React from 'react'

const SortingData = () => {
    return (
        <>
            {/* Shop Sorting Data */}
            <div className="col-12">
                <div className="shop-sorting-data d-flex flex-wrap align-items-center justify-content-between">
                    {/* Shop Page Count */}
                    <div className="shop-page-count">
                        <p>Showing 1–9 of 72 results</p>
                    </div>
                    {/* Search by Terms */}
                    <div className="search_by_terms">
                        <form action="#" method="post" className="form-inline">
                            <select className="custom-select widget-title">
                                <option selected>Short by Popularity</option>
                                <option value={1}>Short by Newest</option>
                                <option value={2}>Short by Sales</option>
                                <option value={3}>Short by Ratings</option>
                            </select>
                            <select className="custom-select widget-title">
                                <option selected>Show: 9</option>
                                <option value={1}>12</option>
                                <option value={2}>18</option>
                                <option value={3}>24</option>
                            </select>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SortingData