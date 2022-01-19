import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  // { number: 20, text: 'Open Source Projects'},
  // { number: 1000, text: 'Students', },
  // { number: 1900, text: 'Github Followers', },
  // { number: 5000, text: 'Github Stars', }
  {text: 'Technology is teaching us to be human again.'},
  {text: 'The great growing engine of change technology.', },
  {text: 'We are changing the world with technology.', },
  {text: 'Humans are the reproductive organs of the technology.', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Valuable Quotes</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          {/* <BoxNum>{card.number}+</BoxNum> */}
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
