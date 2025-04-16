import Home from '@/app/page';

export default function HomePage(props: any) {
  return <Home searchParams={{category: 'home'}} {...props} />;
}
