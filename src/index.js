/* @flow */

import React from 'react';
import Remarkable from 'remarkable';

type PropsType = {
    markdown: string,
    options?: Object,
};

export default function MarkdownRenderer({ markdown, options = {}, ...props }: PropsType) {
  const remarkable = new Remarkable(options);
  const html = remarkable.render(markdown);

  return (
    <div {...props} dangerouslySetInnerHTML={{ __html: html }} />
  );
}
