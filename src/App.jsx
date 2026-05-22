import { Helmet, HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Works from './components/Works';
import Showroom from './components/Showroom';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Prajwal AR",
    "jobTitle": "Digital Marketing Consultant",
    "image": "https://prajwalar.com/prajwal-ar.jpeg",
    "url": "https://prajwalar.com",
    "sameAs": [
      "https://www.linkedin.com/in/prajwal-ar390/",
      "https://instagram.com/_iamprajwal._"
    ]
  };

  return (
    <HelmetProvider>
      <main className="min-h-screen bg-background relative selection:bg-white/20 selection:text-white">
        <Helmet>
          <title>Prajwal AR | Elite Digital Marketing & Growth Consultant</title>
          <meta name="description" content="Official portfolio of Prajwal AR. Discover how I scale e-commerce brands past $1M/ARR using data-driven performance marketing and high-ticket funnels." />
          <meta name="keywords" content="Prajwal AR, Prajwal AR digital marketing, Prajwal AR portfolio, performance marketer, growth consultant" />
          
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://prajwalar.com/" />
          <meta property="og:title" content="Prajwal AR | Elite Digital Marketing & Growth Consultant" />
          <meta property="og:description" content="Official portfolio of Prajwal AR. Discover how I scale e-commerce brands past $1M/ARR using data-driven performance marketing and high-ticket funnels." />
          <meta property="og:image" content="/prajwal-ar.PNG" />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://prajwalar.com/" />
          <meta property="twitter:title" content="Prajwal AR | Elite Digital Marketing & Growth Consultant" />
          <meta property="twitter:description" content="Official portfolio of Prajwal AR. Discover how I scale e-commerce brands past $1M/ARR using data-driven performance marketing and high-ticket funnels." />
          <meta property="twitter:image" content="/prajwal-ar.PNG" />

          <script type="application/ld+json">
            {JSON.stringify(schemaData)}
          </script>
        </Helmet>
        
        {/* Background Grid */}
      <div className="fixed inset-0 bg-grid z-0"></div>
      
      {/* Subtle Glow Effects */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-white/[0.03] rounded-full blur-[120px] pointer-events-none z-0"></div>
      
      <Navbar />
      
      <div className="relative z-10">
        <Hero />
        <SocialProof />
        <Works />
        <Showroom />
        <Services />
        <Testimonials />
        <Contact />
      </div>
      
      {/* Spacer for scrolling presentation */}
      <div className="h-[50vh]"></div>
    </main>
    </HelmetProvider>
  );
}

export default App;
