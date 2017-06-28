# Makers Styles: a guide

This guide takes you through the basics of how we do HTML and styles in the Makers-Styles package.

> Some styles do not conform to these guidelines. You should follow them on a 'do as I say, not as I do' kinda principle. We're always refactoring bits that stick out wrong.

## Introduction

Let's look at some basic aspects of HTML and CSS.

Our rules for HTML:

- use **classes for styling** and **slugify them**
- use **ids for JavaScript** and **underscore them**
- always use the **minimum amount of HTML** to achieve the desired effect.
- use [**semantic HTML**](http://html5doctor.com/lets-talk-about-semantics/)
- all HTML elements should have a class. There are only a couple of exceptions (find them in the code)

**Bad HTML example**

```html
<div>
  <main>
    <h1 id="text-header" class="text_header">The header is here</h1>
    <p class="textCopy">Here are some extra words!</p>
  </main>
</div>
```

**Fixed HTML example**

```html
<main class="article">
  <main>
    <h1 id="text-header" class="text_header">The header is here</h1>
    <p class="textCopy">Here are some extra words!</p>
  </main>
</div>
```