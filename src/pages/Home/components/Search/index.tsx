import { PostsContext } from '../../../../context/PostsContext'
import { useContext, useState, useEffect } from 'react'
import { FormContainerSearch, InputSearch, SummaryContainer } from './styles'
import { TextS, TitleS } from '../../../../styles/fonts'

export function Search() {
  const { fetchPosts, posts } = useContext(PostsContext)
  const [amountPosts, setAmountPosts] = useState(0)

  useEffect(() => {
    if (posts[0] !== undefined && posts[0].title !== undefined) {
      setAmountPosts(posts.length)
    }
  }, [posts])

  async function handleFetch(data: any) {
    data.preventDefault()
    await fetchPosts(data.target.value)
  }

  return (
    <>
      <SummaryContainer>
        <TitleS>Publicações</TitleS>
        <TextS>
          {amountPosts} {amountPosts > 1 ? 'publicações' : 'publicação'}
        </TextS>
      </SummaryContainer>

      <FormContainerSearch>
        <InputSearch
          placeholder="Buscar conteúdo"
          type="text"
          onChange={handleFetch}
        />
      </FormContainerSearch>
    </>
  )
}
