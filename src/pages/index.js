import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/blog">
            A Permaweb built on Arweave
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="What is this">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      <a href="https://megumii.blessingway.xyz" target="_blank" rel="nofollow">
        <img src="https://github.com/Megumiiiiii.png" width={333} height={333} alt="Web" align="left"></img>
      </a>

      <a href="https://discordapp.com/users/873803230042263563" target="_blank" rel="nofollow">
        <img src="https://lanyard.cnrad.dev/api/873803230042263563?idleMessage=doing%20something%20else..."  alt="Discord Presence" align="right"></img>
      </a>
          <p align="center">"小さな肩を並べて歩いた
                            何でもない事で笑い合い
                            同じ夢を見つめていた
                            耳を澄ませば
                            今でも聞こえる
                            君の声 オレンジ色に染まる
                            街の中"</p>
          <p align="center">"君がいないと本当に退屈だね
                            寂しいと言えば笑われてしまうけど
                            残されたもの 何度も確かめるよ
                            消えることなく輝いている
                            雨上がりの空のような
                            心が晴れるような
                            君の笑顔を憶えている
                            思い出して笑顔になる"</p>
          <p align="center">"きっと二人はあの日のまま
                            無邪気な子供のまま
                            巡る季節を駆け抜けていく
                            それぞれの明日を見て
                            小さな肩を並べて歩いた
                            何でもない事で笑い合い
                            同じ夢を見つめていた
                            耳を澄ませば 今でも聞こえる
                            君の声 オレンジ色に染まる街の中"</p>
      </main>
    </Layout>
  );
}
