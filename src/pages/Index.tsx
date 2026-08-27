import { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube, MessageCircle, Camera, Video, Music, Calendar, Image } from 'lucide-react';

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">
            <span className="text-primary">MOSES</span>
            <span className="text-secondary"> N-AIM</span>
            <span className="text-primary"> MEDIA</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition">About</button>
            <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition">Services</button>
            <button onClick={() => scrollToSection('gallery')} className="text-foreground hover:text-primary transition">Gallery</button>
            <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition">Contact</button>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition flex items-center gap-2">
              <MessageCircle size={18} /> WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-border">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <button onClick={() => scrollToSection('home')} className="text-left text-foreground hover:text-primary transition">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-left text-foreground hover:text-primary transition">About</button>
              <button onClick={() => scrollToSection('services')} className="text-left text-foreground hover:text-primary transition">Services</button>
              <button onClick={() => scrollToSection('gallery')} className="text-left text-foreground hover:text-primary transition">Gallery</button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-foreground hover:text-primary transition">Contact</button>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition flex items-center gap-2 w-fit">
                <MessageCircle size={18} /> WhatsApp
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">MOSES N-AIM MEDIA</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">Professional Photography, Videography & Media Production</p>
          <p className="text-lg md:text-xl mb-12 opacity-80">Capturing Moments, Creating Memories, Telling Your Story</p>
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition transform hover:scale-105"
          >
            Get Started
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">About Us</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-primary to-secondary rounded-lg h-96 flex items-center justify-center text-white text-6xl">
              <Camera size={150} />
            </div>
            <div>
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                Welcome to Moses N-AIM Media, your premier destination for professional media production and creative storytelling. With over a decade of experience, we specialize in capturing the essence of your most important moments.
              </p>
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                Our dedicated team of photographers, videographers, and producers are committed to delivering exceptional quality and creative excellence in every project we undertake.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                From corporate events to intimate celebrations, we bring professional expertise and artistic vision to every frame.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Photography */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition border-t-4 border-primary">
              <Camera className="text-primary mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-4 text-secondary">Photography</h3>
              <p className="text-foreground mb-4">Professional photography services including portraits, product photography, and special event coverage with high-quality equipment and artistic vision.</p>
              <ul className="text-foreground space-y-2 text-sm">
                <li>✓ Portrait Sessions</li>
                <li>✓ Product Photography</li>
                <li>✓ Event Coverage</li>
              </ul>
            </div>

            {/* Videography */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition border-t-4 border-primary">
              <Video className="text-primary mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-4 text-secondary">Videography</h3>
              <p className="text-foreground mb-4">Cinematic video production for weddings, corporate events, commercials, and promotional content with professional editing and color grading.</p>
              <ul className="text-foreground space-y-2 text-sm">
                <li>✓ Corporate Videos</li>
                <li>✓ Wedding Films</li>
                <li>✓ Commercials</li>
              </ul>
            </div>

            {/* Music & Media Production */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition border-t-4 border-primary">
              <Music className="text-primary mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-4 text-secondary">Music & Media</h3>
              <p className="text-foreground mb-4">Complete music production and audio engineering services including recording, mixing, and mastering for professional quality sound.</p>
              <ul className="text-foreground space-y-2 text-sm">
                <li>✓ Recording Studio</li>
                <li>✓ Audio Mixing</li>
                <li>✓ Sound Design</li>
              </ul>
            </div>

            {/* Events Coverage */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition border-t-4 border-primary">
              <Calendar className="text-primary mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-4 text-secondary">Events Coverage</h3>
              <p className="text-foreground mb-4">Comprehensive event coverage with multi-camera setups, live streaming capabilities, and professional post-production editing.</p>
              <ul className="text-foreground space-y-2 text-sm">
                <li>✓ Live Events</li>
                <li>✓ Conferences</li>
                <li>✓ Live Streaming</li>
              </ul>
            </div>

            {/* Gallery & Editing */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition border-t-4 border-primary">
              <Image className="text-primary mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-4 text-secondary">Gallery & Editing</h3>
              <p className="text-foreground mb-4">Professional post-production services including photo editing, color correction, and gallery creation with online delivery.</p>
              <ul className="text-foreground space-y-2 text-sm">
                <li>✓ Photo Editing</li>
                <li>✓ Color Grading</li>
                <li>✓ Online Gallery</li>
              </ul>
            </div>

            {/* Consulting */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition border-t-4 border-primary">
              <MessageCircle className="text-primary mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-4 text-secondary">Consulting</h3>
              <p className="text-foreground mb-4">Expert consultation on media production, equipment selection, and creative strategy to maximize your project's impact.</p>
              <ul className="text-foreground space-y-2 text-sm">
                <li>✓ Creative Strategy</li>
                <li>✓ Equipment Advice</li>
                <li>✓ Project Planning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Gallery</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="relative h-64 bg-gradient-to-br from-primary to-secondary rounded-lg overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Image size={48} className="mx-auto mb-2 opacity-50" />
                    <p className="text-sm opacity-50">Gallery Item {i}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-foreground mb-6">View our complete portfolio of professional work</p>
            <button className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition">
              View Full Gallery
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Phone className="text-primary mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-lg text-secondary mb-2">Phone</h3>
                  <p className="text-foreground">+1 (555) 123-4567</p>
                  <p className="text-foreground">+1 (555) 987-6543</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="text-primary mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-lg text-secondary mb-2">Email</h3>
                  <p className="text-foreground">info@mosesnaimmedia.com</p>
                  <p className="text-foreground">bookings@mosesnaimmedia.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="text-primary mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-lg text-secondary mb-2">Location</h3>
                  <p className="text-foreground">123 Creative Street</p>
                  <p className="text-foreground">New York, NY 10001</p>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="font-bold text-lg text-secondary mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="bg-primary text-white p-3 rounded-full hover:bg-blue-700 transition" title="Facebook">
                    <Facebook size={24} />
                  </a>
                  <a href="#" className="bg-primary text-white p-3 rounded-full hover:bg-blue-700 transition" title="Instagram">
                    <Instagram size={24} />
                  </a>
                  <a href="#" className="bg-primary text-white p-3 rounded-full hover:bg-blue-700 transition" title="LinkedIn">
                    <Linkedin size={24} />
                  </a>
                  <a href="#" className="bg-primary text-white p-3 rounded-full hover:bg-blue-700 transition" title="YouTube">
                    <Youtube size={24} />
                  </a>
                  <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition" title="WhatsApp">
                    <MessageCircle size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <form className="space-y-6">
                <div>
                  <label className="block text-foreground font-semibold mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-foreground font-semibold mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-foreground font-semibold mb-2">Service</label>
                  <select className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>Select a service</option>
                    <option>Photography</option>
                    <option>Videography</option>
                    <option>Music & Media</option>
                    <option>Events Coverage</option>
                  </select>
                </div>
                <div>
                  <label className="block text-foreground font-semibold mb-2">Message</label>
                  <textarea className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" rows={4} placeholder="Tell us about your project..."></textarea>
                </div>
                <button type="submit" className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">&copy; 2024 MOSES N-AIM MEDIA. All rights reserved.</p>
          <p className="text-sm opacity-80">Professional Media Production & Creative Services</p>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/1234567890" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition transform hover:scale-110 z-40"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
}
