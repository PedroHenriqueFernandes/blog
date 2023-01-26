import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { apiIssues } from '../lib/axios'

interface PostsProviderProps {
  children: ReactNode
}

export interface Post {
  url: string
  repository_url: string
  labels_url: string
  comments_url: string
  events_url: string
  html_url: string
  id: number
  node_id: string
  number: number
  title: string
  user: {
    login: string
    id: number
    node_id: string
    avatar_url: string
    gravatar_id: string
    url: string
    html_url: string
    followers_url: string
    following_url: string
    gists_url: string
    starred_url: string
    subscriptions_url: string
    organizations_url: string
    repos_url: string
    events_url: string
    received_events_url: string
    type: string
    site_admin: boolean
  }
  labels: any[]
  state: string
  locked: boolean
  assignee: any
  assignees: any[]
  milestone: any
  comments: number
  created_at: string
  updated_at: string
  closed_at: any
  author_association: string
  active_lock_reason: any
  body: string
  closed_by: any
  reactions: {
    url: string
    total_count: number
    '+1': number
    '-1': number
    laugh: number
    hooray: number
    confused: number
    heart: number
    rocket: number
    eyes: number
  }
  timeline_url: string
  performed_via_github_app: any
  state_reason: any
}

interface PostsContextData {
  fetchPosts: (query?: string) => Promise<void>
  posts: Post[]
}

export const PostsContext = createContext({} as PostsContextData)

export function PostsProvider({ children }: PostsProviderProps) {
  const [posts, setPosts] = useState([{}] as Post[])

  const fetchPosts = useCallback(async (query?: string) => {
    if (query) {
      apiIssues.get<Post[]>('').then((response) => {
        const postsFiltered = response.data.filter((post) =>
          post.title.toLowerCase().includes(query.toLocaleLowerCase()),
        )
        setPosts(postsFiltered)
      })
    } else {
      apiIssues.get<Post[]>('').then((response) => {
        setPosts(response.data)
      })
    }
  }, [])

  useEffect(() => {
    apiIssues.get<Post[]>('').then((response) => {
      setPosts(response.data)
    })
  }, [])

  return (
    <PostsContext.Provider value={{ fetchPosts, posts }}>
      {children}
    </PostsContext.Provider>
  )
}
