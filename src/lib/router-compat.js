'use client';

/**
 * Compatibility layer: maps react-router-dom API → Next.js App Router equivalents.
 * This lets all existing components work without individual edits.
 */

import NextLink from 'next/link';
import { useRouter, useParams as useNextParams, usePathname } from 'next/navigation';
import { forwardRef, useCallback } from 'react';

/* ── Link ─────────────────────────────────────────────────── */
const Link = forwardRef(function Link({ to, className, style, onClick, children, ...rest }, ref) {
  return (
    <NextLink href={to} className={className} style={style} onClick={onClick} ref={ref} {...rest}>
      {children}
    </NextLink>
  );
});

/* ── NavLink (simplified — applies className/style based on active state) ── */
const NavLink = forwardRef(function NavLink({ to, className, style, children, end, ...rest }, ref) {
  const pathname = usePathname();
  const isActive = end ? pathname === to : pathname.startsWith(to);

  const resolvedClassName = typeof className === 'function'
    ? className({ isActive })
    : className;

  const resolvedStyle = typeof style === 'function'
    ? style({ isActive })
    : style;

  return (
    <NextLink
      href={to}
      className={resolvedClassName}
      style={resolvedStyle}
      ref={ref}
      {...rest}
    >
      {children}
    </NextLink>
  );
});

/* ── useNavigate ──────────────────────────────────────────── */
function useNavigate() {
  const router = useRouter();
  return useCallback(function navigate(to, options) {
    if (typeof to === 'number') {
      if (to === -1) router.back();
      else if (to === 1) router.forward();
      return;
    }
    if (options?.replace) {
      router.replace(to);
    } else {
      router.push(to);
    }
  }, [router]);
}

/* ── useLocation ──────────────────────────────────────────── */
function useLocation() {
  const pathname = usePathname();
  return { pathname };
}

/* ── useParams ────────────────────────────────────────────── */
function useParams() {
  return useNextParams();
}

/* ── Navigate (redirect component) ────────────────────────── */
function Navigate({ to, replace = true }) {
  const router = useRouter();
  if (typeof window !== 'undefined') {
    if (replace) {
      router.replace(to);
    } else {
      router.push(to);
    }
  }
  return null;
}

export { Link, NavLink, useNavigate, useLocation, useParams, Navigate };
