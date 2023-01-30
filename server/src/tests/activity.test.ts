import { ActivityService } from "../service/activity.service";

test("Change the description of an activity", async () => {
    const service = new ActivityService();
    service.changeDescription("Inte så himla mysigt ändå");
    const changedDescription = await service.getDescription();
    expect(changedDescription === "Inte så himla mysigt ändå").toBeTruthy();
})