import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Launch } from './interface/launch.interface';
import { Rocket } from './interface/rocket.interface';
import { UserLaunch } from './interface/user_launch.interface';

@Injectable()
export class SpaceXService {
  constructor(private readonly httpService: HttpService) {}
  private async getLaunches(): Promise<Launch[]> {
    const result = await this.httpService.axiosRef.get(
      'https://api.spacexdata.com/v3/launches',
    );

    return result.data;
  }
  private async getRockets(): Promise<Rocket[]> {
    const result = await this.httpService.axiosRef.get(
      'https://api.spacexdata.com/v3/rockets',
    );

    return result.data;
  }

  async getUserLaunches(): Promise<UserLaunch[]> {
    const launches: Launch[] = await this.getLaunches();
    const rockets: Rocket[] = await this.getRockets();
    const result = launches.map((launch) => {
      const foundRocket = rockets.find(
        (rocket) => rocket.rocket_id === launch.rocket.rocket_id,
      );
      launch.rocket.company = foundRocket.company;
      launch.rocket.cost_per_launch = foundRocket.cost_per_launch;
      launch.rocket.active = foundRocket.active;
      return {
        flight_number: launch.flight_number,
        mission_name: launch.mission_name,
        mission_patch: launch.links.mission_patch,
        details: launch.details,
        rocket: {
          rocket_id: launch.rocket.rocket_id,
          rocket_name: launch.rocket.rocket_name,
          active: launch.rocket.active,
          cost_per_launch: launch.rocket.cost_per_launch,
          company: launch.rocket.company,
        },
      };
    });
    return result;
  }
}
