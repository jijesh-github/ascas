'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useDoctorForm } from '@/context/DoctorFormContext';
import { branches, primaryBranch } from '@/utils/utils';
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
                    <a href={`tel:${primaryBranch.tel}`} className="text-xl text-gray-600 hover:text-pink-700">
                      {primaryBranch.phone}
                    </a>
                    <p className="text-sm text-gray-500 mt-1">24/7 Availability</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-8 h-8 text-pink-600 mt-1" />
                  <div className="space-y-5">
                    <h3 className="text-lg font-semibold text-gray-900">Clinic Branches</h3>
                    {branches.map(branch => (
                      <div key={branch.id} className="border-l-2 border-pink-100 pl-4">
                        <h4 className="font-semibold text-gray-900">{branch.clinicName}</h4>
                        <p className="text-gray-600">
                          {branch.addressLines.map(line => (
                            <span key={line}>
                              {line}
                              <br />
                            </span>
                          ))}
                        </p>
                        <a href={`tel:${branch.tel}`} className="mt-1 inline-block text-sm text-pink-700 hover:underline">
                          {branch.phone}
                        </a>
                        <div className="mt-2 text-sm text-gray-500">
                          {branch.hours.map(line => (
                            <span key={line}>
                              {line}
                              <br />
                            </span>
                          ))}
                        </div>
                        <br />
                        <a
                          href={branch.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-600 hover:underline">
                          View Location on Google Maps
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-8 h-8 text-pink-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">OPD Hours</h3>
                    <div className="space-y-2 text-gray-600">
                      {branches.map(branch => (
                        <p key={branch.id}>
                          <span className="font-medium text-gray-800">{branch.clinicName}:</span>
                          <br />
                          {branch.hours.map(line => (
                            <span key={line}>
                              {line}
                              <br />
                            </span>
                          ))}
                        </p>
                      ))}
                    </div>
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
//
        {/* Map Section */}
        <div className="grid gap-6 md:grid-cols-2">
          {branches.map(branch => (
            <div key={branch.id} className="overflow-hidden rounded-2xl bg-white shadow-xl">
              <div className="p-5">
                <h2 className="text-xl font-bold text-gray-900">{branch.clinicName}</h2>
                <p className="mt-1 text-sm text-gray-600">{branch.address}</p>
              </div>
              {branch.embedMapUrl ? (
                <div className="relative h-[360px]">
                  <iframe
                    title={`${branch.name} branch map`}
                    src={branch.embedMapUrl}
                    width="100%"
                    height="100%"
                    className="h-full w-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
              ) : (
                <div className="flex h-[360px] items-center justify-center bg-pink-50 px-6 text-center">
                  <a
                    href={branch.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-pink-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-primary">
                    View {branch.name} on Google Maps
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
