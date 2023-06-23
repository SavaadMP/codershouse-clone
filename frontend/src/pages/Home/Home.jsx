import styles from "./Home.module.css"
import Card from "../../components/shared/Card/Card.jsx";
import Button from "../../components/shared/Button/Button.jsx";
import {Link, useNavigate } from "react-router-dom";


const Home = () => {
    const navigate = useNavigate()

    const signInLink = {
        color: '#0077ff',
        fontWeight: 'bold',
        textDecoration: 'none',
        marginLeft: '5px'
    }

    function startRegister(){
        navigate("/register")
    }

    return (
        <div className={styles.cardWrapper}>
            <Card title="Welcome to Codershouse!" icon="logo">
                <p className={styles.text}>
                    We’re working hard to get Codershouse ready for everyone! While we wrap up the finishing touches,
                    we’re
                    adding people gradually to make sure nothing breaks :)
                </p>
                <div>
                    <Button onClick={startRegister} text={"Get your username"} />
                </div>
                <div className={styles.signInWrapper}>
                    <span className={styles.hasInvite}>Have an invite text?</span>
                    <Link style={signInLink} to="/login">Login?</Link>
                </div>
            </Card>
        </div>
    );
};

export default Home;
