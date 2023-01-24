import { useContext } from "react";
import { TextM, TextS, TitleM } from "../../../../styles/fonts";
import { PostContainer, PostsContainer, TitleAndDateContainer } from "./styles";

import { formatDistance } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { PostsContext } from "../../../../context/PostsContext";


export function Posts() {
    const { posts } = useContext(PostsContext)

    return (
        <PostsContainer>
            {posts.length > 0 && posts.map(post => {
                return (
                    <PostContainer key={post.id}>
                        <TitleAndDateContainer>
                            <TitleM>
                                {post.title}
                            </TitleM>
                            <TextS>
                                Há {post.created_at && formatDistance(new Date(post.created_at), new Date(), { locale: ptBR })}
                            </TextS>
                        </TitleAndDateContainer>
                        <TextM>
                            {post.body  && (post.body).substring(0, 200).concat("...")}
                        </TextM>
                    </PostContainer>
                )
            })
            }
        </PostsContainer>
    )
}