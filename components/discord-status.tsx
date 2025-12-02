'use client';

import cn from '@/utils/cn';
import { useEffect, useState } from 'react';
import Tooltip from '@/components/tooltip';
import { Link } from 'next-view-transitions';
import type { LanternSpotify, LanternUserResponse } from '@/types';
import Image from 'next/image';
import getRelativeTime from '@/utils/getRelativeTime';
import { useDiscordUserStore } from '@/stores/discord-user';

type DiscordStatusProps = {
  userId: string;
  hide?: boolean;
}

export default function DiscordStatus({ userId, hide = false }: DiscordStatusProps) {
  type Status = 'online' | 'offline' | 'loading' | 'error';

  const [status, setStatus] = useState<Status>('loading');
  const [spotify, setSpotify] = useState<LanternSpotify | null>(null);
  const [lastSeenAt, setLastSeenAt] = useState<number | null>(null);

  const setData = useDiscordUserStore(state => state.setData);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(`https://lantern.rest/api/v1/users/${userId}`);
        if (!response.ok) throw new Error('Failed to fetch status');

        const data: LanternUserResponse = await response.json();

        if (data.status === 'offline') {
          setStatus('offline');
          setLastSeenAt(data.last_seen_at.unix * 1000);
        } else {
          setStatus('online');

          if (data.active_platforms.spotify !== null) setSpotify(data.active_platforms.spotify);
        }

        setData(data);
      } catch (error) {
        console.error(`Something went wrong: ${error}`);

        setStatus('error');
      }
    }

    getData();
  }, [userId, setData]);

  const isOffline = status === 'loading' || status === 'error' || status === 'offline';

  return (
    <Tooltip
      content='Discord status powered by lantern.rest'
      side='bottom'
    >
      <Link
        className={cn(
          'flex cursor-pointer flex-col items-end transition-opacity hover:opacity-70',
          hide && 'pointer-events-none opacity-0'
        )}
        href='https://lantern.rest'
        onClick={() => {
          if ('rybbit' in window) window.rybbit.event('discord_status_click');
        }}
      >
        {!isOffline && spotify && (
          <div className='hidden items-center gap-x-2 sm:flex'>
            <Image
              src={spotify.album_cover}
              height={20}
              width={20}
              alt={`${spotify.song} by ${Array.isArray(spotify.artist) ? spotify.artist.join(', ') : spotify.artist}`}
              className='size-4 animate-spin rounded-full [animation-duration:3s]'
            />

            <div className='flex items-center gap-x-1 text-xs'>
              <span className='text-tertiary'>Listening to</span>

              <div className='max-w-[100px] truncate'>{spotify.song}</div>

              <span className='text-tertiary'>by</span>

              {Array.isArray(spotify.artist) ? spotify.artist.join(', ') : spotify.artist}
            </div>
          </div>
        )}

        {isOffline && lastSeenAt && (
          <div className='flex items-center gap-x-1 text-xs text-tertiary'>
            Last seen <span className='text-secondary'>{getRelativeTime(lastSeenAt)}</span>
          </div>
        )}

        <div className='flex select-none items-center gap-x-2 text-xs font-medium text-tertiary'>
          <div
            className={cn(
              'relative size-2 rounded-full',
              isOffline && 'bg-quaternary [&>span]:bg-quaternary',
              status === 'online' && 'bg-green-500 [&>span]:bg-green-500'
            )}
          >
            <span className='absolute size-2 animate-ping rounded-full' />
          </div>

          {isOffline ? 'Offline' : 'Online'}
        </div>
      </Link>
    </Tooltip>
  );
}