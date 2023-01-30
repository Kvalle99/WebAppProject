import { ActivityService } from "../service/activity.service";

test("Change the description of an activity", async () => {
    const service = new ActivityService();
    service.changeDescription("Inte så himla mysigt ändå");
    const changedDescription = await service.getDescription();
    expect(changedDescription === "Inte så himla mysigt ändå").toBeTruthy();
})

test("Adding consecutive ratings makes the rating proportional to the length of the rating-list", async () => {
    const service = new ActivityService();
    service.addNewRating(5);
    let assumedRating = 5;
    let newRating = await service.getRating();
    expect(newRating === assumedRating).toBeTruthy();
    service.addNewRating(5);
    newRating = await service.getRating();
    expect(newRating === assumedRating).toBeTruthy();
})