import TermsView from './TermsView';

export const metadata = {
  title: 'Terms & Conditions | Kensley Aesthetics',
  description: 'Terms and conditions for using the Kensley Aesthetics website and booking aesthetic treatments at our Newcastle clinic.',
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://kensleyaesthetics.com/terms' },
};

export default function TermsPage() {
  return <TermsView />;
}
