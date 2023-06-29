import { IDto } from '../../base/IDto.ts';
export default class WorkStationDto  { //implements IDto
  // private Id: number;
  private name: string;
  private location: string;
  
  constructor(name: string, location: string) {
    this.name = name;
    this.location = location;
  }
}

enum JobCardState {
  Pending = 'Pending',
  InProgress = 'InProgress',
  Paused = 'Paused',
  Complete = 'Complete',
}

// A way to list, create, update and delete workstations, each with a name and location field.