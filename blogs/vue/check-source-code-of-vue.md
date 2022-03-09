---
title: Check Source Code of Vue 2.0
date: 2021-08-16
tags:
  - Vue
  - Source Code
categories:
  - Vue
---

[Link to vue 2.0 github repo](https://github.com/vuejs/vue)

# Flow Syntax

```js
 export function renderList (
    val: any, // any means any type
    render: (
        val: any,
        keyOrIndex: string | number, // could be string type of number type
        index?: number // before colon: could be no return or number type if return
    ) => VNode
    ): ?Array<VNode>{
      // after colon: must have a return
      // the type could be Array or null or undefined
      // str in <> mean the types of Array
    ...
    }
```
