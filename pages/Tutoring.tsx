import { useState } from 'react';
import { Button } from '../components/Button';

export default function Tutoring() {
  const [formData, setFormData] = useState({
    parentFirstName: '',
    parentLastName: '',
    parentEmail: '',
    parentPhone: '',
    studentFirstName: '',
    studentGrade: '',
    school: '',
    sessionType: '',
    platform: '',
    address: '',
    subjects: [] as string[],
    otherSubject: '',
    mainLanguage: '',
    frenchLevel: '',
    otherLanguageNotes: '',
    learningNeeds: '',
    preferredDaysTimes: '',
    startTimeline: '',
    howHeard: '',
    consent: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      if (name === 'subjects') {
        const newSubjects = target.checked
          ? [...formData.subjects, value]
          : formData.subjects.filter((s) => s !== value);
        setFormData({ ...formData, subjects: newSubjects });
      } else {
        setFormData({ ...formData, [name]: target.checked });
      }
    } else if (type === 'radio') {
      setFormData({ ...formData, [name]: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Tutoring form submitted:', formData);
    alert('Thank you! Your inquiry has been submitted. We will be in touch soon.');
  };

  const scrollToForm = () => {
    document.getElementById('tutoring-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const subjects = [
    { id: 'math', label: 'Math (up to Grade 10)', description: 'Algebra, geometry, problem-solving' },
    { id: 'biology', label: 'Science (Biology & Physics)', description: 'Introductory biology and physics concepts' },
    { id: 'french', label: 'French', description: 'Immersion support, homework, reading, writing (attaché)' },
    { id: 'english', label: 'English', description: 'Reading, writing (cursive), structuring ideas' },
    { id: 'study', label: 'Study Skills', description: 'Organization, planning, exam prep' },
    { id: 'confidence', label: 'Confidence & Mindset', description: 'public speaking, storytelling in front of a crowd' },
  ];

  return (
    <div>
      {/* Intro Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <h1 className="text-gray-900 mb-6">Tutoring with Hanna</h1>
          <p className="text-gray-700 text-lg">
            I work with students in Grades 3–10, particularily help with math, biology, physics and french language. My goal is to help them feel capable, supported, and proud of their progress.
          </p>
          
          <p className="text-gray-700 text-lg">
            I can also help them learn about storytelling and conversing in other languages and cultures.
          </p>

          <p className="text-gray-700 text-lg">
            I work on their hand writing skills extensively, if and when asked, in both English (Cursive) and French (Attaché).
          </p>
        </div>
      </section>

      {/* Who I Work With */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-gray-900 mb-8">Who I Work With</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-900 mr-3">•</span>
                  <span className="text-gray-700">Elementary and high school students (approximately ages 7–15)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-900 mr-3">•</span>
                  <span className="text-gray-700">Students who are nervous about tests or feel behind</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-900 mr-3">•</span>
                  <span className="text-gray-700">French immersion students who need help with reading, writing, or speaking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-900 mr-3">•</span>
                  <span className="text-gray-700">Kids who need a kind, patient mentor as well as a tutor</span>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-gray-700">
                Because I've moved between many cities and school systems, I know how hard it can
                be to adjust. I focus on building trust, breaking concepts into simple pieces, and
                turning "I can't do this" into "I get it now."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects & Focus Areas */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-gray-900 mb-8">Subjects & Focus Areas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject) => (
              <div key={subject.id} className="border border-gray-200 p-5 rounded-lg">
                <h3 className="text-gray-900 mb-2">{subject.label}</h3>
                <p className="text-gray-600">{subject.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Session Formats & Pricing */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-gray-900 mb-8">Session Formats & Pricing</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-gray-900 mb-4">Online Sessions</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-700">30 minutes</span>
                  <span className="text-gray-900">$25</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">60 minutes</span>
                  <span className="text-gray-900">$45</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">90 minutes</span>
                  <span className="text-gray-900">$60</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-gray-900 mb-4">In-Person at Your Location (North Shore)</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-700">60 minutes</span>
                  <span className="text-gray-900">$55</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">90 minutes</span>
                  <span className="text-gray-900">$75</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">120 minutes</span>
                  <span className="text-gray-900">$90</span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-gray-600 mt-6 text-center">
            Prices can be adjusted for ongoing weekly sessions or siblings. All logistics are
            handled together with a parent/guardian.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-gray-900 mb-8">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { num: '1', title: 'Send an inquiry', desc: 'Fill out the form below' },
              { num: '2', title: 'Short call or email', desc: 'With a parent/guardian' },
              { num: '3', title: 'First trial session', desc: 'Get to know each other' },
              { num: '4', title: 'Ongoing plan', desc: 'Weekly or bi-weekly sessions' },
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.num}
                </div>
                <h3 className="text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience with Kids */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-gray-900 mb-6">Experience with Kids</h2>
          <p className="text-gray-700 mb-4">
            Over 100 hours as a summer camp leader with kids aged 6–12, three years as a karate
            assistant coach helping students train for belts and competitions, and organizing
            open-gym sessions for Grade 8–9 girls have all helped me learn to lead with patience,
            empathy, and calm.
          </p>
          <p className="text-gray-700">
            These experiences taught me how to stay patient under pressure, to lead with empathy,
            and to create spaces where kids feel seen and supported.
          </p>
          <div className="mt-8 text-center">
            <Button onClick={scrollToForm}>Book a Session</Button>
          </div>
        </div>
      </section>

      {/* Tutoring Intake Form */}
      <section id="tutoring-form" className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-gray-900 mb-8">Tutoring Inquiry Form</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="parentFirstName" className="block text-gray-700 mb-2">
                  Parent/Guardian First Name *
                </label>
                <input
                  type="text"
                  id="parentFirstName"
                  name="parentFirstName"
                  required
                  value={formData.parentFirstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                />
              </div>
              <div>
                <label htmlFor="parentLastName" className="block text-gray-700 mb-2">
                  Parent/Guardian Last Name *
                </label>
                <input
                  type="text"
                  id="parentLastName"
                  name="parentLastName"
                  required
                  value={formData.parentLastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="parentEmail" className="block text-gray-700 mb-2">
                  Parent/Guardian Email *
                </label>
                <input
                  type="email"
                  id="parentEmail"
                  name="parentEmail"
                  required
                  value={formData.parentEmail}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                />
              </div>
              <div>
                <label htmlFor="parentPhone" className="block text-gray-700 mb-2">
                  Parent/Guardian Phone Number *
                </label>
                <input
                  type="tel"
                  id="parentPhone"
                  name="parentPhone"
                  required
                  value={formData.parentPhone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="studentFirstName" className="block text-gray-700 mb-2">
                  Student First Name *
                </label>
                <input
                  type="text"
                  id="studentFirstName"
                  name="studentFirstName"
                  required
                  value={formData.studentFirstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                />
              </div>
              <div>
                <label htmlFor="studentGrade" className="block text-gray-700 mb-2">
                  Student Grade *
                </label>
                <select
                  id="studentGrade"
                  name="studentGrade"
                  required
                  value={formData.studentGrade}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                >
                  <option value="">Select grade</option>
                  {[3, 4, 5, 6, 7, 8, 9, 10].map((grade) => (
                    <option key={grade} value={grade}>
                      Grade {grade}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="school" className="block text-gray-700 mb-2">
                School (optional)
              </label>
              <input
                type="text"
                id="school"
                name="school"
                value={formData.school}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-3">Preferred Session Type *</label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="sessionType"
                    value="online"
                    checked={formData.sessionType === 'online'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <span className="text-gray-700">Online</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="sessionType"
                    value="in-person"
                    checked={formData.sessionType === 'in-person'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <span className="text-gray-700">In-Person (North Shore)</span>
                </label>
              </div>
            </div>

            {formData.sessionType === 'online' && (
              <div>
                <label htmlFor="platform" className="block text-gray-700 mb-2">
                  Preferred platform (Zoom / Google Meet / Other)
                </label>
                <input
                  type="text"
                  id="platform"
                  name="platform"
                  value={formData.platform}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                />
              </div>
            )}

            {formData.sessionType === 'in-person' && (
              <div>
                <label htmlFor="address" className="block text-gray-700 mb-2">
                  Home Address for Sessions
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                />
              </div>
            )}

            <div>
              <label className="block text-gray-700 mb-3">Subjects *</label>
              <div className="space-y-2">
                {['Math', 'Biology', 'Physics', 'French', 'English', 'Study Skills / Organization'].map(
                  (subject) => (
                    <label key={subject} className="flex items-center">
                      <input
                        type="checkbox"
                        name="subjects"
                        value={subject}
                        checked={formData.subjects.includes(subject)}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <span className="text-gray-700">{subject}</span>
                    </label>
                  )
                )}
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="subjects"
                    value="Other"
                    checked={formData.subjects.includes('Other')}
                    onChange={handleChange}
                    className="mr-2 mt-1"
                  />
                  <div className="flex-1">
                    <span className="text-gray-700">Other</span>
                    {formData.subjects.includes('Other') && (
                      <input
                        type="text"
                        name="otherSubject"
                        value={formData.otherSubject}
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
              <label htmlFor="mainLanguage" className="block text-gray-700 mb-2">
                Main language at home
              </label>
              <input
                type="text"
                id="mainLanguage"
                name="mainLanguage"
                value={formData.mainLanguage}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
            </div>

            <div>
              <label htmlFor="frenchLevel" className="block text-gray-700 mb-2">
                French level
              </label>
              <select
                id="frenchLevel"
                name="frenchLevel"
                value={formData.frenchLevel}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              >
                <option value="">Select level</option>
                <option value="immersion">Immersion</option>
                <option value="core">Core</option>
                <option value="beginner">Beginner</option>
              </select>
            </div>

            <div>
              <label htmlFor="otherLanguageNotes" className="block text-gray-700 mb-2">
                Other language notes (optional)
              </label>
              <textarea
                id="otherLanguageNotes"
                name="otherLanguageNotes"
                value={formData.otherLanguageNotes}
                onChange={handleChange}
                rows={2}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
            </div>

            <div>
              <label htmlFor="learningNeeds" className="block text-gray-700 mb-2">
                Learning Needs & Goals *
              </label>
              <p className="text-gray-600 mb-2">
                Please share any details that would help Hanna support your child (challenges,
                strengths, upcoming tests, confidence, etc.)
              </p>
              <textarea
                id="learningNeeds"
                name="learningNeeds"
                required
                value={formData.learningNeeds}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
            </div>

            <div>
              <label htmlFor="preferredDaysTimes" className="block text-gray-700 mb-2">
                Preferred Days & Times
              </label>
              <textarea
                id="preferredDaysTimes"
                name="preferredDaysTimes"
                value={formData.preferredDaysTimes}
                onChange={handleChange}
                rows={2}
                placeholder="e.g., Mondays and Wednesdays after 4pm"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
            </div>

            <div>
              <label htmlFor="startTimeline" className="block text-gray-700 mb-2">
                How soon do you want to start? *
              </label>
              <select
                id="startTimeline"
                name="startTimeline"
                required
                value={formData.startTimeline}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              >
                <option value="">Select timeline</option>
                <option value="asap">As soon as possible</option>
                <option value="2weeks">Within 2 weeks</option>
                <option value="month">Within a month</option>
                <option value="exploring">Just exploring</option>
              </select>
            </div>

            <div>
              <label htmlFor="howHeard" className="block text-gray-700 mb-2">
                How did you hear about Hanna?
              </label>
              <input
                type="text"
                id="howHeard"
                name="howHeard"
                value={formData.howHeard}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
            </div>

            <div>
              <label className="flex items-start">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  required
                  className="mr-3 mt-1"
                />
                <span className="text-gray-700">
                  I confirm I am a parent or legal guardian and want to be involved in all
                  communication and decisions. *
                </span>
              </label>
            </div>

            <div>
              <Button type="submit" fullWidth>
                Send Tutoring Inquiry
              </Button>
            </div>

            <p className="text-sm text-gray-600 text-center">
              Because Hanna is under 18, all tutoring arrangements are discussed and confirmed with
              a parent/guardian before any sessions begin.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
