// planet.service.ts
import { Injectable } from '@nestjs/common';
import oracledb from 'oracledb';
import { OracleDBService } from 'src/oracle/oracle-db.service';

@Injectable()
export class PlanetService {
  constructor(private readonly oracleDBService: OracleDBService) {}

  async searchPlanets(name: string) {
    const sql = `BEGIN :result := search_planets(:name); END;`;
    const bindParams = {
      result: { type: oracledb.CURSOR, dir: oracledb.BIND_OUT },
      name,
    };
    const options = {
      outFormat: oracledb.OUT_FORMAT_OBJECT,
      // Add any other options you need
    };

    const result = await this.oracleDBService.execute<Record<string, any>>(
      sql,
      bindParams,
      options,
    );

    const resultSet = result.outBinds.result;
    const rows = await resultSet.getRows();

    await resultSet.close();

    return rows;
  }




  
}
