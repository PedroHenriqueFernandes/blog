import { BodyPostContainer, Markdown } from './styles'
import { Post } from '../../../../context/PostsContext'

interface ProfileProps {
  issue: Post
}

export function BodyPost({ issue }: ProfileProps) {
  return (
    <BodyPostContainer>
      <Markdown>{issue.body}</Markdown>
    </BodyPostContainer>
  )
}
