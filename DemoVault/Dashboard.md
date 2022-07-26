---
tags: 
alias: Home
cssClasses: cards cards-1-1 table-wide
---
# Dashboard


## Goals
```dataview
TABLE WITHOUT ID
	(link(file.path, alias)) as title,
	Bar
FROM #goal
WHERE Progress != Target
SORT Type DESC
```

## Projects
```dataview
TABLE WITHOUT ID
	(link(file.path, alias[0])) as title,
	subtitle,
	Bar,
	("Goal: " + link(Goal, Goal.alias)) as goal
FROM #project
WHERE status = "In Progress"
```
