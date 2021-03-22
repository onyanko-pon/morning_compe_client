import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react';

export default function SingnIn() {

  const [url, setUrl] = useState(0);

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
  console.log("url", url)

  if (!url) {
    axios.get('/get_request_token')
      .then(function (response) {
        // console.log(response)
        // console.log(response.data.url)
        // url =
        setUrl(response.data.url)
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
          <a href={url}>Twitterでログインする</a>
        </h1>
        <div>

        </div>
      </main>
    </div>
  )
}