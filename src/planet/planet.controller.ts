import { Controller, Get, Param } from '@nestjs/common';
import { PlanetService } from './planet.service';

@Controller('planets')
export class PlanetController {
  constructor(private readonly planetService: PlanetService) {}

  @Get(':name')
  async getPlanetByName(@Param('name') name: string) {
    return this.planetService.searchPlanets(name);
  }

  @Get('name')
  async getSatteliteByName(@Param('name') planetId: number) {
    return this.planetService.getPlanetSatellites(planetId);
  }
}
