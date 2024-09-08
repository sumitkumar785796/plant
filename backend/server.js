import app from "./app.js"
import { connDB } from "./config/conn.js";
import { PORT } from "./util/utils.js"
connDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log('MongoDB connection failed:', error);
  });