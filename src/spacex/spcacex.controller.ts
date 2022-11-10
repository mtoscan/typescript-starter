import { Controller, Get } from '@nestjs/common';
import { UserLaunch } from './interface/user_launch.interface';
import { SpaceXService } from './spacex.service';

@Controller('spacex')
export class SpaceXController {
  constructor(private spacexService: SpaceXService) {}

  @Get('user-launches') getUserLaunches(): Promise<UserLaunch[]> {
    // return this.spacexService.getLaunches();
    return this.spacexService.getUserLaunches();
  }
}
