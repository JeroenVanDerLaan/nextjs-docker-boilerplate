import styles from './HomePage.module.scss';
import * as React from 'react';

export interface HomePageProps
{
    className?: string;
}

const HomePage: React.FunctionComponent<HomePageProps> = (
    props: HomePageProps
) =>
{
    return <main
        className={styles['home-page']}
    >
        <h1>Hello from HomePage</h1>
    </main>
}

export default HomePage;
