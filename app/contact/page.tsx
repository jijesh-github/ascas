'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useDoctorForm } from '@/context/DoctorFormContext';
import { Phone, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  const { openForm } = useDoctorForm();

  return (
    <main className="w-full px-6 py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Hero Section */}
        <div className="text-center">
          <div className="inline-block bg-pink-200/30 px-10 py-5 rounded-full shadow-md">
            <span className="text-pink-800 font-bold uppercase tracking-wider text-4xl sm:text-5xl">24/7 Support</span>
          </div>
        </div>
        <div className="text-center space-y-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 max-w-3xl mx-auto leading-tight">
            Take the next step towards parenthood
          </h1>
          <p className="text-xl text-gray-600 max-w-xl mx-auto">
            Don't wait any longer to start your journey to parenthood. Contact us today to schedule a consultation and
            take the first step towards building your family.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Details</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-8 h-8 text-pink-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Emergency Helpline</h3>
                    <a href="tel:+919342521779" className="text-xl text-gray-600 hover:text-pink-700">
                      +91-9342521779
                    </a>
                    <p className="text-sm text-gray-500 mt-1">24/7 Availability</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-8 h-8 text-pink-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Clinic Address</h3>
                    <p className="text-gray-600">
                      24 Chowdhary Nagar Main Road
                      <br />
                      Valasaravakkam, Chennai
                      <br />
                      Tamil Nadu - 600087
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-8 h-8 text-pink-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">OPD Hours</h3>
                    <p className="text-gray-600">
                      Monday - Saturday: 8 AM - 8 PM
                      <br />
                      Sunday: Emergency Only
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button
                className="w-full  font-medium py-2 px-4 rounded-md  bg-pink-900 hover:bg-primary transition text-white cursor-pointer"
                onClick={openForm}>
                1-Click Appointment
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>

            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Full Name</label>
                <Input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Email Address</label>
                <Input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Phone Number</label>
                <Input
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="+91 00000 00000"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Department</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent">
                  <option>Fertility Care</option>
                  <option>Pregnancy Support</option>
                  <option>Surgical Services</option>
                  <option>General Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <Textarea
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="Type your message here..."></Textarea>
              </div>
              <Button className="w-full  font-medium py-2 px-4 rounded-md  transition  bg-pink-900 hover:bg-primary text-white ">
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.3473770435723!2d80.191672315346!3d13.047871216559087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267adcc4b2f7b%3A0x2a9e939e2909bc90!2s24%2C%20Chowdhary%20Nagar%20Main%20Rd%2C%20Valasaravakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600087!5e0!3m2!1sen!2sin!4v1624966504762!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"></iframe>
        </div>
      </div>
    </main>
  );
}
