---
tags: goal
alias: Learn Copywriting
Type: 
Progress: 0
Target: 1
Reason: To advance my career and improve my skills.
Timespan:  6 Months
---
%%
Bar:: `$= dv.view('progress-bar', {file: '2022-02-11 - Learn Copywriting'})`
Projects:: `$= const projects = dv.page('2022-02-11 - Learn Copywriting').file.inlinks.where(p => { const mp = dv.page(p.path); return mp.tags?.contains('project') && mp.status === 'In Progress'}); if (projects.length > 0) { dv.header(4, projects.length > 1 ? "Projects" : "Project"); dv.list(projects) }`
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

dv.table(["Project", "Status"], pages.map(p => {
	const page = dv.page(p.path); 
	return [page.file.link, page.status]
}));
```
