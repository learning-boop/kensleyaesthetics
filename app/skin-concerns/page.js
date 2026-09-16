import SkinConcernsView from './SkinConcernsView';

export const metadata = {
  title: 'Skin Concerns | Find Your Ideal Treatment Newcastle | Kensley Aesthetics',
  description: 'Not sure which treatment is right for you? Explore our skin concerns guide — wrinkles, fine lines, volume loss, sagging skin, under eye bags, dull skin and more. Kensley Aesthetics, Newcastle.',
  alternates: { canonical: 'https://kensleyaesthetics.com/skin-concerns' },
  openGraph: {
    title: 'Skin Concerns | Find Your Ideal Treatment Newcastle | Kensley Aesthetics',
    description: 'Not sure which treatment is right for you? Explore our skin concerns guide — wrinkles, fine lines, volume loss, sagging skin, under eye bags, dull skin and more. Kensley Aesthetics, Newcastle.',
    url: 'https://kensleyaesthetics.com/skin-concerns',
    siteName: 'Kensley Aesthetics',
    locale: 'en_GB',
    type: 'website',
    images: ['https://kensleyaesthetics.com/logo512.png'],
  },
};

export default function SkinConcernsPage() {
  return <SkinConcernsView />;
}
