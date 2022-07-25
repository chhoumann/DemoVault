---
tags: goal
alias: Finish College
Type: Life
Progress: 5
Target: 10
Reason: 
Timespan:  3 Years
---
%%
Bar:: `$= dv.view('progress-bar', {file: '2022-02-11 - Finish College'})`
Projects:: `$= const projects = dv.page('2022-02-11 - Finish College').file.inlinks.where(p => { const mp = dv.page(p.path); return mp.tags?.contains('project') && mp.status === 'In Progress'}); if (projects.length > 0) { dv.header(4, projects.length > 1 ? "Projects" : "Project"); dv.list(projects) }`
%%

Progress: `$= dv.view('progress', {file: "2022-02-11 - Finish College"})`
Target:: `$= dv.view('target', {file: "2022-02-11 - Finish College"})`
Bar:: `$= dv.view('total-progress-bar', {file: "2022-02-11 - Finish College"})`

- [x] a
- [x] b
- [x] c
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
	const tasks = page.file.lists.where(t => t.task);
	
	return [
		page.file.link,
		page.status,
		tasks.where(t => t.status === 'x').length,
		tasks.length
	 ]
}));
```
