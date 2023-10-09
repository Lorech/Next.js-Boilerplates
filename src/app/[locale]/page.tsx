import { Footer, Header, Logo } from './Components';
import classes from './page.module.scss';

const Page = async () => {
  return (
    <main className={classes.root}>
      <Header />
      <Logo />
      <Footer />
    </main>
  );
};

export default Page;
