import Head from 'next/head';
import Wrapper from '../components/Wrapper';
import Link from 'next/link';

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
        <title>Next App Dev</title>
        <meta name="description" content="Checkout our cool page" key="desc" />
      </Head>
    <h1>List of Users</h1>
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 row-cols-xl-4">
      { users.map(user => (
        <div key={user.id} className="col gy-3">
          <div className="card"  style={{ minHeight: "16rem" }}>
          <img src={`https://picsum.photos/seed/${user.name}/640/360`} className="card-img-top" alt="..." />
          <div className="card-body">
            <Link href={"/details/" + user.id}>
                <a><h4 className='card-title'>{user.name}</h4></a>
            </Link>
          </div>
        </div>
        </div>
      ))}
      </div>
    </div>
    </Wrapper>
  )
}
