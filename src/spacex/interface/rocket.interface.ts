export interface Rocket {
  id: number;
  active: boolean;
  stages: number;
  boosters: number;
  cost_per_launch: number;
  success_rate_pct: number;
  first_flight: string;
  country: string;
  company: string;
  height: HeightOrDiameter;
  diameter: HeightOrDiameter;
  mass: Mass;
  payload_weights?: PayloadWeightsEntity[] | null;
  first_stage: FirstStage;
  second_stage: SecondStage;
  engines: Engines;
  landing_legs: LandingLegs;
  flickr_images?: string[] | null;
  wikipedia: string;
  description: string;
  rocket_id: string;
  rocket_name: string;
  rocket_type: string;
}
export interface HeightOrDiameter {
  meters: number;
  feet: number;
}
export interface Mass {
  kg: number;
  lb: number;
}
export interface PayloadWeightsEntity {
  id: string;
  name: string;
  kg: number;
  lb: number;
}
export interface FirstStage {
  reusable: boolean;
  engines: number;
  fuel_amount_tons: number;
  burn_time_sec: number;
  thrust_sea_level: ThrustSeaLevelOrThrustVacuumOrThrust;
  thrust_vacuum: ThrustSeaLevelOrThrustVacuumOrThrust;
}
export interface ThrustSeaLevelOrThrustVacuumOrThrust {
  kN: number;
  lbf: number;
}
export interface SecondStage {
  reusable: boolean;
  engines: number;
  fuel_amount_tons: number;
  burn_time_sec: number;
  thrust: ThrustSeaLevelOrThrustVacuumOrThrust;
  payloads: Payloads;
}
export interface Payloads {
  option_1: string;
  composite_fairing: CompositeFairing;
}
export interface CompositeFairing {
  height: HeightOrDiameter;
  diameter: HeightOrDiameter;
}
export interface Engines {
  number: number;
  type: string;
  version: string;
  layout: string;
  isp: Isp;
  engine_loss_max: number;
  propellant_1: string;
  propellant_2: string;
  thrust_sea_level: ThrustSeaLevelOrThrustVacuumOrThrust;
  thrust_vacuum: ThrustSeaLevelOrThrustVacuumOrThrust;
  thrust_to_weight: number;
}
export interface Isp {
  sea_level: number;
  vacuum: number;
}
export interface LandingLegs {
  number: number;
  material?: null;
}
