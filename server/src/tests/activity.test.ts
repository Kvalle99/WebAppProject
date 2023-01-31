import { ActivityService } from "../service/activity.service";

test("Change the description of an activity", async () => {
    const service = new ActivityService();
    service.changeDescription("Inte så himla mysigt ändå");
    const changedDescription = await service.getDescription();
    expect(changedDescription === "Inte så himla mysigt ändå").toBeTruthy();
})

test("Adding consecutive ratings makes the rating proportional to the length of the rating-list", async () => {
    const service = new ActivityService();
    service.addNewRating(BigInt(5));
    let assumedRating = 5;
    let newRating = await service.getRating();
    expect(newRating === assumedRating).toBeTruthy();
    service.addNewRating(BigInt(5));
    newRating = await service.getRating();
    expect(newRating === assumedRating).toBeTruthy();
})

test("Adding rating values that should equal a specific float average, resulting in the typecasting from bigint to be tested", async () => {
    const service = new ActivityService();
    service.addNewRating(BigInt(5));
    service.addNewRating(BigInt(4));
    let assumedRating = (4+5)/2;
    let actualRating = await service.getRating();
    console.log("Actual rating: ", actualRating, ", assumed rating: ", assumedRating)
    expect (actualRating === assumedRating).toBeTruthy();
})