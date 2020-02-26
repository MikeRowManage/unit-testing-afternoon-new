import React from 'react'
import {render} from '@testing-library/react'
import PostWidget from '../components/PostWidget'
import {MemoryRouter} from 'react-router-dom'
import {shortenText} from '../utils/functions'
import {posts} from './__data__/testData'

const longPost = posts[0]
const post = posts[1]

it(`will check to see if the inner text content contains the passed in post's content`, () => {
    const {container} = render(
        <MemoryRouter>
            <PostWidget {...post}/>
        </MemoryRouter>
    )
    expect(container.textContent).toContain(post.text)
})

it(`will check to see if component shortens text when passed a post longer than 100 char.`, () => {
     const { container } = render(
    <MemoryRouter>
      <PostWidget {...longPost} />
    </MemoryRouter>,
  );
  expect(container.textContent).toContain(shortenText(longPost.text))
})

it('will check to see if component displays all text when passed as expanded prop', () => {
  const { container } = render(
    <MemoryRouter>
      <PostWidget expanded={true} {...longPost} />
    </MemoryRouter>,
  );

  expect(container.textContent).toContain(longPost.text);
});