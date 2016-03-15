# react-markdown-renderer

[![Build Status](https://travis-ci.org/InsidersByte/react-markdown-renderer.svg)](https://travis-ci.org/InsidersByte/react-markdown-renderer)  
[![Dependency Status](https://david-dm.org/insidersbyte/react-markdown-renderer.svg)](https://david-dm.org/insidersbyte/react-markdown-renderer)
[![peerDependency Status](https://david-dm.org/insidersbyte/react-markdown-renderer/peer-status.svg)](https://david-dm.org/insidersbyte/react-markdown-renderer#info=peerDependencies)
[![devDependency Status](https://david-dm.org/insidersbyte/react-markdown-renderer/dev-status.svg)](https://david-dm.org/insidersbyte/react-markdown-renderer#info=devDependencies)

[![NPM](https://nodei.co/npm/react-markdown-renderer.png?downloads=true&downloadRank=true)](https://nodei.co/npm/wemo-wrapper/)

Simple React component that renders Markdown

## Installing

```bash
npm install react-markdown-renderer
```

## Usage

```js
import React from 'react';
import ReactDOM from 'react-dom';
import MarkdownRenderer from 'react-markdown-renderer';

const markdown = '# This is an H1  \n## This is an H2  \n###### This is an H6';

ReactDOM.render(
  <MarkdownRenderer markdown={markdown} />,
  document.getElementById('content')
);
```

## Props

* markdown (*string*) - the raw markdown that will be converted to html (**required**)
* className (*string*) - css classes to add to the component (default: '').

## Contributing

Contributions are very welcome!

Please note that by submitting a pull request for this project, you agree to license your contribution under the [MIT License](https://github.com/insidersbyte/react-markdown-renderer/blob/master/LICENSE) to this project.

## License

Published under the [MIT License](https://github.com/insidersbyte/react-markdown-renderer/blob/master/LICENSE).
