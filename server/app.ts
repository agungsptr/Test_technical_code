import express, {Request, Response} from "express";
import cors from "cors";
import router from "../handler/router";

const app = express();

/** App level middleware */
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello");
})
app.use("/api/v1", router);

app.listen(3000, () => {
  console.log(`Server running on port: 3000`);
})