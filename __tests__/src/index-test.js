/* eslint-env jest */

jest.unmock('../../src');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import marked from 'marked';
import MarkdownRenderer from '../../src';

describe('MarkdownRenderer', () => {
    const markdown = '# This is an H1  \n## This is an H2  \n###### This is an H6';

    beforeEach(() => {
        marked.mockClear();
    });

    it('renders', () => {
        const markdownRenderer = TestUtils.renderIntoDocument(
            <div>
                <MarkdownRenderer markdown={markdown} />
            </div>
        );

        const containerNode = ReactDOM.findDOMNode(markdownRenderer);
        const markdownRendererNode = containerNode.children[0];

        expect(markdownRendererNode).toBeDefined();
        expect(markdownRendererNode).not.toBe(null);

        expect(marked.mock.calls.length).toEqual(1);
        expect(marked).toBeCalledWith(markdown, { sanitize: true });
    });

    describe('applies className', () => {
        it('defaults empty', () => {
            const markdownRenderer = TestUtils.renderIntoDocument(
                <div>
                    <MarkdownRenderer markdown={markdown} />
                </div>
            );

            const containerNode = ReactDOM.findDOMNode(markdownRenderer);
            const markdownRendererNode = containerNode.children[0];

            expect(markdownRendererNode.className).toBe('');
        });

        it('applies className', () => {
            const className = 'one two three';

            const markdownRenderer = TestUtils.renderIntoDocument(
                <div>
                    <MarkdownRenderer markdown={markdown} className={className} />
                </div>
            );

            const containerNode = ReactDOM.findDOMNode(markdownRenderer);
            const markdownRendererNode = containerNode.children[0];

            expect(markdownRendererNode.className).toBe(className);
        });
    });

    describe('defaults markdown', () => {
        afterEach(() => {
            expect(marked.mock.calls.length).toEqual(1);
            expect(marked).toBeCalledWith('', { sanitize: true });
        });

        it('nothing passed', () => {
            TestUtils.renderIntoDocument(
                <div>
                    <MarkdownRenderer />
                </div>
            );
        });

        it('undefined passed', () => {
            TestUtils.renderIntoDocument(
                <div>
                    <MarkdownRenderer markdown={undefined} />
                </div>
            );
        });

        it('null passed', () => {
            TestUtils.renderIntoDocument(
                <div>
                    <MarkdownRenderer markdown={null} />
                </div>
            );
        });
    });
});
