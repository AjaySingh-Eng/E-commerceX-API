import Home from '@/app/page';

export default function MenPage(props: any) {
  return <Home searchParams={{category: 'men'}} {...props} />;
}
