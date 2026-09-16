import PrivacyPolicyView from './PrivacyPolicyView';

export const metadata = {
  title: 'Privacy Policy | Kensley Aesthetics',
  description: 'Read the Kensley Aesthetics privacy policy — how we collect, use and protect your personal data in accordance with UK GDPR.',
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://kensleyaesthetics.com/privacy-policy' },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyView />;
}
