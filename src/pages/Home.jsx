import React from 'react'
import Main from '../components/Main';
import Row from '../components/Row';
import requests from '../Requests';

const Home = () => {
    return (
        <div>
            <Main />
            <Row rowID='POP' title='Popular' fetchURL={requests.requestPopular}/>
            <Row rowID='NEW' title='New Trending' fetchURL={requests.requestTrending}/>
            <Row rowID='TOP' title='Top Rated' fetchURL={requests.requestTopRated}/>
            <Row rowID='UPCOMING' title='Upcoming' fetchURL={requests.requestUpcoming}/>
            <Row rowID='COM' title='Comedy' fetchURL={requests.requestComedy}/>
            <Row rowID='SCI' title='Sci Fi' fetchURL={requests.requestSciFi}/>
            <Row rowID='ACT' title='Action' fetchURL={requests.requestAction}/>
            <Row rowID='MYS' title='Mystery' fetchURL={requests.requestMystery}/>
            <Row rowID='ROM' title='Romance' fetchURL={requests.requestRomance}/>
        </div>
    );
}

export default Home