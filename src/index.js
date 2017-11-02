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
      enable?: string[],
      disable?: string[],
    },
    core?: {
      enable?: string[],
      disable?: string[],
    },
    inline?: {
      enable?: string[],
      disable?: string[],
    },
  },
};

const MarkdownRenderer = ({
  markdown,
  options: { preset, ...options } = {},
  rules,
  ...props
}: PropsType) => {
  const remarkable: Object = new Remarkable(preset || 'default', options);

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
    const ruleObject = rules;

    Object.keys(ruleObject).forEach((ruleKey: string) => {
      if (ruleKey && remarkable[ruleKey] && remarkable[ruleKey].ruler) {
        Object.keys(ruleObject[ruleKey]).forEach((flagKey: string) => {
          if (remarkable[ruleKey].ruler[flagKey]) {
            remarkable[ruleKey].ruler[flagKey](ruleObject[ruleKey][flagKey]);
          }
        });
      }
    });
  }

  const html = remarkable.render(markdown);

  return <div {...props} dangerouslySetInnerHTML={{ __html: html }} />;
};

export default MarkdownRenderer;
