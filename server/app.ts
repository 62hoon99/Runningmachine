import express, { Request, Response } from "express";
import compression from "compression";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";

const app = express();

import reviewRouter from "./src/routes/review";

app.use(express.json());
app.use(morgan("tiny"));
app.use(compression());
app.use(helmet());
app.use(cors());

app.use("/review", reviewRouter);

app.use("/", (req: Request, res: Response) => {
    res.status(404).send("Anavailable route");
});

app.use((err: Error, req: Request, res: Response) => {
    console.error(err);
    res.sendStatus(500);
});

app.listen(8080, () => {
    console.log("Active!");
});