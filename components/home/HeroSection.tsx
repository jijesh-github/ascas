import { Button } from '@/components/ui/button';
import DoctorAppointmentForm from '../booking/DoctorAppointmentForm';
import CountUp from './CountUp';

const HeroSection = () => {
  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left Image with Gradient */}
      <div
        className="relative bg-cover bg-center hidden md:block"
        style={{ backgroundImage: "url('/images/banner/banner.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/40" />
      </div>

      {/* Right Content with Gradient Background */}
      <div className="flex items-center justify-center p-6 md:p-10 bg-gradient-to-br from-purple-900/70 to-pink-900/40">
        <div className="container mx-auto px-4 md:px-6 pt-24 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
              Unlock the Miracle of Life with Accumed Speciality Clinic and Scans
            </h1>

            <p className="text-lg italic md:text-2xl text-white/90 mb-8 max-w-2xl">
              Your Journey to Parenthood Starts Here
            </p>

            {/* Stack on small screens, row on medium and up */}
            <div className="flex flex-col lg:flex-row items-center md:items-center gap-8">
              <div className="flex flex-col gap-4 md:gap-6 w-full md:w-auto">
                <Button
                  size="lg"
                  className="text-white bg-primary hover:bg-primary-hover font-medium px-6 cursor-pointer w-full md:w-auto">
                  Call Back
                </Button>
                <Button
                  size="lg"
                  className="text-white bg-primary hover:bg-primary-hover font-medium px-6 cursor-pointer w-full md:w-auto">
                  Booking for Video consulting
                </Button>
              </div>

              <div className="w-full max-w-xl">
                <DoctorAppointmentForm />
              </div>
            </div>

            <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
              {[
                { label: 'Successful IVF Cycles', value: '1000+' },
                { label: 'Successful IUI Cycles', value: '5000+' },
                { label: 'Successful Laparoscopic Surgeries', value: '2000+' },
                { label: 'Successful Natural Cycles', value: '1000+' }
              ].map((stat, index) => (
                <div key={index} className={`text-center p-4 rounded-lg bg-white/10 backdrop-blur-sm animate-fade-up`}>
                  <p className="text-3xl md:text-4xl font-bold text-white mb-1">
                    {stat.value.includes('+') || stat.value.includes('%') ? (
                      <CountUp
                        end={parseInt(stat.value.replace(/\D/g, ''))}
                        suffix={stat.value.match(/[+%]/)?.[0] || ''}
                      />
                    ) : (
                      <CountUp end={parseInt(stat.value)} />
                    )}
                  </p>
                  <p className="text-sm text-white/80">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
