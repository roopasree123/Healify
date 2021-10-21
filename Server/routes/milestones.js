const express = require("express");

const {
  createNewMilestone,
  editMilestone,
  getAllMilestones,
  getActiveMilestones,
  getMilestone,
} = require("../controllers/milestones");

const router = express.Router();

router.route("/").get(getActiveMilestones);

router.route("/timeline").get(getAllMilestones);

router.route("/create").post(createNewMilestone);

router.route("/edit").patch(editMilestone);

// Probably Not Gonna Use in this Release
router.route("/milestone").get(getMilestone);

module.exports = router;