import { cookies } from 'next/headers';
import React from 'react';
import { PostModel } from '../interfaces/postInterfaces';
import Link from 'next/link';
import styles from '../ui/FeedPage.module.css'
import { createPost, getPosts} from '../actions';
import UpvoteButtons from './feedPageFunctions';


async function FeedPage() {

  const posts = await getPosts()

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src="https://user-images.githubusercontent.com/52434685/120907235-44d0cb80-c636-11eb-94f4-37fc890a2ceb.gif" alt="Logo" className={styles.logo} />
        <button>
            Logout
        </button>
      </header>
      <form action={createPost} className={styles.createPostForm}>
        <textarea id='conteudo' rows={5} name='conteudo' placeholder='Escreva seu post..' className={styles.createPost} />
        <button type="submit" className={styles.postButton}>
          Postar
        </button>
      </form>
      <div className={styles.line}></div>
      <div>
        {posts.map((posts) => (
          <div className={styles.postsContainer}>
            <div key={posts.id} className={styles.post}>
              <p>Enviado Por: {posts.creator.apelido}</p>
              <p className={styles.conteudo}><b>{posts.conteúdo}</b></p>
              <div className={styles.infoContainer}>
               <UpvoteButtons posts={posts}/> 
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
