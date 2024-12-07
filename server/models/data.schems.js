import mongoose, { Schema } from "mongoose";

const DataSchema = new Schema({
    name: String,
    value: Number,
    date: Date,
  });
  
  const DataModel = mongoose.model('Data', DataSchema);
 export default DataModel;
  