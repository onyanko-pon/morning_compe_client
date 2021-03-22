import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react';
import { useRouter } from 'next/router'

export default function SingnIn() {

  const [user, setUser] = useState(0);

  const axiosBase = require('axios');
  const axios = axiosBase.create({
    baseURL: 'http://localhost:8080/', // バックエンドB のURL:port を指定する
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    },
    responseType: 'json'
  });

  // let url = ""

  const router = useRouter()
  const { oauth_token, oauth_verifier } = router.query
  console.log(oauth_token, oauth_verifier)
  if (!user && oauth_token && oauth_verifier) {
    axios.get("/get_user_info?oauth_verifier=" + oauth_verifier + "&oauth_token=" + oauth_token)
      .then(function (response) {
        // console.log(response)
        // console.log(response.data.url)
        // url =
        console.log(response.data)
        setUser(response.data)
      })
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          ユーザー情報
        </h1>
        <div>
          <p>{user.name}</p>
          <p>{user.screen_name}</p>
          <p>{user.description}</p>
          <p>{user.profile_image_url}</p>
          <img src={user.profile_image_url}></img>
        </div>
      </main>
    </div>
  )
}