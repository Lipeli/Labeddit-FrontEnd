import { cookies } from 'next/headers';
import React from 'react';
import { PostModel } from '../interfaces/postInterfaces';
import Link from 'next/link';
import styles from '../ui/FeedPage.module.css'
import { createPost } from '../actions';

async function getPosts(): Promise<PostModel[]> {
  const token = cookies().get('token')?.value

  const res = await fetch('http://localhost:3003/posts', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token!
    },
  })
  if (!res.ok) {
    return []
  }

  return res.json()

}

async function FeedPage() {

  const posts = await getPosts()

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src="https://user-images.githubusercontent.com/52434685/120907235-44d0cb80-c636-11eb-94f4-37fc890a2ceb.gif" alt="Logo" className={styles.logo} />
        <button>
          <Link href="/">
            Logout
          </Link>
        </button>
      </header>
      <form action={createPost}>
        <input id='conteudo' name='conteudo' type="textarea" placeholder='Escreva seu post..' className={styles.createPost} />
        <button type="submit" className={styles.postButton}>
          Postar
        </button>
      </form>
      <div>
        {posts.map((posts) => (
          <div className={styles.postsContainer}>
            <div key={posts.id} className={styles.post}>
              <p>Enviado Por: {posts.creator.apelido}</p>
              <p className={styles.conteudo}><b>{posts.conteúdo}</b></p>
              <div className={styles.infoContainer}>
                <div className={styles.upvotes}>
                  <img src={'/seta-cima.png'} width={30}/>
                  {posts.upvote}
                  <img src={'/seta-baixo.png'} width={30}/>
                  </div>
                <div className={styles.comments}>
                <img src='https://static.thenounproject.com/png/739210-200.png' width={25}/>
                  {posts.comments}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedPage;
