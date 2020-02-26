import {shortenText} from '../utils/functions'
import {wordCount, attachUserName} from '../../server/utils'
import {shortText, longText, posts, users} from './__data__/testData'

test('shortenText will not alter shortText', () => {
    expect(shortenText(shortText)).toHaveLength(29)
})

test('shortenText will alter text over 100 characters and will add three periods at end', () => {
    const shortened = shortenText(longText)

    expect(shortened).not.toHaveLength(longText.length)
    expect(shortened.slice(-3)).toBe("...")
})

test('checks posts array and returns the total word count of 233', () => {
    expect(wordCount(posts)).toBe(233)
})

test('checks to see if the first post returned from attachUserName has a property of displayName', () => {
    const newPosts = attachUserName(users, posts)
    expect(newPosts[0]).toHaveProperty('displayName')
})

test('checks to see if attachUserName removes any post without a matching user', () => {
    const newPosts = attachUserName(users, posts)
    const deletedPost = posts[6]
    expect(newPosts).not.toContainEqual(deletedPost)
})