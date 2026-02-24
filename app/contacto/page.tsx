import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import Booking from '@/components/Booking';
import Footer from '@/components/Footer';

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Contact />
      <Booking />
      <Footer />
    </div>
  );
}

