import { Module } from '@nestjs/common';
import { PlanetService } from './planet.service';
import { PlanetController } from './planet.controller';
import { OracleDBModule } from 'src/oracle/oracle-db.module';

@Module({
  imports: [OracleDBModule],
  controllers: [PlanetController],
  providers: [PlanetService],
})
export class PlanetModule {}
