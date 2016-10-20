/* eslint-env jest */
/* eslint-disable import/imports-first, import/no-extraneous-dependencies */

jest.unmock('../../src');

import React from 'react';
import { shallow } from 'enzyme';
import Remarkable from 'remarkable';
import MarkdownRenderer from '../../src';

describe('MarkdownRenderer', () => {
    const markdown = '# This is a H1  \n## This is a H2  \n###### This is a H6';
    let renderMock = null;

    beforeEach(() => {
        renderMock = jest.fn();

        Remarkable.mockImplementation(() => ({
            render: renderMock,
        }));
    });

    afterEach(() => {
        expect(renderMock.mock.instances.length).toEqual(1);
    });

    describe('sets innerHTML', () => {
        let markdownRenderer;
        let html;

        afterEach(() => {
            expect(renderMock.mock.calls.length).toEqual(1);
            expect(renderMock).toBeCalledWith(markdown);
            expect(markdownRenderer.html()).toBe(`<div>${html}</div>`);
        });

        describe('remarkable returns html', () => {
            beforeEach(() => {
                html = '<h1>This is a H1</h1>';
                renderMock.mockReturnValueOnce(html);
            });

            it('sets innerHTML to html', () => {
                markdownRenderer = shallow(
                    <MarkdownRenderer markdown={markdown} />
                );
            });
        });

        describe('remarkable returns empty string', () => {
            beforeEach(() => {
                html = '';
                renderMock.mockReturnValueOnce(html);
            });

            it('sets innerHTML to empty string', () => {
                markdownRenderer = shallow(
                    <MarkdownRenderer markdown={markdown} />
                );
            });
        });
    });

    it('applies className', () => {
        const className = 'one two three';

        const markdownRenderer = shallow(
            <MarkdownRenderer markdown={markdown} className={className} />
        );

        expect(markdownRenderer.hasClass(className)).toBe(true);
    });
});
