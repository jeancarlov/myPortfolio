import React from 'react';
import SOCIAL_PROFILES from '../data/socialProfiles';

const SocialProfile = props => {
        const { link, image } = props.socialProfile;
        return(
            <div style={{ display: 'inline-block', width: 400, margin: 10}}>
            <div>
            <a href= {link}><img src= {image} alt='social-profiles' style={{ width: 35, height: 35, margin: 10 }}/></a>
            </div>
            </div>
        )
}

// inline return is apply here 
const SocialProfiles = () => (
             <div>
                <h2> Connet with me</h2>
                <div>
                {
                    SOCIAL_PROFILES.map(SOCIAL_PROFILE => {
                        return <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE} />;
                    })
                }
                </div>
            </div>
)

export default SocialProfiles;