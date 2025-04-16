import Home from '@/app/page';

export default function KidsPage(props: any) {
  return <Home searchParams={{category: 'kids'}} {...props} />;
}
