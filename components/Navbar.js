import Link from 'next/link'

const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
		  <div className="container">
		    <Link className="navbar-brand" href="/">Next Blog</Link>
		    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
		      <span class="navbar-toggler-icon"></span>
		    </button>
		    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
		      <div class="navbar-nav">
		        <Link className="nav-link" href="/posts">All Posts</Link>
		      </div>
		    </div>
		  </div>
		</nav>
        </>
    )
}

export default Navbar;