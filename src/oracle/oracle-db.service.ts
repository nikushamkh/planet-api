// oracle-db.service.ts
import * as oracledb from 'oracledb';

export class OracleDBService {
  private connection: oracledb.Connection;

  async connect() {
    this.connection = await oracledb.getConnection({
      user: 'your_username',
      password: 'your_password',
      connectString: 'your_connection_string',
    });
  }

  async disconnect() {
    if (this.connection) {
      await this.connection.close();
    }
  }

  async execute<T>(
    sql: string,
    bindParams?: any[] | { [key: string]: any },
    options?: oracledb.ExecuteOptions,
  ): Promise<oracledb.Result<T>> {
    if (!this.connection) {
      await this.connect();
    }

    const result = await this.connection.execute<T>(sql, bindParams, options);

    return result;
  }
}
