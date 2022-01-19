import React from 'react';
import { DiCoda, DiCodeBadge, DiCodeigniter, DiCss3, DiExtjs, DiFirebase, DiHtml5, DiJava, DiJavascript, DiMongodb, DiNodejs, DiReact, DiWebplatform, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionTitle>Skills</SectionTitle>
    <SectionText>
     The capacity to learn is a gift, the ability to learn is a skill, the willingness to learn is a choice. So, here I listed all my technical skills that I have learnt yet
    </SectionText>
    <List>
      <ListItem>
        {/* <DiMongodb size="3rem"/> */}
        <ListContainer>
          <ListTitle>Programming Languages</ListTitle>
          <ListParagraph>
            <DiJava size="3rem" />
            Java
            <br />
            <DiCodeBadge size="3rem" />

            C          <br />

            <DiCodeBadge size="3rem" />

            C++
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Web Technologies</ListTitle>
          <ListParagraph>
            <DiHtml5 size="3rem" />
            HTML <br/>
            <DiCss3 size="3rem" />
            CSS <br/>
            <DiJavascript size="3rem" />
            JavaScript
            <br />
            <DiNodejs size="3rem" />
            Node.js <br/>
            <DiExtjs size="3rem" />
            Express.js <br />
            <DiMongodb size="3rem" />
            Mongodb
          </ListParagraph>
        </ListContainer>
      </ListItem>
      {/* <ListItem>
        <DiFirebase size="3rem"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Node.js
          </ListParagraph>
        </ListContainer>
      </ListItem> */}
    </List>
  </Section>
);

export default Technologies;
