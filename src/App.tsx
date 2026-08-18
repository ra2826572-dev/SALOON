import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { WinterDeals } from './components/WinterDeals';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Gallery } from './components/Gallery';
import { Reviews } from './components/Reviews';
import { AppointmentSection } from './components/AppointmentSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<string>('');

  const handleOpenBooking = (serviceName?: string) => {
    setSelectedServiceForModal(serviceName || '');
    setIsBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingModalOpen(false);
    setSelectedServiceForModal('');
  };

  const handleExploreServices = () => {
    const servicesEl = document.getElementById('services');
    if (servicesEl) {
      servicesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0b0e] text-white flex flex-col selection:bg-pink-500/30 selection:text-white">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onExploreServices={handleExploreServices}
        />

        {/* 2. About Section */}
        <About onOpenBooking={() => handleOpenBooking()} />

        {/* 3. Services Section */}
        <Services onSelectServiceForBooking={(srv) => handleOpenBooking(srv)} />

        {/* 4. Winter Deals & Packages Section */}
        <WinterDeals onSelectDealForBooking={(deal) => handleOpenBooking(deal)} />

        {/* 5. Why Choose DELAQUA */}
        <WhyChooseUs />

        {/* 6. Portfolio & Masonry Gallery */}
        <Gallery onBookLook={(lookTitle) => handleOpenBooking(lookTitle)} />

        {/* 7. Client Testimonials & Google Reviews */}
        <Reviews />

        {/* 8. Large Appointment CTA Section */}
        <AppointmentSection onOpenBooking={() => handleOpenBooking()} />

        {/* 9. Contact & Booking Form with Google Maps */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Booking Modal */}
      <AppointmentModal
        isOpen={isBookingModalOpen}
        initialService={selectedServiceForModal}
        onClose={handleCloseBooking}
      />

      {/* Floating WhatsApp & Back to Top Actions */}
      <FloatingActions onOpenBooking={() => handleOpenBooking()} />
    </div>
  );
}

