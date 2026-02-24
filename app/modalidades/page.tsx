import Navbar from '@/components/Navbar';
import Modalities from '@/components/Modalities';
import Footer from '@/components/Footer';

export default function ModalidadesPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Modalities />
      <Footer />
    </div>
  );
}

