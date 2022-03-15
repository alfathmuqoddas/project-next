import Navbar from './Navbar'
import Footer from './Footer'

const Wrapper = ({children}) => {
    return (
        <div>
        <Navbar />
        <div className="container py-5">{children}</div>
        <Footer />
        </div>
    )
}

export default Wrapper;