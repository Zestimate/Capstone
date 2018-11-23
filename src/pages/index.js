import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import {Box} from 'grid-styled';
import styled, {css} from 'styled-components';

import {Text, P} from 'components/typography';
import Section, {SectionTitle} from 'components/section';

const PostDate = styled(Text)`
  font-size: 0.8em;
  display: block;
`;

const BARS = ['#ebbb3b', '#e5410d', '#c51b1b', '#97143a', '#6a1842'];

const Index = ({data}) => {
  const {edges: posts} = data.allMarkdownRemark;
  const meta = data.site.siteMetadata;
  return (
    <div style={{overflow: 'auto',  zIndex: 5}}>
      <main>
        <Helmet title={meta.defaultTitle}>
          <meta name="twitter:title" content={meta.defaultTitle} />
          <meta name="twitter:description" content={meta.defaultDescription} />
        </Helmet>
        <Section>
          <P>
            <br />
            This page was created for a capstone assignment for CIFS100.
          </P>
          <P>
            Laurel ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </P>
        </Section>
        <Section>
          <SectionTitle>Recent Articles</SectionTitle>
          {posts
            .filter(post => post.node.frontmatter.title.length > 0)
            .map(({node: post}) => (
              <Box mb={2} key={post.frontmatter.title}>
                <Text>
                  <Link to={post.fields.slug} style={{textDecoration: 'none'}}>
                    {post.frontmatter.title}
                    <PostDate is="time" dateTime={post.fields.date}>
                      {post.fields.date}
                    </PostDate>
                  </Link>
                </Text>
              </Box>
            ))}
        </Section>
      </main>
    </div>
  );
};

export default Index;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        defaultTitle
        defaultDescription
      }
    }
    allMarkdownRemark(sort: {fields: [fields___date], order: DESC}) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          fields {
            date(formatString: "MMMM DD, YYYY")
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
