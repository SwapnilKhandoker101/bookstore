import config from "./app/config";
import mongoose from "mongoose";
import app from "./app";

// async function main() {
//   mongoose
//   .connect(config.database_url as string)
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch((err) => {
//     console.error("Database connection error:", err);
//   });
// }

mongoose
  .connect(config.database_url as string)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });


export default app;
// main();
