const pool = require("../config/db.config");
const queries = require("../db/cars.queries");

function getAllCars(req, res) {
  pool.query(queries.getAllCars, (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
}

function getOneCar(req, res) {
  const carId = parseInt(req.params.carId);
  pool.query(queries.getOneCar, [carId], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
}

function createOneCar(req, res) {
  const { brand, model, variant, manufacture_year, transmission } = req.body;

  pool.query(
    queries.createOneCar,
    [brand, model, variant, manufacture_year, transmission],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(201).json({ status: "success" });
    }
  );
}

function updateOneCar(req, res) {
  const carId = parseInt(req.params.carId);
  const { brand, model, variant, manufacture_year, transmission } = req.body;

  const existing = pool.query(queries.getOneCar, [carId], (error, results) => {
    if (!results.rows.length) {
      return res.status(404).json({
        message: `Car with id ${carId} does not exists`,
      });
    }
    pool.query(
      queries.updateOneCar,
      [brand, model, variant, manufacture_year, transmission, carId],
      (error, results) => {
        if (error) {
          throw error;
        }
        return res.status(200).json({ status: "success" });
      }
    );
  });
}
function deleteOneCar(req, res) {
  const carId = parseInt(req.params.carId);
  const existing = pool.query(queries.getOneCar, [carId], (error, results) => {
    if (!results.rows.length) {
      return res.status(404).json({
        message: `Car with id ${carId} does not exists`,
      });
    }
    pool.query(queries.deleteOneCar, [carId], (error, results) => {
      if (error) {
        throw error;
      }
      return res.status(200).json({ status: "success" });
    });
  });
}
module.exports = {
  getAllCars,
  getOneCar,
  createOneCar,
  updateOneCar,
  deleteOneCar,
};
