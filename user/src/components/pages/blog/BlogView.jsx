import React, { useEffect, useState } from 'react';
import BlogStore from './BlogStore';
import axios from 'axios';
import Pagination from 'react-paginate';

const BlogView = () => {
  const [view, setView] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2; // Adjust as needed

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("/api/blog");
        setView(res.data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const handlePageChange = (data) => {
    setCurrentPage(data.selected + 1); // Page numbers start from 0
  };

  const pageCount = Math.ceil(view.length / itemsPerPage);

  const slicedView = view.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      {/* ##### Blog Area Start ##### */}
      <section className="alazea-blog-area mb-100">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12">
              {loading ? (
                <div className="container">
                  <img src="../assets/images/loading.gif" alt="loading" />
                </div>
              ) : (
                <>
                  <div className="row">
                    {slicedView.map((element, index) => (
                      <BlogStore
                        key={element._id}
                        blogname={element.blogname}
                        description={element.description}
                        image={element.image}
                      />
                    ))}
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <nav aria-label="Page navigation">
                      <Pagination
                      pageCount={pageCount}
                      marginPagesDisplayed={2}
                      pageRangeDisplayed={5}
                      onPageChange={handlePageChange}
                      initialPage={0}
                      containerClassName="pagination justify-content-center"
                      pageClassName="page-item"
                      pageLinkClassName="page-link"
                      previousClassName="page-item"
                      previousLinkClassName="page-link"
                      nextClassName="page-item"
                      nextLinkClassName="page-link"
                      breakClassName="page-item"
                      breakLinkClassName="page-link"
                      activeClassName="active"
                    />
                    
                      </nav>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* ##### Blog Area End ##### */}
    </>
  );
};

export default BlogView