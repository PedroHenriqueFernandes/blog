import { PostsContext } from "../../../../context/PostsContext"
import { useContext } from "react"

export function Search(){
    const {fetchPosts} = useContext(PostsContext)

    async function handleFetch(data: any){
        data.preventDefault()
        await fetchPosts(data.target[0].value)
    }

    return(
        <form onSubmit={handleFetch}>
            <input type="text" />
            <button type="submit">Buscar</button>
        </form>
    )
}