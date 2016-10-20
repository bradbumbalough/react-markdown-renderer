import React from 'react';
import Remarkable from 'remarkable';

export default function MarkdownRenderer(props) {
    const remarkable = new Remarkable(props.options);
    const html = remarkable.render(props.markdown);

    return (
        <div {...props} dangerouslySetInnerHTML={{ __html: html }} />
    );
}

MarkdownRenderer.propTypes = {
    markdown: React.PropTypes.string.isRequired,
    options: React.PropTypes.shape({}),
};

MarkdownRenderer.defaultProps = {
    options: {},
};
