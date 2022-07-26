const AUTO_TRACKED_GOAL_TYPE = "Auto-tracked goal";
const MANUALLY_TRACKED_GOAL_TYPE = "Manually tracked goal";

const MANUAL_GOAL_CHOICE_NAME_SETTING = "Manually tracked goal choice name";
const AUTO_GOAL_CHOICE_NAME_SETTING = "Automatically tracked goal choice name";

module.exports = {
    entry: async({ quickAddApi }, settings) => {
        const goalTypes = [AUTO_TRACKED_GOAL_TYPE, MANUALLY_TRACKED_GOAL_TYPE];
        const goalType = await quickAddApi.suggester(goalTypes, goalTypes);

        if (goalType === AUTO_TRACKED_GOAL_TYPE) {
            return await quickAddApi.executeChoice(
                settings[AUTO_GOAL_CHOICE_NAME_SETTING]
            )
        } else {
            return await quickAddApi.executeChoice(
                settings[MANUAL_GOAL_CHOICE_NAME_SETTING]
            )
        }
    },
    settings: {
        name: "Choose Goal - Settings",
        options: {
            [MANUAL_GOAL_CHOICE_NAME_SETTING]: {
                type: "input",
                defaultValue: "🎯 Add Goal",
                placeholder: MANUALLY_TRACKED_GOAL_TYPE
            },
            [AUTO_GOAL_CHOICE_NAME_SETTING]: {
                type: "input",
                defaultValue: "🎯 Add Auto Tracking Goal",
                placeholder: AUTO_TRACKED_GOAL_TYPE
            }
        }
    }
}