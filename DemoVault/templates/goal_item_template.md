---
tags: goal
alias: {{VALUE:Goal}}
Type: 
Progress: 0
Target: {{VALUE:🎯 Target (number)}}
Reason: {{VALUE:Why this goal?}}
Timespan: {{VALUE:10 Years, 5 Years, 3 Years, 1 Year, 6 Months, 1 Month, 1 Week}}
---
%%
Bar:: `$= dv.view('progress-bar', {file: '{{DATE}} - {{VALUE:Goal}}'})`
Projects:: `$= const projects = dv.page('{{DATE}} - {{VALUE:Goal}}').file.inlinks.where(p => { const mp = dv.page(p.path); return mp.tags?.contains('project') && mp.status === 'In Progress'}); if (projects.length > 0) { dv.header(4, projects.length > 1 ? "Projects" : "Project"); dv.list(projects) }`
%%


## Key results
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
