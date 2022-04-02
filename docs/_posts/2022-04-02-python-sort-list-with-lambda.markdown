---
layout: post
title: "Python Sort List with Lambda"
date: 2022-04-02 12:30:00 -0800
categories: General
---

When you want to sort a list of dictionaries, based off of an attribute of each dictionary, you can use a lambda for the key parameter of sort or sorted methods.

```python
grades = [{"name": "Foo", "GPA": 3.0}, {"name": "Bar", "GPA": 3.8}, {"name": "John", "GPA": 2.9}]

# sort by GPA, ascending order
sorted_by_GPA = sorted(grades, key = lambda x:x["GPA"])
print(sorted_by_GPA)
# [{'name': 'John', 'GPA': 2.9}, {'name': 'Foo', 'GPA': 3.0}, {'name': 'Bar', 'GPA': 3.8}]
```