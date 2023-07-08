import React from 'react';
import person from '../../../assets/images/aboutUs/person.jpg';
import parts from '../../../assets/images/aboutUs/parts.jpg';
import PrimaryButton from '../../Shared/CommonStyle/PrimaryButton';
import SectionTitle from '../../Shared/CommonStyle/SectionTitle';
import Text from '../../Shared/CommonStyle/Text';

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2 absolute right-20 top-1/2 max-w-sm rounded-lg shadow-2xl border-8 border-white" />
                </div>
                <div className='lg:w-1/2 space-y-5'>
                    <SectionTitle>About Us</SectionTitle>
                    <h1 className="text-5xl font-bold">We are qualified and of experience in this field</h1>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quod exercitationem recusandae ducimus ratione cumque nisi totam? Libero, repudiandae dolor animi, ipsum asperiores suscipit dolorum cum sit eveniet distinctio officiis!</Text>
                    <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum laboriosam totam vitae dolore! Veritatis, culpa rem. Quam quos iste sed.</Text>
                    <PrimaryButton>Get More Info</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default About;