import React, { Profiler } from 'react';
import Directory from '../../components/directory/directory.component';

import { HomePageContainer } from './homepage.styles';
import { getPerformance } from "firebase/performance";
getPerformance();
const HomePage = () => {
    return (
        <HomePageContainer>
                <Directory />
        </HomePageContainer>
    );
};


export default HomePage
