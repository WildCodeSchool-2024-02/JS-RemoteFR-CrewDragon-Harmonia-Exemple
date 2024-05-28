const AbstractRepository = require("./AbstractRepository");

class RoleRepository extends AbstractRepository {
  constructor() {
    super({ table: "role" });
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

module.exports = RoleRepository;
