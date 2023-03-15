import { client } from "../db.js";
import Obj from "mongodb";

export var ObjectId = Obj.ObjectId;

//adding income details

export function addIncome(data) {
  return client.db("Manager").collection("income").insertOne(data);
}

//adding expense details

export function addexpense(data) {
  return client.db("Manager").collection("expense").insertOne(data);
}

//getting report for income using parameter

export function getreport(req) {
  return client.db("Manager").collection("income").find(req.query).toArray();
}

//getting report for expense using parameter

export function getexpensereport(req) {
  return client.db("Manager").collection("expense").find(req.query).toArray();
}

// edit function for income

export function editIncomeDetails(id, UpdatedData) {
  return client
    .db("Manager")
    .collection("income")
    .findOneAndUpdate({ _id: new ObjectId(id) }, { $set: UpdatedData });
}

// edit function for expense

export function editExpenseDetails(id, UpdatedData) {
  return client
    .db("Manager")
    .collection("expense")
    .findOneAndUpdate({ _id: new ObjectId(id) }, { $set: UpdatedData });
}

//delete function

export function deleteIncomeData(id) {
  return client
    .db("Manager")
    .collection("income")
    .deleteOne({ _id: new ObjectId(id) });
}

export function deleteExpenseData(id) {
  return client
    .db("Manager")
    .collection("expense")
    .deleteOne({ _id: new ObjectId(id) });
}
