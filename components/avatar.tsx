'use client';

import { useDiscordUserStore } from '@/stores/discord-user';
import Image from 'next/image';

export default function Avatar() {
  const data = useDiscordUserStore(state => state.data);
  if (!data) {
    return (
      <div className='size-12 animate-pulse rounded-full border-2 border-primary bg-secondary' />
    );
  }

  return (
    <Image
      src={data?.metadata.display_avatar_url}
      alt=''
      width={100}
      height={100}
      className='size-12 rounded-full border-2 border-primary object-cover'
    />
  );
}