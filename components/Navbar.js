import Link from 'next/link'

const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
		  <div className="container">
		    <Link href="/"><a className="navbar-brand">Next Blog Dev</a></Link>
			<div className="navbar-nav">
				<Link href="/posts"><a className="nav-link">All Posts</a></Link>
			</div>
		  </div>
		</nav>
        </>
    )
}

export default Navbar;