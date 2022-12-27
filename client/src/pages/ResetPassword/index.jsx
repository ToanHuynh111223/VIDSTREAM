import styles from './ResetPassword.module.scss'
import clsx from 'clsx';
import ResetPasswordContainer from './components/ResetPasswordContainer';
function ResetPassword() {
    return (
        <section className={clsx(styles.spacemtb)}>
            <ResetPasswordContainer />
        </section>
    );
}

export default ResetPassword;