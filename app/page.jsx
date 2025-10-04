import Navbar from '@/components/layout/Navbar'
import { Main } from '@/components/section/Main';

export default function Home() {
  return (
    <div className='flex flex-col justify-start items-center min-h-screen'>
    <Navbar/>
    <Main/>
    </div>
  );
}
