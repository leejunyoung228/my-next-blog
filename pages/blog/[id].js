import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      블로그 {id}입니다. blog
    </div>
  )
}

