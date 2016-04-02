import React from 'react';
import marked from 'marked';

function MarkdownRenderer(props) {
    const html = marked(props.markdown || '', { sanitize: true });

    return (
        <div className={props.className} dangerouslySetInnerHTML={{ __html: html }}></div>
    );
}

MarkdownRenderer.propTypes = {
    markdown: React.PropTypes.string.isRequired,
    className: React.PropTypes.string,
};

export default MarkdownRenderer;
