import mongoose from "mongoose";

const connectMongo = async () => {
  const MONGO_DB_URL = process.env.MONGO_URL;
  //console.log("MONGO_DB_URL :: ", MONGO_DB_URL);
  try {
    const { connection } = await mongoose.connect(MONGO_DB_URL);
    if (connection.readyState == 1) {
      console.log("database connected");
    } else {
      console.log("database not connected");
    }
  } catch (errors) {
    return Promise.reject(errors);
  }
};

export default connectMongo;
