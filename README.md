# react-markdown-renderer

[![Build Status](https://travis-ci.org/InsidersByte/react-markdown-renderer.svg)](https://travis-ci.org/InsidersByte/react-markdown-renderer)
[![Coverage Status](https://coveralls.io/repos/github/InsidersByte/react-markdown-renderer/badge.svg?branch=master)](https://coveralls.io/github/InsidersByte/react-markdown-renderer?branch=master)  
[![Dependency Status](https://david-dm.org/insidersbyte/react-markdown-renderer.svg)](https://david-dm.org/insidersbyte/react-markdown-renderer)
[![peerDependency Status](https://david-dm.org/insidersbyte/react-markdown-renderer/peer-status.svg)](https://david-dm.org/insidersbyte/react-markdown-renderer#info=peerDependencies)
[![devDependency Status](https://david-dm.org/insidersbyte/react-markdown-renderer/dev-status.svg)](https://david-dm.org/insidersbyte/react-markdown-renderer#info=devDependencies)

[![NPM](https://nodei.co/npm/react-markdown-renderer.png?downloads=true&downloadRank=true)](https://nodei.co/npm/react-markdown-renderer/)

Simple React component that renders Markdown, built with [marked](https://github.com/chjj/marked). 

## Installing

```bash
npm install react-markdown-renderer --save
```

## Usage

```js
import React from 'react';
import ReactDOM from 'react-dom';
import MarkdownRenderer from 'react-markdown-renderer';

const markdown = '# This is a H1  \n## This is a H2  \n###### This is a H6';

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
