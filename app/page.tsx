import InlineQuote from '@/components/inline-quote';
import Projects from '@/components/projects';
import Works from '@/components/works';
import Blogs from '@/components/blogs';
import DiscordStatus from '@/components/discord-status';
import { Suspense } from 'react';
import { LuLoader } from 'react-icons/lu';
import Image from 'next/image';
import MeImage from '@/public/me.jpg';

export default function Page() {
  return (
    <div className='mx-auto flex w-full max-w-[600px] flex-col gap-y-24 py-16'>
      <div className='flex w-full items-center justify-between'>
        <div className='flex items-center gap-x-4'>
          <Image
            src={MeImage}
            alt='Gökhan Bulut'
            width={100}
            height={100}
            className='size-12 rounded-full border-2 border-primary object-cover'
            placeholder='blur'
          />

          <div className='flex flex-col'>
            <h1 className='font-bricolageGrotesque font-bold'>
              Gökhan Bulut
            </h1>

            <span className='text-sm text-secondary'>
              Developer
            </span>
          </div>
        </div>

        <DiscordStatus userId='957840712404193290' />
      </div>

      <div className='flex flex-col gap-y-4'>
        <h1 className='font-bricolageGrotesque font-medium text-secondary'>
          Who am I?
        </h1>

        <span className='whitespace-pre-wrap text-sm text-secondary'>
          I’m a 19-year-old high school student and freelancer from Turkey, passionate about software development and always eager to learn. Currently focusing to learn more about <InlineQuote text='TypeScript is a superset of JavaScript that adds static typing to the language. It’s a powerful tool that helps you catch bugs and improve code quality.'>TypeScript</InlineQuote> world.
        </span>

        <h1 className='mt-4 font-bricolageGrotesque font-medium text-secondary'>
          What do I do?
        </h1>

        <span className='whitespace-pre-wrap text-sm text-secondary'>
          I dive into various projects, from building efficient Discord bots to exploring web development with Next.js and React. I’m meticulous about my workflow, always looking for ways to improve my productivity. I’m also a fan of open-source projects and always looking for ways to contribute.
        </span>
      </div>

      <div className='flex flex-col gap-y-4'>
        <h1 className='font-bricolageGrotesque font-medium text-secondary'>
          Projects
        </h1>

        <Projects />
      </div>

      <div className='flex flex-col gap-y-4'>
        <h1 className='font-bricolageGrotesque font-medium text-secondary'>
          Works
        </h1>

        <Works />
      </div>

      <div className='flex flex-col gap-y-4'>
        <h1 className='font-bricolageGrotesque font-medium text-secondary'>
          Blog Posts
        </h1>

        <Suspense
          fallback={
            <div className='flex items-center gap-x-2 text-xs text-tertiary'>
              <LuLoader className='animate-spin' />
              You want coffee or tea while waiting? 🍵☕
            </div>
          }
        >
          <Blogs />
        </Suspense>
      </div>

      <div className='flex flex-col gap-y-4'>
        <h1 className='font-bricolageGrotesque font-medium text-secondary'>
          More
        </h1>

        <div className='text-sm text-secondary'>
          I’m generally active on Instagram and <InlineQuote href='https://github.com/skyhancloud'>GitHub</InlineQuote>. You can contact me via <InlineQuote href='mailto:root@skyhan.cloud'>email</InlineQuote> or DM on <InlineQuote href='https://instagram.com/skyhancloud'>Instagram</InlineQuote>. Also don’t forget to check out my <InlineQuote href='/resume.pdf'>resume</InlineQuote>.
        </div>
      </div>
    </div>
  );
}