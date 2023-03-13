import { Activity } from "../model/activity";

export interface IActivityService {
  // Changes the description of an activity
  changeDescription(name: string, description: string, destination: string): Promise<boolean>;

  // Returns the description of an activity
  getDescription(name: string, destination: string): Promise<string>;

  //Returns specific activity in cestination based on activity name
  findActivity(activityName: string, inDestination: string) : Activity;

  // Returns all activities in durrent destination matching search string
  getAllActivities(dest: string, searchText: string): Activity[];
}
