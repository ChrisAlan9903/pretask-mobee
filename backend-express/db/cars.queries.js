const getAllCars = `SELECT * FROM cars`;

const getOneCar = `SELECT * FROM cars WHERE id = $1`;

const createOneCar = `INSERT INTO cars(brand, model, variant, manufacture_year, transmission) 
    VALUES($1, $2, $3, $4, $5)`;

const updateOneCar = `UPDATE cars 
    SET 
    brand = $1,
    model = $2,
    variant = $3,
    manufacture_year = $4,
    transmission = $5
    WHERE id = $6`;

const deleteOneCar = "DELETE FROM cars WHERE id = $1";

module.exports = {
  getAllCars,
  getOneCar,
  createOneCar,
  updateOneCar,
  deleteOneCar,
};
