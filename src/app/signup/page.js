import CreateAccountForm from "@/components/createAccountForm/CreateAccountForm"
import classes from '@/styles/signup.module.css';


export const metadata = {
  title: 'Sign Up',
  description: 'Melody Mart Sign up page',
}

export default function SignUpPage () {
  return (
    <div className={classes.page}>

      <div className={classes.layer}>
        <div className={classes.container}>
          <span>Create account to start buying your dream gear</span>
          <h1>Create account</h1>
          <CreateAccountForm />
        </div>
      </div>

    </div>
  )
};
