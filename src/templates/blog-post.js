import React from 'react'
import { graphql, } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from "../components/layout";
import SEO from '../components/seo'

export default function Template({data}) {
    const post = data.markdownRemark
    console.log(data)
    return(
        <Layout>
          <SEO 
            title={post.frontmatter.title}
            description={post.frontmatter.slug || post.excerpt || 'nothin’'}
            pathname={post.frontmatter.path}
            image={post.frontmatter.image}
            article />
            
          <div className='prose text-gray-400 lg:prose-xl'> 
              <h1 className=''>{post.frontmatter.title}</h1>
              <div className='danger' dangerouslySetInnerHTML={{__html: post.html}}/>
          </div>
        </Layout>
    )
}

Template.propTypes = {
    data: PropTypes.object,
  };

export const postQuery = graphql`
query BlogPostByPath($path: String!) {
  markdownRemark(frontmatter: {path: {eq: $path}}) {
    html
    frontmatter {
      path
      title
      author
      date(formatString: "DD MMMM, YYYY")
      description
      slug
      image
    }
    excerpt
  }
}

`
