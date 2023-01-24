import { createContext, ReactNode, useCallback, useEffect, useState } from 'react'
import { apiIssues } from '../lib/axios'

interface PostsContextData {
    fetchPosts: (query?: string) => Promise<void>,
    posts: Post[]
}

interface PostsProviderProps{
    children: ReactNode
}

interface Post {
    id: number;
    title: string;
    body: string;
    created_at: string;
}

export const PostsContext = createContext({} as PostsContextData)

export function PostsProvider({children}: PostsProviderProps){
    const [posts, setPosts] = useState([{}] as Post[])	

    const fetchPosts = useCallback(async (query?: string) => {
        const response = await apiIssues.get('', {
            params: {
                title: query,

            },
        })
        console.log(response.data)
        setPosts(response.data)
    }, [])

    useEffect(() => {
        apiIssues.get<Post[]>("https://api.github.com/repos/PedroHenriqueFernandes/blog/issues").then(
            response => {
                setPosts(response.data)
            }
        )
    }, [])

    return(
        <PostsContext.Provider value={{fetchPosts, posts}}>
            {children}
        </PostsContext.Provider>
    )
}