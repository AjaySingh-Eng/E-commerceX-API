import Home from '@/app/page';

export default function WomenPage(props: any) {
  return <Home searchParams={{category: 'women'}} {...props} />;
}
