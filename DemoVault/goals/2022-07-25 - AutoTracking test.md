---
tags: goal
alias: AutoTracking test
Type: Professional
Reason: Test
Timespan: 5 Years
---

%%
Progress:: `$= dv.view('progress', {file: '2022-07-25 - AutoTracking test'})`
Target:: `$= dv.view('target', {file: '2022-07-25 - AutoTracking test'})`
Bar:: `$= dv.view('total-progress-bar', {file: '2022-07-25 - AutoTracking test'})`
Projects:: `$= const projects = dv.page('2022-07-25 - AutoTracking test').file.inlinks.where(p => { const mp = dv.page(p.path); return mp.tags?.includes('project') && mp.status === 'In Progress'}); if (projects.length > 0) { dv.header(4, projects.length > 1 ? "Projects" : "Project"); dv.list(projects) }`
%%

-   [ ] a
-   [ ] b
-   [x] c
-   [x] d

## What does success look like? What are the key results?

-

## Related core values

-

## Projects to make this happen

### Ideas

-

### Created projects

```dataviewjs
const pages = dv.current().file.inlinks.where(p => dv.page(p.path).tags?.includes('project'));

dv.table(["Project", "Status", "Completed", "Tasks"], pages.map(p => {
	const page = dv.page(p.path);
	const tasks = page.file.tasks;
	return [
		page.file.link,
		page.status,
		tasks.where(t => t.fullyCompleted === true).length,
		tasks.length
	]
}));
```
