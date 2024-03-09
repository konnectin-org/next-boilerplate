import Link from 'next/link';

import { BaseTemplate } from '@/templates/BaseTemplate';

export default function Layout(props: { children: React.ReactNode }) {

  return (
    <BaseTemplate
      leftNav={
        <>
          <li>
            <Link
              href="/"
              className="border-none text-gray-700 hover:text-gray-900"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about/"
              className="border-none text-gray-700 hover:text-gray-900"
            >
              About
            </Link>
          </li>
        </>
      }
      rightNav={
        <>
          <li>
            <Link
              href="/signin/"
              className="border-none text-gray-700 hover:text-gray-900"
            >
            Sign In
            </Link>
          </li>

          <li>
            <Link
              href="/signup/"
              className="border-none text-gray-700 hover:text-gray-900"
            >
            Signup
            </Link>
          </li>

        </>
      }
    >
      <div className="py-5 text-xl [&_p]:my-6">{props.children}</div>
    </BaseTemplate>
  );
}
