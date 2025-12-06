import { useState } from 'react';
import emailjs from 'emailjs-com';
import { Button } from '../components/Button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Linkedin, FileText } from 'lucide-react';

const SERVICE_ID = 'service_87ykgff';            // your real service id
const CONTACT_TEMPLATE_ID = 'website_lead_template'; // SAME template ID as Work With Me
const PUBLIC_KEY = 'mWBffHcCDl_i2TPKC';       // same public key

export default function AboutContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const templateParams = {
      // shared contact info
      name: formData.name,
      email: formData.email,
      phone: '',

      // general contact–specific
      inquiryType: formData.inquiryType,
      message: formData.message,

      // opportunity-related fields (empty for this form)
      organization: '',
      role: '',
      opportunityTypes: '',
      otherOpportunity: '',
      description: '',
      location: '',
      format: '',
      timeCommitment: '',
      compensation: '',
      timeline: '',
      relevantLinks: '',
      additionalNotes: '',
      confirmation: '',

      formType: 'General Contact',
    };

    emailjs
      .send(SERVICE_ID, CONTACT_TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({
          name: '',
          email: '',
          inquiryType: '',
          message: '',
        });
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        alert('There was an error sending your message. Please try again.');
      });
  };


  const quickSnapshot = [
    'Grade 12 student in West Vancouver',
    'Fluent in English, French, Persian',
    'Founder of PathToSucsess',
    'Volunteer camp leader and karate coach',
    'Organizer of open-gym sessions for younger girls',
    'Poet, artist, and storyteller',
  ];

  return (
    <div>
      {/* About Hanna */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <h1 className="text-gray-900 mb-8">About Hanna</h1>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <ImageWithFallback
                src="/assets/hanna-about.png"
                alt="Hanna Shoari Nejad"
                className="w-full h-auto rounded-lg"
              />
              <p className="text-xs text-gray-500 mt-2 text-center">
                Hanna Shoari Nejad
              </p>
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-gray-700">
                  I've moved between Calgary, Tehran, Toronto, Oakville, Baku, Dubai, and Vancouver. Each
                  city has taught me something different about people, cultures, and myself. I've
                  learned that "home" isn't just a place — it's who I am and what I value.
                </p>
              </div>
              <div>
                <p className="text-gray-700">
                  My grandfather's Parkinson's disease has shown me what quiet strength looks like.
                  Watching him navigate challenges with grace has shaped my understanding that real
                  strength is often invisible. It's sparked my interest in how people cope, adapt,
                  and find meaning — and why I care deeply about the human mind and brain.
                </p>
              </div>
              <div>
                <p className="text-gray-700">
                  I'm interested in studying cognitive science and business because I want to
                  connect how people think and feel to how we design schools, workplaces, and
                  systems. I believe understanding behaviour can help us create environments where
                  everyone feels supported and empowered.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1600178572204-6ac8886aae63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY0NDAxNzI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Photo doing an activity"
              className="w-full h-64 object-cover rounded-lg mb-3"
            />
            <p className="text-xs text-gray-500 text-center">
              [Photo doing an activity – placeholder]
            </p>
          </div>
        </div>
      </section>

      {/* Quick Snapshot */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-gray-900 mb-8">Quick Snapshot</h2>
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <ul className="space-y-3 mb-6">
              {quickSnapshot.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-900 mr-3">•</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors"
              >
                <Linkedin size={18} />
                View LinkedIn Profile
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <FileText size={18} />
                Download Resume (PDF)
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <FileText size={18} />
                Download Resume (Word)
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <FileText size={18} />
                Download Resume (Markdown)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-gray-900 mb-8">General Contact</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
            </div>

            <div>
              <label htmlFor="inquiryType" className="block text-gray-700 mb-2">
                Type of inquiry *
              </label>
              <select
                id="inquiryType"
                name="inquiryType"
                required
                value={formData.inquiryType}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              >
                <option value="">Select type</option>
                <option value="tutoring">Tutoring</option>
                <option value="collaboration">Collaboration</option>
                <option value="work">Work Opportunity</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
            </div>

            <p className="text-sm text-gray-600">
              Because I am under 18, all tutoring and work arrangements are reviewed with a
              parent/guardian before any commitments are made. Please do not include sensitive
              personal information in your message.
            </p>

            <div>
              <Button type="submit" fullWidth>
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
