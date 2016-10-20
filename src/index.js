import React from 'react';
import Remarkable from 'remarkable';

export default function MarkdownRenderer({ markdown, options = {}, ...props }) {
    const remarkable = new Remarkable(options);
    const html = remarkable.render(markdown);

    return (
        <div {...props} dangerouslySetInnerHTML={{ __html: html }} />
    );
}

MarkdownRenderer.propTypes = {
    markdown: React.PropTypes.string.isRequired,
    options: React.PropTypes.shape({}),
};
