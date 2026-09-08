# Web Development Basics

Small HTML, CSS, and JavaScript exercises from when I was learning web
development. No frameworks, no build step, no dependencies. Every page is plain
HTML with a stylesheet and a script next to it, which is the point: these were
written to understand the DOM directly before reaching for a library.

Open any `.html` file in a browser to run it.

## The exercises

| Folder | What it does | Main idea |
|---|---|---|
| `counter` | Increment and decrement a number | Event listeners, updating state in the DOM |
| `Bulb` | Click to switch a lightbulb on and off | Swapping an image source from JS |
| `Calculator` | Working calculator keypad | Building a grid layout, parsing input |
| `ColorChanger` | Changes text and background | Reading and writing element styles |
| `ToDoList` | Add and remove list items | Creating and deleting DOM nodes at runtime |
| `GroceryList` | Same idea, different layout | Reusing a pattern in a new design |
| `Bookmarks` | Links to homework pages | Anchor tags and simple navigation |
| `ArtGallery` | Image gallery | Working with a folder of assets |
| `Instruments` | Click an instrument to hear it | Playing audio from JavaScript |
| `MovingObjects` | Arrow keys move a car sprite | Keyboard events, changing direction art |
| `Table` and `Tables` | Static data tables | Table markup and CSS styling |

The root `index.html` and `profile.html` are a small portfolio page and an about
page built from the same fundamentals.

## Why this repo is still here

It is the earliest work in my GitHub account and it is not polished. I keep it
because the progression is legible: the first exercises change one property on
one element, and the later ones build and remove DOM nodes in response to input.
Everything I have written since, in React or anywhere else, is that same loop
with more machinery on top.
