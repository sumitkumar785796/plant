import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StorePlant from "./StorePlant";

const SingleCategorie = () => {
  const { id } = useParams("");
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState({});
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`/api/viewsinglecategorie/${id}`);
        const userData = res.data.data; 

        const plantRes = await axios.get('/api/viewplantstockstatus');
        const allPlants = plantRes.data.data;

        setView(userData);
        setPlants(allPlants.filter((plant) => plant.category._id === userData._id));
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      getData();
    }
  }, [id]);

  return (
    <>
      <div className="container-fluid">
        <div className="container-fluid">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title fw-semibold mb-4">
                View Plant({view.categoryname})
              </h5>
              {loading ? (
                <div className="container">
                  <img src="../assets/images/loading.gif" alt="loading" />
                </div>
              ) : (
                <div className="row">
                  {
                    plants.length > 0 ? (
                    plants.map((plant, index) => (
                      <StorePlant
                      key={plant._id}
                        plantname={plant.plantname}
                        image={plant.image}
                        price={plant.price}
                        categories={plant.category.categoryname}
                        id={plant._id}
                        qty={plant.qty}
                        stockStatus={plant.stockStatus}
                      />
                    ))
                  ) : (
                    <div className="col-12">
                      <p>No plants found in this category.</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCategorie;