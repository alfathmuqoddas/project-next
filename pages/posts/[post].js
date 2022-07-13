import Head from 'next/head'
import Wrapper from '../../components/Wrapper'
import Link from 'next/link'

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data =  await res.json();

    const paths = data.map(post => {
        return {
            params: { post: post.id.toString() } //post karena dynamic route [post], jadi harus mengikuti
        }
    })

    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const postId = context.params.post;
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + postId);
    const data = await res.json();
    
    return {
        props: { post: data }
    }
}

const Post = ({ post }) => {
    return (
        <Wrapper>
            <Head>
                <title>{ post.title } | Next App</title>
                <meta property="og:title" content={`Next App ${post.title}`} key="title" />
                <meta property="og:description" content={`Next App ${post.title}`} key="description" />
                <meta name="description" content={`Checkout ${post.title} details on Next App`} key="desc" />
            </Head>
            <h1>{ post.title }</h1>
            <p>{ post.body }</p>
        </Wrapper>
    )
}

export default Post;