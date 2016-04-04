/* eslint-env jest */

jest.unmock('../../src');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import marked from 'marked';
import MarkdownRenderer from '../../src';

describe('MarkdownRenderer', () => {
    const markdown = '# This is a H1  \n## This is a H2  \n###### This is a H6';

    beforeEach(() => {
        marked.mockClear();
    });

    describe('sets innerHTML', () => {
        let containerNode;
        let html;

        afterEach(() => {
            expect(marked.mock.calls.length).toEqual(1);
            expect(marked).toBeCalledWith(markdown, { sanitize: true });

            const markdownRendererNode = containerNode.children[0];

            expect(markdownRendererNode).toBeDefined();
            expect(markdownRendererNode).not.toBe(null);
            expect(markdownRendererNode.innerHTML).toBe(html);
        });

        describe('marked returns html', () => {
            beforeEach(() => {
                html = '<h1>This is a H1</h1>';
                marked.mockReturnValueOnce(html);
            });

            it('sets innerHTML to html', () => {
                const markdownRenderer = TestUtils.renderIntoDocument(
                    <div>
                        <MarkdownRenderer markdown={markdown} />
                    </div>
                );

                containerNode = ReactDOM.findDOMNode(markdownRenderer);
            });
        });

        describe('marked returns empty string', () => {
            beforeEach(() => {
                html = '';
                marked.mockReturnValueOnce(html);
            });

            it('sets innerHTML to empty string', () => {
                marked.mockReturnValueOnce('');

                const markdownRenderer = TestUtils.renderIntoDocument(
                    <div>
                        <MarkdownRenderer markdown={markdown} />
                    </div>
                );

                containerNode = ReactDOM.findDOMNode(markdownRenderer);
            });
        });
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
