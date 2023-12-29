

// import mongoose from "mongoose";

// const connect = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URL);
//     console.log("Mongoose Connection successfully established");
//   } catch (error) {
//     console.error("Error Connecting to Mongoose:", error);
//     throw new Error("Error Connecting to Mongoose");
//   }
// };

// export default connect;


import mongoose from "mongoose";

const connect = async () => {
  if (mongoose.connections[0].readyState) return;

  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongo Connection successfully established.");
  } catch (error) {
    throw new Error("Error connecting to Mongoose");
  }
};

export default connect;


// import mongoose from "mongoose";

// const connect = async () => {
//   try {
//     if (mongoose.connection.readyState !== 1) {
//       await mongoose.connect(process.env.MONGO_URL, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//       });
//       console.log("Mongoose Connection successfully established");
//     } else {
//       console.log("Already connected to MongoDB");
//     }
//   } catch (error) {
//     console.error("Error Connecting to Mongoose:", error);
//     throw new Error("Error Connecting to Mongoose");
//   }
// };

// export default connect;
