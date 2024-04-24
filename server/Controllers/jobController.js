//@desc Get all Jobs
//@route Get api/jobs
//@access public

const getJob = (req, res) => {
  res.status(200).json({ message: "Get All Jobs" });
};
//@desc Create New Job
//@route post api/jobs
//@access public

const createJob = (req, res) => {
  res.status(201).json({ message: "Create New Job" });
};
//@desc Get single Job
//@route GEt api/jobs/:id
//@access public

const getSingleJob = (req, res) => {
  res.status(200).json({ message: `Get the Job ${req.params.id}` });
};
//@desc Update a Job
//@route put api/jobs/:id
//@access public

const updateJob = (req, res) => {
  res.status(200).json({ message: `Update the Job ${req.params.id}` });
};
//@desc Delete a Job
//@route delete api/jobs/:id
//@access public

const deleteJob = (req, res) => {
  res.status(200).json({ message: `Delete the Job ${req.params.id}` });
};

module.exports = { getJob, createJob, getSingleJob, updateJob, deleteJob };
