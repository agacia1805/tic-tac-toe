import { Homepage } from './slices';
import { Header } from './components';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center gap-16 p-24'>
      <Header />
      <Homepage />
    </main>
  );
}
