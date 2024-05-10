export interface PostModel {
    id: string,
    conteúdo: string,
    downvote: number,
    upvote: number,
    comments: number,
    createdAt: string,
    updatedAt: string,
    creator: {
        id: string,
        apelido: string
    },
}