import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root'
import CommentBox from 'components/CommentBox';

let wrapped;
beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  )
})
afterEach(() => {
  wrapped.unmount();
})
it('has a textarea and two buttons', () => {
    // console.log(wrapped.find("textarea").length);
    // console.log(wrapped.find('button').length);
    expect(wrapped.find('textarea').length).toEqual(1)
    expect(wrapped.find('button').length).toEqual(2)
})

describe('the textarea', () => {
  beforeEach(() => {
    wrapped.find('textarea').simulate('change', {
      target: { value: 'new comment' }
    });
    wrapped.update();
  })
  it('has a textarea that users can type in', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
  })

  it('when form submitted empty textarea', () => {
    // if we did not test above that textarea is equal to output we needed to add it
    // expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
    wrapped.find('form').simulate('submit');
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual('')
  })

})