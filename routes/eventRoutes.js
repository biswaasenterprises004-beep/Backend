const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");
const {
  getEvents,
  createEvent,
  deleteEvent,
  updateEvent
} = require("../controllers/eventController");

router.get("/", auth, role(["event_manager", "super_admin"]), getEvents);
router.post("/", auth, role(["event_manager", "super_admin"]), createEvent);
router.delete("/:id", auth, role(["event_manager", "super_admin"]), deleteEvent);
router.put("/:id", auth, role(["event_manager", "super_admin"]), updateEvent)

module.exports = router;