import { IDto } from '../../base/IDto.ts';
export default class JobCard  { //implements IDto
  // private Id: number;
  private name: string;
  private description: string;
  private state: JobCardState = JobCardState.Pending;
  private workstationId: number;

  constructor(name: string, description: string,state: JobCardState, workstationId: number) {
    this.name = name;
    this.description = description;
    this.state = state;
    this.workstationId = workstationId;
  }
}

enum JobCardState {
  Pending = 'Pending',
  InProgress = 'InProgress',
  Paused = 'Paused',
  Complete = 'Complete',
}
// - A way to list, create, update and delete *job cards*. Each job card has a name, description and must be associated with a workstation.
// - A way to transition each job card through the following *states*:
//     - Pending
//     - In progress
//     - Paused
//     - Complete
