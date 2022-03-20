const { users } = require("..//users//create.usersController");
//const { body } = require("express-validator");
const moment = require("moment");

const service = async (req, res) => {
  try {
    const payload = req.body;
    const requestDB = await users.create(payload);
    return res.json({
      msg: "users created successfully",
      data: requestDB,
    });
  } catch (error) {
    return res.status(500).json({
      msg: error.toString(),
    });
  }
};

// const validation = [
//   body("name")
//     .notEmpty()
//     .withMessage("Name is required")
//     .custom(async (value) => {
//       const requestDB = await users.findOne({ where: { name: value } });
//       if (requestDB) {
//         throw new Error("already exists");
//       }
//     }),
//   body("description").notEmpty().withMessage("Description is required"),
//   body("dateFrom")
//     .notEmpty()
//     .withMessage("Date from is required")
//     .custom((value) => {
//       value = moment(value);
//       if (value.isAfter(moment())) {
//         return true;
//       } else {
//         throw new Error("Date from must be future date");
//       }
//     }),
//   body("dateTo").notEmpty().withMessage("Date to is required"),
// ];

module.exports = { service };
