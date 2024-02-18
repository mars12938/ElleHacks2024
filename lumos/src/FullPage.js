import React from 'react';
import Fullpage, {FullPageSections, FullpageSection, FullpageNavigation} from '@ap.cx/react-fullpage';
import image from './study-seasonal-depression.jpeg'
import { LuSun } from "react-icons/lu";
import { FiSun } from "react-icons/fi";
import SurveyCreatorComponent from './questionaire/src/SurveyCreatorComponent';

import SurveyCreatorRenderComponent from './questionaire/src/SurveyCreatorComponent';
import './styles/App.scss';

const FullPage = () => {

    const SectionStyle = {
        //height: '100vh',
        width:'100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
       }
       const ContainerStyle = {
        //height: '100vh',
        width:'100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
       }

    return (
        <Fullpage>
            <FullpageNavigation/>
            <FullPageSections>
                <FullpageSection style={SectionStyle}>
                <h1>Welcome to Lumos.</h1>
                </FullpageSection>

                <FullpageSection style={SectionStyle}> 
                    <div className='row'>
                        <div className='col-3'>
                        <div className='mx-5'>
                        <FiSun className='pb-2'size='auto'/>
                        </div>
                        </div>

                        <div className='col-8'>
                        <div className='container'>
                            <h1 >Helping you overcome the Winter blues.</h1>
                            <h3 className='mt-3'> Over 15% of Canadians report experiencing seasonal depression. Seasonal Affective Disorder (SAD) is at it's peak during the months of January and February. Lumos attempts to break the cycle of seasonal depression by encouraging users to get sun exposure and prioritize connections. </h3>  
                        </div>

                        </div>
                    </div>
                    
                </FullpageSection>

                <FullpageSection style={SectionStyle}>
                    <div className='col-9'>
                        
                        <h1>Check out our Chrome Extension: <strong>LumosLite</strong>, which provides wellness reminders to get outside and reach out to your friends. </h1>
                        <div className='container' style={ContainerStyle}>
                        {/*<button type="button" class="btn btn-dark btn-lg vertical-center">Dark</button>*/}

                        </div>
                    </div>

                </FullpageSection>

                <FullpageSection style={SectionStyle}>
                    <div className='col-9'>
                        <h1>Resource Match Survey</h1>
                        <div className='mt-4'>
                            <SurveyCreatorComponent/>
                        </div>
                    </div>
                </FullpageSection>

            </FullPageSections>

        </Fullpage>
    );
};

export default FullPage;