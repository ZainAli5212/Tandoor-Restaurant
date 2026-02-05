import React from 'react';
import { Clock, Target, Eye, MapPin } from 'lucide-react';
import './About.css';
import AboutHero from "../../components/About/Hero"
import Stats from '../../components/About/Stats';
import AboutCards from '../../components/About/AboutCards';


const About = () => {
  

  const values = [
    {
      title: 'Our Mission',
      icon: <Target className="icon-orange" />,
      description: 'To provide not only great tasting food but efficient and friendly service. We aim to be the restaurant of choice for families and individuals alike, ensuring employee welfare and customer satisfaction are at the heart of everything we do.'
    },
    {
      title: 'Our Vision',
      icon: <Eye className="icon-orange" />,
      description: 'Serving happiness through delicious food and an extraordinary restaurant experience, maintaining the same great taste and service standards across all locations.'
    },
    {
      title: 'Our History',
      icon: <Clock className="icon-orange" />,
      description: 'Established in 1993 in Islamabad, we have grown through hard work and consistency. Today, we have expanded to Faisalabad and Burewala, overcoming challenges and staying true to our roots for three decades.'
    }
  ];

  return (
    <section className='about-section-body'>

      <AboutHero />

      <div className="stats-container">
        <Stats />
      </div>

      <AboutCards values={values}/>

      

    </section>
  )
};

export default About;