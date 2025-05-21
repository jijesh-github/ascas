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
      <div className="flex items-center justify-center p-10 bg-gradient-to-br from-purple-900/70 to-pink-900/40">
        <div className="container mx-auto px-4 md:px-6 relative z-10 pt-24">
          <div className={`max-w-3xl transition-opacity duration-700 ease-in opacity-100 translate-y-0`}>
            <h1 className="text-2xl md:text-2xl lg:text-4xl font-bold text-white mb-6 leading-tight">
              Unlock the Miracle of Life with ASCAS Fertility & Maternity Clinic
            </h1>

            <p className="text-lg italic md:text-2xl text-white/90 mb-8 max-w-2xl">
              Your Journey to Parenthood Starts Here
            </p>

            <div className="flex items-center gap-8">
              <div className="flex flex-col gap-4 md:gap-6">
                {/*  <Button
                  size="lg"
                  className="bg-primary text-white hover:bg-white hover:text-primary font-medium px-6 cursor-pointer">
                  Book a Free First Chat
                </Button> */}
                <Button size="lg" className="text-white bg-pink-900 hover:bg-primary font-medium px-6 cursor-pointer">
                  Call Back / Video consulting
                </Button>
                {/*  <Button
                  size="lg"
                  variant="outline"
                  className="bg-primary text-white hover:bg-white hover:text-primary font-medium px-6 cursor-pointer">
                  Meet Our Doctors
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button> */}
              </div>

              <div className="w-full max-w-xl">
                <DoctorAppointmentForm />
              </div>
            </div>

            <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8">
              {[
                { label: 'Success Rate', value: '75%' },
                { label: 'Happy Families', value: '1000+' },
                { label: 'Years of Service', value: '15+' }
              ].map((stat, index) => (
                <div
                  key={index}
                  className={`text-center p-4 rounded-lg bg-white/10 backdrop-blur-sm opacity-0 animate-fade-up delay-${index}`}>
                  {/* <p className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</p> */}
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
