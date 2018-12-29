# Components

In this section, all the basic components in a Markdown document are listed. If you wish to have support
for extra components, feel free to make a fork of Documate and edit the core Markdown converter ([ShowdownJS](http://showdownjs.com/)) thereof. You can manage and create custom Showdown plugins to fit your needs which you can integrate flawlessly into Documate to achieve greater flexibility. Such an interface doesn't exist but is on its way.

## Typography

# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

## Buttons

Buttons come in 5 different (common?) forms:

<button>Default</button>
<button class="primary">Primary</button>
<button class="success">Success</button>
<button class="warning">Warning</button>
<button class="danger">Danger</button>

## Blockquotes

And a great deal of quotes:

> "Imagination is more important than knowledge."
> ~ Albert Einstein

## Code Blocks

Documate uses [HighlightJS](https://highlightjs.org) to highlight code blocks. If you wish to configure Highlight on your own, simply create and edit a build or create a fork of Documate wherein you define your own custom behaviour (including removing code highlights). Documate doesn't support configuration options. Prefix any language supported by HighlightJS next to the opening triple backticks and Documate will do the rest.

```javascript
import documate from 'documate';

const documentOrigin = [...prefix('./documate/index.md')];

export default documate(documentOrigin).reduce((acc, next) => acc.call(null, next++))
```

## Code Sweets

These tiny tidbits are so sweet. Just don't overuse 'em:

`packem.require('./custom')`, `UNSAFE_shouldComponentUpdate`

## Responsive Tables

Documate doesn't currently support tables. We know it sounds ridiculous, but bear with us. We are
working on it.