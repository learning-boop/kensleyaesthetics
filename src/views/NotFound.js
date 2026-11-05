'use client';
import Link from 'next/link';
import './NotFound.css';

export default function NotFound() {
  return (
    <main className="nf-root">
      <div className="nf-content">
        <span className="nf-code">404</span>
        <div className="nf-divider" />
        <h1 className="nf-title">Page Not Found</h1>
        <p className="nf-body">
          Sorry, the page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className="nf-btn">
          Back to Home
        </Link>
      </div>
    </main>
  );
}
