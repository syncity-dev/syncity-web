---
# MOCK POST: remove before pushing to production.
title: What makes Estimum hard to copy
description: Anyone can build an estimation spreadsheet, and a language model will draft a task list in seconds. What we think is defensible about Estimum, and what we know is not.
publishedAt: 2026-10-09
draft: true
author: Syncity Team
tags:
  - product
  - estimation
---

Estimum is the estimation tool we are building for software teams. It is still pre-MVP, so this is not a launch post. It is the answer to a question we keep asking ourselves: if a competitor wanted to copy Estimum tomorrow, what would they actually have to copy?

The honest starting point is that most of it is easy to copy. A PERT calculation fits in a spreadsheet. A Gantt chart is a library. A language model will turn a feature list into a task breakdown before you finish your coffee. If that were the product, there would be no reason to build it.

## The number is the easy part

Every Estimum estimate ends in one number the team commits to: the P90, the date or cost we expect to meet nine times out of ten.

```text
Expected (E) = (Optimistic + 4 × Most likely + Pessimistic) / 6
σ            = (Pessimistic − Optimistic) / 6
P90          = Critical path E + 1.28 × Critical path σ
```

That formula is public and decades old.[^pert] What is not public is everything that has to be true before the inputs are worth putting into it.

## 1. Every feature comes from a real estimate

We run our own client estimates through the method before any of it becomes product. Each item in the Estimum backlog is written down with the problem it solved in a real session, and nothing goes in because it sounded useful in a meeting.

That discipline produced features we would not have designed from a whiteboard:

- **Separate backend and frontend streams.** On one project the flat task list looked balanced. Split into two streams, each with its own critical path, it was clearly driven by the backend, and the frontend could not start until one backend task was done.
- **Risk ranked by how much it moves the date.** A single task carried 56% of the backend's schedule variance. A risk section that says "this part is complex" would never have shown that.
- **Seniority as an input.** The same task takes a mid-level engineer noticeably longer than a senior one, and longer again when they work on code someone else wrote. Estimum asks who is doing the work instead of hiding it in a padded number.

A competitor can copy the feature list. They cannot copy the sessions that told us which features matter.

## 2. A second pass, built into the workflow

First-pass estimates are optimistic, and the optimistic value is the most common mistake. In one review, 7 of 11 backend tasks had an optimistic value of a single day, which almost never survives contact with real work. After going through the tasks one by one, total effort rose by about 20%, and every change was traceable to a specific reason.

> A first-pass estimate is a draft. The number a client sees should have survived a second look.

Estimum treats that review as a step in the process, not a note in a style guide. Most tools give you a number. We want the tool to give you a number that someone has argued with.

## 3. Estimates that are safe to send

An accurate engineering estimate can still be a bad proposal. Ours were missing three things a client-facing document needs:

1. **Open questions that block work.** If an answer could change a data model, the work does not start until it is answered, and the estimate says so.
2. **Scope prompts for vague features.** "Export to PDF" can mean the browser's print dialog or a branded report engine. That is hours versus weeks, and the task list never says which.
3. **Change control.** What counts as a change request, and what is explicitly out of scope, generated from the estimate itself so nobody forgets to add it.

Each of these came from a real document that needed a manual pass before it could go to a client.

## 4. The whole budget, not only the build

Development effort is the part everyone estimates. Company setup, insurance, tooling and hosting are the parts that surprise people later. On one engagement, the development estimate alone would have undercounted the real first-year budget by about 13%. Estimum puts overhead and infrastructure next to the build cost, so the total someone signs off on is the actual total.

## What is not a moat

It would be easy to list everything as an advantage, so here is what we do not count:

| Feature            | Why it isn't a moat                   |
| ------------------ | ------------------------------------- |
| AI pre-fill        | Every tool will have it within a year |
| PERT and P90       | Textbook math, free to anyone         |
| Gantt charts       | A charting library and an afternoon   |
| Branded PDF export | Nice to have, and easy to match       |

They are worth building, because they remove friction. They are not why anyone would choose Estimum over a spreadsheet.

## The loop is the moat

What we think is hard to copy is the loop. We estimate real client work with the method, the sessions show us where it breaks, and the fixes go into the product. Each project makes the next estimate more honest, and the tool gets better because we depend on it ourselves.

That only holds while we keep using it on real work. When we stop, Estimum becomes a spreadsheet with a nicer interface, and anyone can build one of those.

[^pert]: PERT, the Program Evaluation and Review Technique, was developed for the US Navy in the late 1950s.
