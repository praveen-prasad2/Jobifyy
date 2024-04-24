const express = require("express");
const router = express.Router();
const {
  getJob,
  createJob,
  getSingleJob,
  updateJob,
  deleteJob,
} = require("../Controllers/jobController");

// Get All Jobs

router.route("/").get(getJob);

// Create New Job

router.route("/").post(createJob);
// Get Single Job

router.route("/:id").get(getSingleJob);

// Edit A Job

router.route("/:id").put(updateJob);

// Delete a Job
router.route("/:id").delete(deleteJob);

module.exports = router;
