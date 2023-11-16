// oracle-db.module.ts
import { Module } from '@nestjs/common';
import { OracleDBService } from './oracle-db.service';

@Module({
  providers: [OracleDBService],
  exports: [OracleDBService],
})
export class OracleDBModule {}
