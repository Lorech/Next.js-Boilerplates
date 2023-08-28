import { Footer, Header, Logo } from './Components';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <Logo />
      <Footer />
    </main>
  );
}
