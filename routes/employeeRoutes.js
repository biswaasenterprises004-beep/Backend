const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");
const {
  getEmployees,
  createEmployee,
  deleteEmployee,
  updateEmployee
} = require("../controllers/employeeController");

router.get("/", auth, role(["employee_manager", "super_admin"]), getEmployees);
router.post("/", auth, role(["employee_manager", "super_admin"]), createEmployee);
router.delete("/:id", auth, role(["employee_manager", "super_admin"]), deleteEmployee);
router.put("/:id", auth, role(["employee_manager", "super_admin"]), updateEmployee);
router.post("/import",auth, role(["employee_manager", "super_admin"]), importEmployees)

module.exports = router;
