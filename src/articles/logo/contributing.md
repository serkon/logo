# Community Support

Bu bileşenler open source amaçlı üretilmiştir. Tüm geliştiricilerin desteğine ihtiyaç duymaktayız. İşlerin düzgün yürümesi için bir commit standartımızın olması gerektiğini düşünüyoruz. Bu nedenle aşağıdaki methodları benimsemekteyiz.

`fix(table): update dependencies to support universal enviro… (#2057)`

### Type
Must be one of the following:

* **feat**: A new feature
* **fix**: A bug fix
* **docs**: Documentation only changes
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing
  semi-colons, etc)
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **perf**: A code change that improves performance
* **test**: Adding missing tests or correcting existing tests
* **build**: Changes that affect the build system, CI configuration or external dependencies (example scopes: gulp, broccoli, npm)
* **chore**: Other changes that don't modify `src` or `test` files
* **release**: Release version commit

### Scope
The scope could be anything specifying place of the commit change. For example
`menu`, `sidebar`, etc.

### Subject
The subject contains succinct description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* don't capitalize first letter
* no dot (.) at the end

### Body
Optional. Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior.

### Footer
Optional. The footer should contain any information about **Breaking Changes** and is also the place to
reference GitHub issues that this commit **Closes**.

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or two newlines.
The rest of the commit message is then used for this.
