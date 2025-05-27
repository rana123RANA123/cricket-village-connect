
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">
              Get in 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600"> Touch</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              Have questions, suggestions, or need support? We'd love to hear from you. 
              Our team is here to help your cricket community thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Send us a Message</h2>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-slate-700">First Name</Label>
                        <Input id="firstName" placeholder="Your first name" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-slate-700">Last Name</Label>
                        <Input id="lastName" placeholder="Your last name" className="mt-1" />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-slate-700">Email Address</Label>
                      <Input id="email" type="email" placeholder="your@email.com" className="mt-1" />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone" className="text-slate-700">Phone Number (Optional)</Label>
                      <Input id="phone" type="tel" placeholder="+91 98765 43210" className="mt-1" />
                    </div>
                    
                    <div>
                      <Label htmlFor="village" className="text-slate-700">Village/City</Label>
                      <Input id="village" placeholder="Your village or city name" className="mt-1" />
                    </div>
                    
                    <div>
                      <Label htmlFor="subject" className="text-slate-700">Subject</Label>
                      <select 
                        id="subject" 
                        className="mt-1 w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      >
                        <option value="">Select a topic</option>
                        <option value="general">General Inquiry</option>
                        <option value="support">Technical Support</option>
                        <option value="admin">Admin/Village Registration</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="feedback">Feedback & Suggestions</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <Label htmlFor="message" className="text-slate-700">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us how we can help you..." 
                        rows={5}
                        className="mt-1"
                      />
                    </div>
                    
                    <Button className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white py-3 text-lg">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white">
                        📧
                      </div>
                      <span>Email Support</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-2">For general inquiries and support</p>
                    <p className="text-green-600 font-semibold">support@cricketvillage.com</p>
                    <p className="text-slate-500 text-sm mt-2">Response time: Within 24 hours</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white">
                        🏢
                      </div>
                      <span>Business Inquiries</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-2">Partnerships and business opportunities</p>
                    <p className="text-blue-600 font-semibold">business@cricketvillage.com</p>
                    <p className="text-slate-500 text-sm mt-2">Response time: Within 48 hours</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white">
                        📱
                      </div>
                      <span>Technical Support</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-2">App issues and technical problems</p>
                    <p className="text-purple-600 font-semibold">tech@cricketvillage.com</p>
                    <p className="text-slate-500 text-sm mt-2">Response time: Within 12 hours</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center text-white">
                        🏏
                      </div>
                      <span>Village Registration</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-2">Admin verification and village setup</p>
                    <p className="text-yellow-600 font-semibold">admin@cricketvillage.com</p>
                    <p className="text-slate-500 text-sm mt-2">Response time: Within 24 hours</p>
                  </CardContent>
                </Card>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors cursor-pointer">
                    <span className="font-bold">f</span>
                  </div>
                  <div className="w-12 h-12 bg-blue-400 rounded-lg flex items-center justify-center text-white hover:bg-blue-500 transition-colors cursor-pointer">
                    <span className="font-bold">t</span>
                  </div>
                  <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center text-white hover:bg-pink-700 transition-colors cursor-pointer">
                    <span className="font-bold">ig</span>
                  </div>
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-white hover:bg-red-700 transition-colors cursor-pointer">
                    <span className="font-bold">yt</span>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="mt-8 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Support Hours</h3>
                <div className="space-y-2 text-slate-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-semibold">9:00 AM - 6:00 PM IST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold">10:00 AM - 4:00 PM IST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                </div>
                <p className="text-sm text-slate-500 mt-4">
                  For urgent technical issues, email us anytime. We'll respond as soon as possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Coverage Area</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Cricket Village is expanding across India, connecting cricket communities from villages to cities.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-8 text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-green-600 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl">
              🗺️
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Currently Serving 500+ Villages</h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              From Punjab to Tamil Nadu, Gujarat to West Bengal - our cricket community spans across the country. 
              Join us in building the largest village cricket network in India.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">120+</div>
                <div className="text-sm text-slate-600">North India</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">150+</div>
                <div className="text-sm text-slate-600">West India</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">130+</div>
                <div className="text-sm text-slate-600">South India</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600">100+</div>
                <div className="text-sm text-slate-600">East India</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
