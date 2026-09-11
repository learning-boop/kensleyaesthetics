/**
 * Runtime email assembly — defeats simple scrapers that harvest
 * plaintext `mailto:` links and visible email addresses from HTML source.
 *
 * Usage:
 *   import { EmailLink } from '../utils/obfuscateEmail';
 *   <EmailLink user="hello" domain="kensleyaesthetics.com" className="my-link" />
 *
 *   import { emailHref, emailText } from '../utils/obfuscateEmail';
 *   emailHref('hello', 'kensleyaesthetics.com')  // "mailto:hello@kensleyaesthetics.com"
 */

export function emailText(user, domain) {
  return `${user}\u0040${domain}`;
}

export function emailHref(user, domain) {
  return `mailto:${user}\u0040${domain}`;
}

export function EmailLink({ user, domain, className, children }) {
  const addr = emailText(user, domain);
  return (
    <a href={emailHref(user, domain)} className={className}>
      {children || addr}
    </a>
  );
}
