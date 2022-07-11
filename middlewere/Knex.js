import knex from "knex";
export const Knex = (req, res, next) => {
  try {
    const conn = knex({
      client: `${process.env.DB_CLIENT}`,
      connection: {
        host: `${process.env.DB_HOST}`,
        user: `${process.env.DB_USER}`,
        password: `${process.env.DB_PASS}`,
        database: `${process.env.DB_DBNAME}`,
        port: `${process.env.DB_PORT}`,
      },
    });
    req.knex = conn;
    next();
  } catch (error) {
    console.log(error);
    res.json({ status: "nok", message: "Connection error" });
  }
};
