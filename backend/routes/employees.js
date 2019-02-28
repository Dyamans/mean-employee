const express = require("express");

const EmpController = require("../controller/employees");

const router = express.Router();

router.post("", EmpController.createEmp);
router.put("/:id", EmpController.updateEmp);
router.get("", EmpController.getEmps);
router.get("/:id", EmpController.getEmp);
router.delete("/:id", EmpController.deleteEmp);

module.exports = router;
