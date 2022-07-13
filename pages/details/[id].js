import Head from 'next/head'
import Wrapper from '../../components/Wrapper'
import Link from 'next/link'

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data =  await res.json();

    const paths = data.map(user => {
        return {
            params: { id: user.id.toString() }
        }
    })

    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
 const id = context.params.id;
 const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
 const res2 = await fetch('https://jsonplaceholder.typicode.com/posts?userId=' + id);
 const data = await res.json();
 const data2 = await res2.json();

 return {
     props: { user: data, posts: data2 }
 }
}

const Details = ({ user, posts }) => {
    return (
        <Wrapper>
            <Head>
                <title>{ user.name } | Next App</title>
                <meta property="og:title" content={`Next App ${user.name}`} key="title" />
                <meta name="description" content={`Checkout ${user.name} on Next App`} key="desc" />
            </Head>
            <h1>{ user.name }</h1>
            <p>{ user. email } | <a href={ user. website }>{ user. website }</a> | { user. address.city }</p>
            <ul>
            { posts.map(post => (
                <li key={post.id}>
                <Link href={"/posts/" + post.id}>
                    {post.title}
                </Link>
                </li>
            ))}
            </ul>
        </Wrapper>
    )
}

export default Details;