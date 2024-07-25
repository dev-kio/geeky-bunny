import Hero from './components/Hero';
import FeaturesCarousel from './components/FeaturesCarousel';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 text-baseZero">
      <Hero />
      <FeaturesCarousel />
    </div>
  );
}
