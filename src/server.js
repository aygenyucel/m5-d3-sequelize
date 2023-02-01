import express from "express";
import cors from "cors";
import listEndpoints from "express-list-endpoints";
import { pgConnect, syncModels } from "./db.js";
import productRouter from "./api/product/index.js";

const server = express();
const port = process.env.PORT || 3001;

//************MIDDLEWARES **************/
server.use(cors());
server.use(express.json());

//**********ENDPOINTS ************** */

server.use("/product", productRouter);

//*********ERROR HANDLERS **************** */

await pgConnect();
await syncModels();

server.listen(port, () => {
  console.table(listEndpoints(server));
  console.log(`Server is running on port ${port}`);
});
