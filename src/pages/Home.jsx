import React from 'react'
import Main from '../components/Main';
import Row from '../components/Row';
import requests from '../Requests';

const Home = () => {
    return (
        <div>
            <Main />
            <Row title='Popular' fetchURL={requests.requestPopular}/>
            <Row title='New Trending' fetchURL={requests.requestTrending}/>
            <Row title='Top Rated' fetchURL={requests.requestTopRated}/>
            <Row title='Upcoming' fetchURL={requests.requestUpcoming}/>
            <Row title='Comedy' fetchURL={requests.requestComedy}/>
            <Row title='Action' fetchURL={requests.requestAction}/>
            <Row title='Mystery' fetchURL={requests.requestMystery}/>
            <Row title='Romance' fetchURL={requests.requestRomance}/>
            <Row title='Sci Fi' fetchURL={requests.requestSciFi}/>
        </div>
    );
}

export default Home