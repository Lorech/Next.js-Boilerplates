import { Footer, Header, Logo } from './Components';
import classes from './page.module.scss';

export default function Page() {
  return (
    <main className={classes.root}>
      <Header />
      <Logo />
      <Footer />
    </main>
  );
}
