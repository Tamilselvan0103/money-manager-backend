import express from "express";
import {
  addexpense,
  deleteExpenseData,
  editExpenseDetails,
  getexpensereport,
} from "../controller/controller.js";

const router = express.Router();

//adding expense data in cloud data

router.post("/get/expensedata", async (req, res) => {
  try {
    const newData = req.body;
    if (!newData) {
      res.status(400).json({ data: "No content Provided" });
      return;
    }
    const result = addexpense(newData);
    res.status(201).json({ data: "Data Added successfully" });
  } catch (error) {
    console.log("error : ", error);
    res.status(500).send(error);
  }
});

//get report for expense

router.get("/get/expensedata", async (req, res) => {
  try {
    const expensedata = await getexpensereport(req);
    if (expensedata.lenght <= 0) {
      res.status(404).json({ data: "No Content available" });
      return;
    }
    res.status(200).send(expensedata);
  } catch (error) {
    res.status(500).json({ data: "Internal server error" });
  }
});

//editing function for expense

router.put("/edit/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const UpdatedData = await req.body;
    const result = await editExpenseDetails(id, UpdatedData);
    res.status(200).json({ data: "Edited expense data Successfully" });
  } catch (error) {
    console.log("error : ", error);
    res.status(500).json({ data: "Internal server error" });
  }
});

//delete function

router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await deleteExpenseData(id);
    res.status(201).json({ data: "Deleted Successfully" });
  } catch (error) {
    console.log("error : ", error);
    res.status(500).json({ data: "Internal server error" });
  }
});

export const Expense = router;
