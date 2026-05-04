## Linting

**Introduction**

Imporve editor setup and overall productivity. This will make life easier going forward. Give tools to maintain consistent code-style.

**Lesson Overview**

- Learn about stye guides and why they are important
- Set up a linter and prettier to make code better

**Style Guies**

- Indentation, preferred quote, general code structure, makes code more maintainable easier to read

**Linting**

- **Linters** tools sca nyour code with a set of style rules and report any errors. They can auto fix erros
- most popular is *ESLint*
    - installed as a dev dependecy in your project

**Formatters**

- similar to linters but take JavaScript code and format to set of rules
- do not look for style errors, make intelligent decisions about things like space, indentation levels and line-breaks
- can't configure it much, need to make it dev dependecy for your project

**IDE extensions for linting and formatting**

- VS code has IDE extensions for both ESLint and Prettier
- important to still have packages installed as dependencies for fallback rules
- detect package, use those rules and package version installed
- this way projects always hold source of truth, less likely to introduce unwanted style changes from your local settings