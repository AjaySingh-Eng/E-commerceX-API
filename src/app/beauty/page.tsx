import Home from '@/app/page';

export default function BeautyPage(props: any) {
  return <Home searchParams={{category: 'beauty'}} {...props} />;
}
