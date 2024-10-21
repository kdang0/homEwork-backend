import mongoose from "mongoose";
import Student from "./Student";
import Assignment from "./Assignment";

const assignAccessSchema = new mongoose.Schema({
    studentId : {
        type: mongoose.ObjectId,
        ref: Student,
        required: true
    },
    assignmentId :  {
        type: mongoose.ObjectId,
        ref:Assignment,
        required: true
    }
});

const AssignAccess = new mongoose.model('AssignAccess', assignAccessSchema);
export default AssignAccess;