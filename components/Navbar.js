import Link from 'next/link'

const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
		  <div className="container">
		    <Link href="/"><a className="navbar-brand">Next Blog</a></Link>
		    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
		      <span className="navbar-toggler-icon"></span>
		    </button>
		    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
		      <div className="navbar-nav">
		        <Link href="/posts"><a className="nav-link">All Posts</a></Link>
		      </div>
		    </div>
		  </div>
		</nav>
        </>
    )
}

export default Navbar;