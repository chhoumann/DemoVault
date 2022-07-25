// Find all linked projects
const goalPage = dv.page(input.file);
const projects = goalPage
    .file
    .inlinks
    .where((p) => {
        const mp = dv.page(p.path);
        return mp.tags?.contains("project") && mp.status === "In Progress";
    });

const totalTasksGoalPage = goalPage.file.lists.where(t => t.task).length;
const totalTasksInProjects = projects.values.reduce((acc, p) => {
    const mp = dv.page(p.path);
    return acc + mp.file.lists.where(t => t.task).length;
}, 0);

dv.span(totalTasksGoalPage + totalTasksInProjects);