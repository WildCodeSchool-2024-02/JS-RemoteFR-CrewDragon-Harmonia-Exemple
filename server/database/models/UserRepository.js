const AbstractRepository = require("./AbstractRepository");

class UserRepository extends AbstractRepository {
  constructor() {
    super({ table: "user" });
  }

  async getAll() {
    const result = await this.database.query(`select * from ${this.table}`);

    console.info(result);

    return result;
  }

  async getOne(id) {
    const result = await this.database.query(
      `select * from ${this.table} WHERE id = ? LIMIT 1`,
      [id]
    );

    console.info(result);

    return result;
  }
}

module.exports = UserRepository;
