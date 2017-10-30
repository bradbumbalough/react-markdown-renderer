/* @flow */

import React from 'react';
import Remarkable from 'remarkable';

type PropsType = {
  markdown: string,
  options?: {
    preset?: 'default' | 'commonmark' | 'full',
    html?: boolean,
    xhtmlOut?: boolean,
    breaks?: boolean,
    langPrefix?: string,
    linkify?: boolean,
    typographer?: boolean,
    quotes?: string,
    highlight?: (str: string, lang: string) => string,
  },
  rules?: {
    block?: {
      enable?: array,
      disable?: array,
    },
    core?: {
      enable?: array,
      disable?: array,
    },
    inline?: {
      enable?: array,
      disable?: array,
    },
  },
};

const MarkdownRenderer = ({
  markdown,
  options: { preset, ...options } = {},
  rules,
  ...props
}: PropsType) => {
  const remarkable = new Remarkable(preset || 'default', options);

  /* rule is an object used to enable/disable rules.
    {
      core: {
        enable: [ 'abbr' ]
      },
      inline: {
        enable: [ 'ins', 'mark' ]
      },
      block: {
        disable: [ 'table', 'footnote' ]
      }
    }
  */
  if (rules) {
    Object.keys(rules).forEach(rule => {
      if (remarkable[rule] && remarkable[rule].ruler) {
        Object.keys(rules[rule]).forEach(flag => {
          if (remarkable[rule].ruler[flag]) {
            remarkable[rule].ruler[flag](rules[rule][flag]);
          }
        });
      }
    });
  }

  const html = remarkable.render(markdown);

  return <div {...props} dangerouslySetInnerHTML={{ __html: html }} />;
};

export default MarkdownRenderer;
