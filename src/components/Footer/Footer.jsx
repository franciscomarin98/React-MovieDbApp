import { Layout } from 'antd';
import './Footer.scss'

const Footer = () => {
    const { Footer } = Layout;
    return (
        <Footer className="footer">
            <p>&copy; Copyright {new Date().getFullYear()}, Francisco Marin</p>
        </Footer>
    )
}

export default Footer
