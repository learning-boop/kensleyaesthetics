import TrainingView from './TrainingView';

export const metadata = {
  title: 'Aesthetics Training Courses Newcastle | Doctor-Led Education | Kensley Aesthetics',
  description: 'Professional aesthetics training courses for medical practitioners in Newcastle. Foundation injectables, dermal fillers, advanced techniques and combination therapies — doctor-led training by Kensley Aesthetics.',
  alternates: { canonical: 'https://kensleyaesthetics.com/training' },
  openGraph: {
    title: 'Aesthetics Training Courses Newcastle | Doctor-Led Education | Kensley Aesthetics',
    description: 'Professional aesthetics training courses for medical practitioners in Newcastle. Foundation injectables, dermal fillers, advanced techniques and combination therapies — doctor-led training by Kensley Aesthetics.',
    url: 'https://kensleyaesthetics.com/training',
    siteName: 'Kensley Aesthetics',
    locale: 'en_GB',
    type: 'website',
    images: ['https://kensleyaesthetics.com/logo512.png'],
  },
};

export default function TrainingPage() {
  return <TrainingView />;
}
