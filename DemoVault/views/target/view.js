// Find all linked projects
const goalPage = dv.page(input.file);
const projects = goalPage.file.inlinks.where((p) => {
    const mp = dv.page(p.path);
    return mp.tags?.includes("project");
});

const totalGoalTasks = goalPage.file.tasks.length;

let totalProjectTasks = 0;
projects.values.reduce((acc, p) => {
    const mp = dv.page(p.path);
    const tasks = mp.file.tasks;

    totalProjectTasks += tasks.length;
    return mp.file.tasks.length;
}, 0);

dv.span(totalGoalTasks + totalProjectTasks);
