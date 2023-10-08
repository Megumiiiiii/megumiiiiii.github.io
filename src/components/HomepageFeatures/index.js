import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const textStyle = {
  fontFamily: 'Courier',
  fontWeight: 'bold',
  fontSize: '1.2rem',
};
const FeatureList = [
  {
    title: '',
    Svg: require('@site/static/img/000.svg').default,
    description: (
      <>
        <span style={textStyle}><a href='https://megumii.blessingway.xyz' target="_blank" rel="nofollow">My Permaweb</a></span> 
      </>
    ),
  },
  {
    title: 'Powered by Arweave',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        <i>Yes this is a Permaweb on Arweave.</i>
      </>
    ),
  },
  {
    title: 'Powered by Github',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        <i>And also deployed on Github too.</i>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
