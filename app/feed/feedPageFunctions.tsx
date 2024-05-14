"use client"

import { upvoteDownvotePost} from "../actions"
import { PostModel } from "../interfaces/postInterfaces"
import styles from "../ui/FeedPage.module.css"

type UpvoteButtonsProps = {
    posts: PostModel
}

export default async function UpvoteButtons({ posts }: UpvoteButtonsProps) {
    const upvote = true
    const downvote = false

    return (
        <div className={styles.upvotes}>
            <img src={'/seta-cima.png'} width={20} onClick={() => upvoteDownvotePost(posts.id, upvote)} />
            {posts.upvote}
            <img src={'/seta-baixo.png'} width={20} onClick={() => upvoteDownvotePost(posts.id, downvote)}/>
        </div>)
}