import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Privacy First',
    image: 'img/features/privacy.svg',
    description: (
      <>
        All analysis happens locally on your device. No data ever leaves your network.
        Complete data sovereignty with zero cloud dependencies.
      </>
    ),
  },
  {
    title: 'AI-Powered Detection',
    image: 'img/features/ai.svg',
    description: (
      <>
        Uses Llama 3.2 AI model to identify sophisticated threats and attack patterns.
        Real-time threat detection with 99%+ accuracy.
      </>
    ),
  },
  {
    title: 'Easy Setup',
    image: 'img/features/setup.svg',
    description: (
      <>
        Simple installation on Raspberry Pi or any Linux device. Get started in minutes
        with automated configuration and updates.
      </>
    ),
  },
  {
    title: 'Real-Time Monitoring',
    image: 'img/features/monitoring.svg',
    description: (
      <>
        Continuous network traffic analysis with instant threat notifications.
        Monitor all IoT devices on your home network 24/7.
      </>
    ),
  },
  {
    title: 'Automated Response',
    image: 'img/features/response.svg',
    description: (
      <>
        Automatically blocks malicious traffic and isolates compromised devices.
        Instant protection without manual intervention.
      </>
    ),
  },
  {
    title: 'Open Source',
    image: 'img/features/opensource.svg',
    description: (
      <>
        MIT licensed for transparency and community contributions.
        Fully auditable code with active development.
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  const imgUrl = useBaseUrl(image);
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={imgUrl} className={styles.featureIcon} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
