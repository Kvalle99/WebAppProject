import { Activity } from "../model/activity";

// Service for calls concerning activities
export interface IActivityService {
  // Returns the description of an activity
  getDescription(name: string, destination: string): Promise<string>;

  //Returns specific activity in cestination based on activity name
  findActivity(activityName: string, inDestination: string) : Activity;

  // Returns all activities in durrent destination matching search string
  getAllActivities(dest: string, searchText: string): Activity[];
}
