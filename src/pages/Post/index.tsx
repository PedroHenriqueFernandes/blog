import { useContext } from 'react'
import { PostsContext } from '../../context/PostsContext'
import { BodyPost } from './components/BodyPost'
import { Profile } from './components/Profile'

export function Post() {
  const idPost = window.location.href
  const idPostSplit = idPost.split('/')
  const idPostNumber = idPostSplit[idPostSplit.length - 1]

  const { posts } = useContext(PostsContext)
  const issue = posts.find((post) => post.id === Number(idPostNumber))

  return (
    <>
      {issue && <Profile issue={issue} />}
      {issue && <BodyPost issue={issue} />}
    </>
  )
}
