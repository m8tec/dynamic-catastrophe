import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/play?mode=static&scenario=climate-change');
}