import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4">
      <nav>
        <ul className="flex gap-4">
          <li><Link href="/"><a>Home</a></Link></li>
          <li><Link href="/about"><a>About Us</a></Link></li>
          {/* Conditionally render Login/Logout based on authentication status */}
          <li><Link href="/login"><a>Login</a></Link></li>
          <li><Link href="/logout"><a>Logout</a></Link></li>
        </ul>
      </nav>
    </header>
  );
};

export { Header };