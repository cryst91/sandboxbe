const {
    users,
    Sequelize: { Op },
  } = require("../../models");
  const service = async (req, res) => {
    try {
      let where = {};

      const page = Number(req.query.page) || 1;
      const limit = Number(req.query.limit) || 3;
  
      const requestDB = await users.findAll({
        where: where,
        limit,
        offset: (page - 1) * limit,
        order: [["createdAt", "ASC"]],
      });
      return res.json({
        msg: "Classes retrieved successfully",
        data: requestDB,
      });
    } catch (error) {
      return res.status(500).json({
        msg: error.toString(),
      });
    }
  };
  
  module.exports = { service };
  