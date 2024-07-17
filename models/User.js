

class User {
  constructor(db) {
    this.db = db;
  }

  async createUser(firstName, lastName, email, password) {
    const sql = "INSERT INTO users (`first name`, `last name`, `email`, `password`, `registered at`) VALUES (?, ?, ?, ?, NOW())";
    const values = [firstName, lastName, email, password];
    try {
      const result = await this.db.execute(sql, values)
      return result[0].insertId;
      // return JSON.stringify(result);
    } catch (error) {
      throw error;
    }
    

  }

}

module.exports = User