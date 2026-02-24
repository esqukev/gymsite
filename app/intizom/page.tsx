import Navbar from '@/components/Navbar';
import Intizom from '@/components/Intizom';
import Footer from '@/components/Footer';

export default function IntizomPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Intizom />
      <Footer />
    </div>
  );
}

