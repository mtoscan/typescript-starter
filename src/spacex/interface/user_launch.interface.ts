export interface UserLaunch {
  flight_number: number;
  mission_name: string;
  mission_patch: string;
  details: string;
  rocket: Rocket;
}
export interface Rocket {
  rocket_id: string;
  rocket_name: string;
  active: boolean;
  cost_per_launch: number;
  company: string;
}
