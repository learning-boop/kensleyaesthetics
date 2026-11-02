import TrainingView from './TrainingView';

export const metadata = {
  title: 'Aesthetics Training Courses | Kensley Aesthetics Newcastle',
  description: 'Aesthetics training for medical practitioners in Newcastle, from foundation injectables to advanced techniques, delivered at Kensley Aesthetics in Jesmond.',
  alternates: { canonical: 'https://kensleyaesthetics.com/training' },
  openGraph: {
    title: 'Aesthetics Training Courses | Kensley Aesthetics Newcastle',
    description: 'Aesthetics training for medical practitioners in Newcastle, from foundation injectables to advanced techniques, delivered at Kensley Aesthetics in Jesmond.',
    url: 'https://kensleyaesthetics.com/training',
    siteName: 'Kensley Aesthetics',
    locale: 'en_GB',
    type: 'website',
    images: ['https://kensleyaesthetics.com/og/kensley-aesthetics-share.jpg'],
  },
};

export default function TrainingPage() {
  return <TrainingView />;
}
