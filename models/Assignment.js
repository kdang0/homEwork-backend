import mongoose from "mongoose";
import Tutor from "./Tutor.js";
import Class from './Class.js';
import {submissionSchema} from "./Submission.js";
const assignmentSchema = new mongoose.Schema({
  tutorId: {
    type: mongoose.ObjectId,
    ref: Tutor,
    required: true
  },
  question: {
    type: [
      {
        id:{
            type: mongoose.ObjectId,
            default: new mongoose.Types.ObjectId()
        },
        problem: {
          type: String,
          required: true,
        },
        answer: {
          type: String,
          required: true,
        },
        choices: {
          type: [String],
          required: true,
        },
      },
    ],
  },
  dueDate: {
    type: Date,
    default: new Date(Date.now() + 7*24*60*60*1000)
  },
  submissions: {
    type: [submissionSchema],
  },
  classId: {
    type: mongoose.ObjectId,
    ref: Class,
    required:true
  },
  name: {
    type:String,
    required: true
  },
  description: {
    type: String
  },
  totalPoints: {
    type: Number,
    required: true
  }
});

const Assignment = new mongoose.model('Assignment', assignmentSchema);
export default Assignment;
