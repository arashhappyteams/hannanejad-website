import { useState } from 'react';
import { Button } from '../components/Button';

export default function WorkWithMe() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    role: '',
    email: '',
    phone: '',
    opportunityTypes: [] as string[],
    otherOpportunity: '',
    description: '',
    location: '',
    format: '',
    timeCommitment: '',
    compensation: '',
    timeline: '',
    relevantLinks: '',
    additionalNotes: '',
    confirmation: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      if (name === 'opportunityTypes') {
        const newTypes = target.checked
          ? [...formData.opportunityTypes, value]
          : formData.opportunityTypes.filter((t) => t !== value);
        setFormData({ ...formData, opportunityTypes: newTypes });
      } else {
        setFormData({ ...formData, [name]: target.checked });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Work with me form submitted:', formData);
    alert('Thank you! Your opportunity has been submitted. We will review it with a parent/guardian.');
  };

  const scrollToForm = () => {
    document.getElementById('work-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const opportunities = [
    'Tutoring & mentoring collaborations',
    'Youth-focused projects and workshops',
    'Educational content creation (writing, short videos, ideas)',
    'Creative campaigns or branding aimed at teens',
    'Assistant roles for marketing or community projects',
    'Professional, age-appropriate modelling or ambassador roles',
    'Volunteer or entry-level roles related to psychology, cognitive science, education, or business',
  ];

  const strengths = [
    'Strong communicator (English, French, Persian)',
    'Comfortable working with kids and parents',
    'Responsible and organized',
    'Creative and reflective writer',
    'Visual artist',
    'Resilient and adaptive',
    'Fast learner and coachable',
  ];

  return (
    <div>
      {/* Intro Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <h1 className="text-gray-900 mb-6">Work With Me</h1>
          <p className="text-gray-700 text-lg">
            I'm always eager to learn, contribute, and collaborate. I bring resilience from moving
            across countries, empathy from my family's stories, and leadership from working with
            kids and peers.
          </p>
          <div className="mt-6 text-center">
            <Button onClick={scrollToForm}>Share an Opportunity</Button>
          </div>
        </div>
      </section>

      {/* What I'm Open To */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-gray-900 mb-8">What I'm Open To</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {opportunities.map((item, index) => (
              <div key={index} className="bg-white p-5 rounded-lg border border-gray-200">
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
            <div className="bg-white p-5 rounded-lg border border-gray-200">
              <p className="text-gray-700">Non-profit and community work to make the North Shore a better place for children</p>
            </div>
          </div>
        </div>
      </section>

      {/* Strengths I Bring */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-gray-900 mb-8">Strengths I Bring</h2>
          <div className="flex flex-wrap gap-3">
            {strengths.map((strength, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-blue-50 text-blue-900 rounded-full border border-blue-200"
              >
                {strength}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* My Story in Brief */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-gray-900 mb-6">My Story in Brief</h2>
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <p className="text-gray-700 mb-4">
              Moving between many cities — Calgary, Tehran, Toronto, Oakville, Baku, Dubai, and Vancouver
              — taught me adaptability and resilience. I've learned to adjust quickly, connect with
              new people, and stay grounded in what matters.
            </p>
            <p className="text-gray-700 mb-4">
              My grandfather's Parkinson's disease has shown me quiet strength and sparked my
              interest in the brain and mind. Watching his resilience has shaped how I think about
              human behaviour, coping, and support.
            </p>
            <p className="text-gray-700">
              I want to keep learning, contributing, and building projects that make others feel
              supported, seen, and inspired.
            </p>
          </div>

        </div>
      </section>

      {/* Work With Me Form */}
      <section id="work-form" className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-gray-900 mb-8">Collaboration & Opportunities Form</h2>
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

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="organization" className="block text-gray-700 mb-2">
                  Organization / Company (optional)
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                />
              </div>
              <div>
                <label htmlFor="role" className="block text-gray-700 mb-2">
                  Role / Position (optional)
                </label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
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
                <label htmlFor="phone" className="block text-gray-700 mb-2">
                  Phone Number (optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-3">Type of Opportunity *</label>
              <div className="space-y-2">
                {[
                  'Tutoring collaboration',
                  'Youth project / workshop',
                  'Marketing / branding / content',
                  'Modelling / ambassador role',
                  'Research / psychology / cognitive science',
                  'Volunteer / internship',
                ].map((type) => (
                  <label key={type} className="flex items-center">
                    <input
                      type="checkbox"
                      name="opportunityTypes"
                      value={type}
                      checked={formData.opportunityTypes.includes(type)}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <span className="text-gray-700">{type}</span>
                  </label>
                ))}
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="opportunityTypes"
                    value="Other"
                    checked={formData.opportunityTypes.includes('Other')}
                    onChange={handleChange}
                    className="mr-2 mt-1"
                  />
                  <div className="flex-1">
                    <span className="text-gray-700">Other</span>
                    {formData.opportunityTypes.includes('Other') && (
                      <input
                        type="text"
                        name="otherOpportunity"
                        value={formData.otherOpportunity}
                        onChange={handleChange}
                        placeholder="Please specify"
                        className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                      />
                    )}
                  </div>
                </label>
              </div>
            </div>

            <div>
              <label htmlFor="description" className="block text-gray-700 mb-2">
                Brief Description *
              </label>
              <textarea
                id="description"
                name="description"
                required
                value={formData.description}
                onChange={handleChange}
                rows={4}
                placeholder="Please describe the opportunity, project, or role"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="location" className="block text-gray-700 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="e.g., Vancouver, BC or Remote"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                />
              </div>
              <div>
                <label htmlFor="format" className="block text-gray-700 mb-2">
                  Format
                </label>
                <select
                  id="format"
                  name="format"
                  value={formData.format}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                >
                  <option value="">Select format</option>
                  <option value="online">Online</option>
                  <option value="in-person">In-person (North Shore)</option>
                  <option value="hybrid">Hybrid</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="timeCommitment" className="block text-gray-700 mb-2">
                Estimated Time Commitment
              </label>
              <input
                type="text"
                id="timeCommitment"
                name="timeCommitment"
                value={formData.timeCommitment}
                onChange={handleChange}
                placeholder="e.g., 2 hours/week for 3 months"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
            </div>

            <div>
              <label htmlFor="compensation" className="block text-gray-700 mb-2">
                Compensation or Honorarium (optional)
              </label>
              <input
                type="text"
                id="compensation"
                name="compensation"
                value={formData.compensation}
                onChange={handleChange}
                placeholder="e.g., Paid, Volunteer, Stipend, etc."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
            </div>

            <div>
              <label htmlFor="timeline" className="block text-gray-700 mb-2">
                Timeline
              </label>
              <input
                type="text"
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                placeholder="e.g., Starting January 2025"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
            </div>

            <div>
              <label htmlFor="relevantLinks" className="block text-gray-700 mb-2">
                Relevant Links (optional)
              </label>
              <textarea
                id="relevantLinks"
                name="relevantLinks"
                value={formData.relevantLinks}
                onChange={handleChange}
                rows={2}
                placeholder="Website, social media, portfolio, etc."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
            </div>

            <div>
              <label htmlFor="additionalNotes" className="block text-gray-700 mb-2">
                Additional Notes
              </label>
              <textarea
                id="additionalNotes"
                name="additionalNotes"
                value={formData.additionalNotes}
                onChange={handleChange}
                rows={3}
                placeholder="Any other details you'd like to share"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
            </div>

            <div>
              <label className="flex items-start">
                <input
                  type="checkbox"
                  name="confirmation"
                  checked={formData.confirmation}
                  onChange={handleChange}
                  required
                  className="mr-3 mt-1"
                />
                <span className="text-gray-700">
                  I understand all opportunities are reviewed with a parent/guardian before any
                  commitments are made. *
                </span>
              </label>
            </div>

            <div>
              <Button type="submit" fullWidth>
                Send Opportunity Details
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
