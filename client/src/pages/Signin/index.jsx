import styles from './SignIn.module.scss'
import clsx from 'clsx';
import SigninContainer from './components/SigninContainer';
function SignIn() {
    return (
        <section className={clsx(styles.spacemtb)}>
            <SigninContainer />
        </section>
    );
}

export default SignIn;