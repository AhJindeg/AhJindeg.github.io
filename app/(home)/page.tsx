import Image from 'next/image';
import Link from 'next/link';
import { Github, Mail, Twitter } from 'lucide-react';
import Background from '@/public/bg.png';

const socials = [
  {
    href: 'https://discord.gg/jgY4AKWkpF',
    label: 'Discord',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        role="img"
        fill="currentColor"
        {...props}
      >
        <path d="M20 4a15.25 15.25 0 0 0-3.59-1.1l-.17.34A13.55 13.55 0 0 1 15 4.07a14.7 14.7 0 0 0-6 0l-.24-.49-.17-.34A15.23 15.23 0 0 0 5 4C1.67 8.7 1 13.27 1.28 17.8A15.44 15.44 0 0 0 6.5 20.5l1.4-1.83A9.86 9.86 0 0 1 6 17.5l.5-.38c1.68 1.24 3.33 1.9 4.97 1.9s3.3-.66 4.98-1.9l.5.38a9.86 9.86 0 0 1-1.9 1.17l1.42 1.83a15.44 15.44 0 0 0 5.22-2.7C23 13.35 22.2 8.78 20 4Zm-10.6 10c-.8 0-1.46-.76-1.46-1.7s.64-1.7 1.46-1.7S10.9 10.37 10.9 11.3s-.64 1.7-1.5 1.7Zm5.2 0c-.82 0-1.46-.76-1.46-1.7s.64-1.7 1.46-1.7 1.5.77 1.5 1.7-.67 1.7-1.5 1.7Z" />
      </svg>
    ),
  },
  { href: 'https://github.com/AhJindeg', icon: Github, label: 'Github' },
  { href: 'https://x.com/AhJindeg', icon: Twitter, label: 'Twitter' },
  { href: 'mailto:ahjindeg@gmail.com', icon: Mail, label: 'Email' },
];

export default function HomePage() {
  return (
    <div className="relative flex min-h-[80vh] flex-1 items-center justify-center overflow-hidden">
      {/* 背景与遮罩，保证文字可读性 */}
      <Image
        src={Background}
        alt="Background"
        fill
        priority
        placeholder="blur"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/30 to-black/10" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 py-16 text-center">
        <h1 className="text-4xl font-bold text-transparent drop-shadow-md sm:text-5xl md:text-7xl bg-linear-to-r from-[#DCB67A] to-rose-500 bg-clip-text tracking-wider">
          Arthur AJ. W.
        </h1>

        <p className="text-1rem text-slate-100  leading-relaxed">
          人生必有痴，而后有成。痴各不同，各行其是，皆无不可。
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          {socials.map(({ href, icon: Icon, label }) => (
            <Link
              key={label}
              href={href}
              aria-label={label}
              className="group inline-flex h-8 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition duration-150 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/20"
            >
              <Icon className="h-4 w-4 transition duration-150 group-hover:scale-110" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
