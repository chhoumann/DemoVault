// Find all linked projects
const goalPage = dv.page(input.file);
const projects = goalPage.file.inlinks.where((p) => {
    const mp = dv.page(p.path);
    return mp.tags?.includes("project");
});

const totalGoalTasksCompleted = goalPage.file.tasks.where(
    (t) => t.fullyCompleted === true
).length;
let totalProjectTasksCompleted = 0;
projects.values.reduce((acc, p) => {
    const mp = dv.page(p.path);
    totalProjectTasksCompleted += mp.file.tasks.where(
        (t) => t.fullyCompleted === true
    ).length;

    return mp.file.tasks.length;
}, 0);

dv.span(totalGoalTasksCompleted + totalProjectTasksCompleted);
