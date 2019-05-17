# DEV RULES

Development style guide

## General

The development language will be in English and applies to everything: classes, files, variables, even comments, console elements and questions. The only exception will be the internal content of the page.

### About Files

All new files will use **lowerCamelCase**.

```js
newFile.js
```

### About Programming

Classes, closure functions & really important/big functions (like components) use **UpperCamelCase**.

```js
class NewClass {}
```

```js
function NewClass() {}
```

The rest of minor functions & variables use **lowerCamelCase**.

```js
function newClass() {}
```

```js
let newVariable
```

Use **apostrophe** and NOT **quotations marks** for strings.

```js
let newVariable = 'use apostrophe'
```

### About Other Elements

For css elements use **lowercase-with-hyphen**.

```scss
.new-style {
  .child-style{}
}
```

In the db user **UPPERCASE** for tables name and **lowercase_with_underscore** for columns.

```js
CREATE TABLE USERS(
  first_column nvarchar(50),
  other_column nvarchar(50),
  last_column nvarchar(50)
);
```

### About commits on GIT

Use **Capitalisation** for 'commits'.
Be sure that 'commits' are as descriptive as possible & try to commit every time you finish the functionality of something, to understand better and faster what you did.

```git
BAD EXAMPLES
git commit -m "something"
git commit -m "little advance"
```

```git
GOOD EXAMPLES
git commit -m "Finish login service, working on user forms"
git commit -m "Styles on index done, starting login.jsx"
git commit -m "All buttons works correctly now"
```

Read this [GUIDE](https://github.com/RomuloOliveira/commit-messages-guide/blob/master/README.md) if you want to be more strict with your 'commits' content

## Questions or doubts?

Contact with [Joaquin](https://github.com/ByeBye-Sama)
