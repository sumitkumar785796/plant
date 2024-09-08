import React from 'react'

const BlogStore = ({blogname,description,image}) => {
  return (
    <>
                 {/* Single Blog Post Area */}
                 <div className="col-12 col-lg-6">
                 <div className="single-blog-post mb-50">
                   <div className="post-thumbnail mb-30">
                     <img src={`../upload/${image}`} alt="" style={{ width:"100%", height:"auto" }} />
                   </div>
                   <div className="post-content">
                     <a href="#" className="post-title">
                       <h5>{blogname}</h5>
                     </a>
                     
                     <p className="post-excerpt">{description}</p>
                   </div>
                 </div>
               </div>
    </>
  )
}

export default BlogStore