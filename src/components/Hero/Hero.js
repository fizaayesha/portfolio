import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
     Hello, this is Ayesha Khan
      </SectionTitle>
      <SectionText>
      Welcome to my Personal Portfolio this website depicts all of the work that I have completed. It displays the growth and progress that I have made. I am excited to continue developing my skills and gaining valuable experiences.
      </SectionText>
      <Button onClick={() => window.location = 'https://fizaayesha.github.io/projects-gallery.github.io/'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;