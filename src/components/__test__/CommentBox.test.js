import React from 'react';
import { mount } from 'enzyme';

import CommentBox from 'components/CommentBox';
import { unmountComponentAtNode } from 'react-dom';

let wrapped;
beforeEach(() => {
  wrapped = mount(<CommentBox />)
})
afterEach(() => {
  wrapped.unmount();
})
it('has a textarea and button', () => {
    // console.log(wrapped.find("textarea").length);
    // console.log(wrapped.find('button').length);
    expect(wrapped.find('textarea').length).toEqual(1)
    expect(wrapped.find('button').length).toEqual(1)
})