import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="nav">
      <div className="logo">
        <Link href="/">
          <h1>Timo Krug</h1>
        </Link>
      </div>
      <div className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/publications">Publications</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/resume">Resume</Link>
        <Link href="/projects">Projects</Link>
      </div>
    </nav>
  );
}