const Emp =  require("../models/employee");


exports.createEmp = (req, res, next) => {
  const url = req.protocol + '://' + req.get('host');
  const emp = new Emp({
    emp_no: req.body.emp_no,
    emp_name: req.body.emp_name,
    emp_designation: req.body.emp_designation
  });
  
  emp.save().then(createdEmp => {
    res.status(201).json({
      message: "Employee added successfully",
      emp: {
        ...createdEmp,
        id: createdEmp._id
      }
    });
  }).catch(error => {
    res.status(500).json({
      message: 'Creating a employee failed!'
    })
  });
};

exports.updateEmp = (req, res, next) => {
  const emp = new Emp({
    _id: req.body._id,
    emp_no: req.body.emp_no,
    emp_name: req.body.emp_name,
    emp_designation: req.body.emp_designation
  });

  Emp.updateOne({_id: req.params.id}, emp).then(result => {
    if (result.n > 0) {
      res.status(200).json({ message: "Update successful!" });
    }else {
      res.status(401).json({ message: "Some issues!" });
    }
  }).catch(error => {
      res.status(500).json({
        message: "Couldn't update Employee!"
      });
  });
};

exports.getEmp = (req, res, next) => {
  Emp.findById(req.params.id).then(emp => {
    if(emp){
     res.status(200).json(emp);
    } else {
      res.status(404).json({
        message: "employee not found!"
      })
    }
  }).catch(error => {
    res.status(500).json({
      message: "Fetching employee failed!"
    });
  });
};

exports.getEmps = (req, res, next) => {
  Emp.find().then(emps => {
    if(emps){
     res.status(200).json(emps);
    } else {
      res.status(404).json({
        message: "employees not found!"
      })
    }
  }).catch(error => {
    res.status(500).json({
      message: "Fetching employees failed!"
    });
  });
};

exports.deleteEmp = (req, res, next) => {
  Emp.deleteOne({_id: req.params.id }).then(result => {
    if (result.n > 0) {
      res.status(200).json({ message: "Deletion Successful!"});
    } else {
      res.status(401).json({ message: "Some Issues!" })
    }
  }).catch(error => {
    res.status(500).json({
      message: "Fetching employee failed!"
    });
  });
};
