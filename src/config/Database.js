import { Sequelize } from "sequelize";

const db = new Sequelize("db_crud", "root", "", {
  host: "localhost",
  dialect: "mysql", // Specify the database dialect you are using (e.g., 'mysql', 'postgres', 'sqlite', etc.)
});

export default db;
