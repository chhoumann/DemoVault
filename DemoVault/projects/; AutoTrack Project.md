---
tags: project
alias:
  - AutoTrack Project
status: In Progress
subtitle: test
---
%%
Goal:: [[2022-07-25 - AutoTracking test|AutoTracking test]]
Bar:: `$= dv.view('total-progress-bar', {file: "; AutoTrack Project"})`
%%

`$= dv.view('total-progress-bar', {file: "; AutoTrack Project", alignLeft: true})`
# AutoTrack Project

## Project Info

## Thoughts 

## Resources

## Review questions

## Tasks
- [ ] 1
- [x] 2
- [ ] 3


```dataview
list
WHERE any(map(file.tasks, (task) => !task.completed))
```