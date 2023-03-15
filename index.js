import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { IncomeData } from "./router/incomeRouter.js";
import { Expense } from "./router/ExpenseRouter.js";

//defining Port
const Port = process.env.PORT;

const app = express();
//declaring express function
app.use(cors());
app.use(express.json());
//env configuration
dotenv.config();

app.use("/", IncomeData);
app.use("/", Expense);

app.listen(Port, () => console.log(`i am working${Port}`));
