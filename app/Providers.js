'use client';

import { TreatmentsProvider } from '@/src/context/TreatmentsContext';
import { AppointmentProvider } from '@/src/context/AppointmentContext';
import AppointmentDrawer from '@/src/components/AppointmentDrawer';
import Header from '@/src/components/Header';
import Footer from '@/src/components/Footer';
import ChatWidget from '@/src/components/ChatWidget';
import ScrollToTop from '@/src/components/ScrollToTop';

export default function Providers({ children }) {
  return (
    <TreatmentsProvider>
      <AppointmentProvider>
        <AppointmentDrawer />
        <ScrollToTop />
        <Header />
        <main>{children}</main>
        <Footer />
        <ChatWidget />
      </AppointmentProvider>
    </TreatmentsProvider>
  );
}
