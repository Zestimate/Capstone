import React from 'react';
import Helmet from 'react-helmet';

import PageHeader from 'components/page-header';
import {Text, P} from 'components/typography';
import Section, {SectionTitle} from 'components/section';

export default ({data}) => {
  const meta = data.site.siteMetadata;
  return (
    <main>
      <Helmet title={`About Me - ${meta.defaultTitle}`}>
        <meta name="twitter:title" content={`Profile - ${meta.defaultTitle}`} />
        <meta name="twitter:description" content={meta.defaultDescription} />
      </Helmet>
      <PageHeader title="About Me" />
      <Section>
        <P>
          Aspiring dietitian, maybe. I came late into the university game as a mature student approaching my mid twenties, trying to find my way as a student again. I wish to perhaps work in the field of graphic artistry as a side thing one day, it's just not an immediate goal right now. 
        </P>
        <P>
        Huge on cycling and playing various sports, especially basketball. Follow the NBA and MLB. Video games have always been a past time, favourite series being Monster Hunter. Play guitar and heavily inspired by jazz and progressive metal.
        </P>
      </Section>


    </main>
  );
};

export const pageQuery = graphql`
  query ProfileQuery {
    site {
      siteMetadata {
        defaultTitle
        defaultDescription
      }
    }
  }
`;
