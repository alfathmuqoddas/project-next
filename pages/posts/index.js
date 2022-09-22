import Head from 'next/head'
import Wrapper from '../../components/Wrapper'
import Link from 'next/link'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
  
    return {
      props: { posts: data }
    }
}

const Index = ({posts}) => {
    return (
        <Wrapper>
            <Head>
                <title>All Posts | Next App</title>
                <meta property="og:title" content="My page title" key="title" />
            </Head>
            <h1>List of All Posts</h1>
            <ol>
                    { posts.map(post => (
                        <li key={post.id} >
                        <Link href={"/posts/" + post.id}>
                            {post.title}
                        </Link>
                        </li>
                    ))}
            </ol>
        </Wrapper>
    )
}

export default Index;
