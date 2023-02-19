---
tags: goal
alias: {{VALUE:Goal}}
Type: 
Reason: {{VALUE:Why this goal?}}
Timespan: {{VALUE:10 Years, 5 Years, 3 Years, 1 Year, 6 Months, 1 Month, 1 Week}}
---
%%
Progress:: `$= dv.view('progress', {file: '{{DATE}} - {{VALUE:Goal}}'})`
Target:: `$= dv.view('target', {file: '{{DATE}} - {{VALUE:Goal}}'})`
Bar:: `$= dv.view('total-progress-bar', {file: '{{DATE}} - {{VALUE:Goal}}'})`
Projects:: `$= const projects = dv.page('{{DATE}} - {{VALUE:Goal}}').file.inlinks.where(p => { const mp = dv.page(p.path); return mp.tags?.contains('project') && mp.status === 'In Progress'}); if (projects.length > 0) { dv.header(4, projects.length > 1 ? "Projects" : "Project"); dv.list(projects) }`
%%


## What does success look like? What are the key results?
- 


## Related core values
- 

## Projects to make this happen
### Ideas
- 

### Created projects
```dataviewjs
const pages = dv.current().file.inlinks.where(p => dv.page(p.path).tags?.contains('project'));

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