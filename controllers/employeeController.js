const Employee = require("../models/Employee");

/* =============================
   GET ALL EMPLOYEES
============================= */
exports.getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();

    const formatted = employees.map(emp => ({
      id: emp._id,
      photo: emp.photo,
      name: emp.name,
      age: emp.age,
      contact: emp.contact,
      address: emp.address,
      skill: emp.skill,
      specialization: emp.specialization,
      status: emp.status,
      type: emp.type,
      salary: emp.salary,
      hours: emp.hours,
      pendingSalary: emp.pendingSalary,
      liability: emp.liability,
      remaining:
        emp.salary - emp.pendingSalary - emp.liability
    }));

    res.json(formatted);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch employees" });
  }
};


/* =============================
   CREATE EMPLOYEE
============================= */
exports.createEmployee = async (req, res) => {
  try {
    const employee = await Employee.create(req.body);

    res.status(201).json({
      id: employee._id,
      photo: employee.photo,
      name: employee.name,
      age: employee.age,
      contact: employee.contact,
      address: employee.address,
      skill: employee.skill,
      specialization: employee.specialization, // ✅ ADD THIS
      status: employee.status,
      type: employee.type,
      salary: employee.salary,
      hours: employee.hours,
      pendingSalary: employee.pendingSalary,
      liability: employee.liability,
      remaining:
        employee.salary - employee.pendingSalary - employee.liability
    });

  } catch (err) {
    res.status(500).json({ message: "Create failed" });
  }
};



/* =============================
   DELETE EMPLOYEE
============================= */
exports.deleteEmployee = async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);
    res.json({ message: "Employee deleted" });
  } catch (err) {
    res.status(500).json({ message: "Delete failed" });
  }
};


/* =============================
   UPDATE EMPLOYEE
============================= */
exports.updateEmployee = async (req, res) => {
  try {
    const updated = await Employee.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.json({
      id: updated._id,
      photo: updated.photo,
      name: updated.name,
      age: updated.age,
      contact: updated.contact,
      address: updated.address,
      skill: updated.skill,
      status: updated.status,
      type: updated.type,
      salary: updated.salary,
      hours: updated.hours,
      pendingSalary: updated.pendingSalary,
      liability: updated.liability,
      remaining:
        updated.salary - updated.pendingSalary - updated.liability
    });

  } catch (err) {
    res.status(500).json({ message: "Update failed" });
  }
};
