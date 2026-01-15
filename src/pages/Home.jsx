import Hero from '../components/Hero';
import StatusCard from '../components/StatusCard';

function Home() {
  return (
    <main className="flex-grow-1 w-100">
      <div className="w-100 d-flex flex-column justify-content-center px-4 px-lg-5 py-5" style={{ minHeight: 'calc(100vh - 96px)' }}>
        <div className="row align-items-end g-5">
          <div className="col-12 col-lg-8">
            <Hero />
          </div>
          <div className="col-12 col-lg-4">
            <StatusCard />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
