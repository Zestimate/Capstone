import React from 'react';
import Helmet from 'react-helmet';

import Alert from 'components/alert';
import PageHeader from 'components/page-header';
import Markdown from 'components/markdown';
import FollowButton from 'components/follow-button';

export default function Template({data}) {
  const {markdownRemark: post} = data;
  const meta = data.site.siteMetadata;

  const dateToday = new Date();
  const datePost = new Date(post.fields.date);

  const isOldPost = (dateToday - datePost) / (1000 * 3600 * 24 * 365) > 1;

  return (
    <main>
      <article>

        <PageHeader
          title={post.frontmatter.title}
          subTitle={post.fields.date}
        />
        {isOldPost ? (
          <Alert type="warning">
            ---
          </Alert>
        ) : null}
        <Markdown
          dangerouslySetInnerHTML={{__html: post.html}}
          id="top"
          className="content"
        />
        <FollowButton mt={1} />
      </article>
    </main>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($slug: String!) {
    site {
      siteMetadata {
        author
        defaultTitle
        defaultDescription
      }
    }
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      excerpt
      timeToRead
      fields {
        date(formatString: "MMMM DD, YYYY")
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
