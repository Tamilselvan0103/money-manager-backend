import express from "express";
import {
  addIncome,
  deleteIncomeData,
  editIncomeDetails,
  getreport,
} from "../controller/controller.js";

const router = express.Router();

//adding income data in cloud atlas

router.post("/get/IncomeData", async (req, res) => {
  try {
    const newData = req.body;
    if (!newData) {
      res.status(400).json({ data: "No content Provided" });
      return;
    }
    const result = await addIncome(newData);
    res.status(201).json({ data: "Data Added successfully" });
  } catch (error) {
    console.log("error : ", error);
    res.status(500).send(error);
  }
});

//getting data using month wise using query concept

router.get("/get/IncomeData", async (req, res) => {
  try {
    const IncomeData = await getreport(req);
    if (IncomeData.lenght <= 0) {
      res.status(404).json({ data: "No Content available" });
      return;
    }
    res.status(200).send(IncomeData);
  } catch (error) {
    res.status(500).json({ data: "Internal server error" });
  }
});

//editing function for income

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const UpdatedData = await req.body;
    const result = await editIncomeDetails(id, UpdatedData);
    res.status(200).json({ data: "Edited Successfully" });
  } catch (error) {
    console.log("error : ", error);
    res.status(500).json({ data: "Internal server error" });
  }
});

//delete function

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await deleteIncomeData(id);
    res.status(201).json({ data: "Deleted Successfully" });
  } catch (error) {
    console.log("error : ", error);
    res.status(500).json({ data: "Internal server error" });
  }
});

export const IncomeData = router;
