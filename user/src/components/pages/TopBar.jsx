import React, { useEffect, useState } from 'react';
import './TopBar.css'; // Ensure you import the CSS file
import axios from 'axios';
const TopBar = () => {
  const [view, setView] = useState([]);
  const [loading, setLoading] = useState(true);
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
  return (
    <div className="text-white py-2" style={{ backgroundColor: "#D2EC0E" }}>
      <div className="container-fluid">
        <div className="row align-items-center" style={{ height: "auto" }}>

          {/* Left: Social Links */}
          <div className="col-12 col-md-3 d-flex align-items-center justify-content-center justify-content-md-start mb-2 mb-md-0">
            <a href="https://www.facebook.com/TEIFoundation?mibextid=ZbWKwL" className="social-icon text-white me-3">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="https://x.com/Himansh46056633/status/1728619066410324469" className="social-icon text-white me-3">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/teif_9918?igsh=NjRoM3diNjVmejA3" className="social-icon text-white me-3">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://chat.whatsapp.com/EDMT03GT1BI6JOIgV77bbS" className="social-icon text-white me-3">
              <i className="fa fa-whatsapp"></i>
            </a>
          </div>

          {/* News & Updates Label */}
          <div className="col-12 col-md-2 text-center mb-2 mb-md-0" style={{ backgroundColor: "green", color: "#fff", padding: "10px 0" }}>
            <i className="fa fa-bolt me-2"></i> {/* Icon */}
            <span style={{ fontWeight: "bold", fontSize: "1rem" }}>News & Updates</span>
          </div>

          {/* Center: News/Updates */}
          <div className="col-12 col-md-5 text-center mb-2 mb-md-0">
            <div className="news-updates">
              <marquee direction="left" behavior="scroll" scrollamount="5" loop="infinite" style={{ color: "green" }}>
                {view.map((element,index)=>(
                  <span key={index}>
                    * {element.blogname} 
                  </span>
                ))}
              </marquee>
            </div>
          </div>

          {/* Right: Helpline */}
          <div className="col-12 col-md-2 d-flex align-items-center justify-content-center justify-content-md-end">
            <i className="fa fa-phone me-2" style={{ color: 'green' }}></i>
            <span className="text-white">
              <a href="tel:9918771888" style={{ color: 'green', fontWeight: "700" }}>Helpline: +91-9918771888</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
