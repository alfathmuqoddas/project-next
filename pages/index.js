import Head from 'next/head'
import Wrapper from '../components/Wrapper'
import Link from 'next/link'

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { users: data }
  }
}

export default function Home({ users }) {
  return (
    <Wrapper>
      <Head>
        <title>Next App</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
    <h1>List of Users</h1>
    { users.map(user => (
      <Link key={user.id} href={"/details/" + user.id}>
          <a><h3>{user.name}</h3></a>
      </Link>
    ))}
    </Wrapper>
  )
}
