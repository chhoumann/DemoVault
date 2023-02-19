const goalPage = dv.page(input.file);
const projects = goalPage.file.inlinks.where((p) => {
    const mp = dv.page(p.path);
    return mp.tags?.includes("project");
});

const totalTasksGoalPage = goalPage.file.tasks.length;
const totalTasksInProjects = projects.values.reduce((acc, p) => {
    const mp = dv.page(p.path);
    return acc + mp.file.tasks.length;
}, 0);

const finishedTasksGoalPage = goalPage.file.tasks.where(
    (t) => t.fullyCompleted === true
).length;
const finishedTasksInProjects = projects.values.reduce((acc, p) => {
    const mp = dv.page(p.path);
    return acc + mp.file.tasks.where((t) => t.fullyCompleted === true).length;
}, 0);

const Target = totalTasksGoalPage + totalTasksInProjects;
const Progress = finishedTasksGoalPage + finishedTasksInProjects;

const containerEl = createDiv();

const align = input?.alignLeft ? "left" : "center";

Object.assign(containerEl.style, {
    display: "flex",
    "flex-direction": "column",
    "align-items": align,
    "justify-content": "center",
});

const max = Target || 0;
const value = Progress || 0;
const percent = Math.round((value / max) * 100) || 0;

const progressBar = containerEl.createEl("progress");
Object.assign(progressBar, { max, value });

const progressText = containerEl.createEl("div");
Object.assign(progressText, {
    textContent: `${percent}% completed`,
});

dv.paragraph(containerEl.innerHTML);
