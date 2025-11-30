import { Button } from '../components/Button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Linkedin, FileText } from 'lucide-react';

export default function Portfolio() {
  const leadership = [
    {
      title: 'Summer Camp Leader',
      description:
        'Over 100 volunteer hours at West Vancouver Rec Centre with kids 6–12, leading activities, managing groups, and creating safe, fun environments.',
    },
    {
      title: 'Karate Assistant Coach',
      description:
        'Three years assisting classes and helping students prepare for belt exams and competitions. Learned to stay calm, break down techniques, and support different learning styles.',
    },
    {
      title: 'Founder – Path To Success',
      description:
        'Tutoring business using her French immersion experience to support younger students with reading, writing, and confidence.',
    },
    {
      title: 'Open-Gym Organizer',
      description:
        'Weekly sessions for Grade 8–9 girls to create a safer, friendlier space at school where everyone could participate without pressure.',
    },
  ];

  return (
    <div>
      {/* Intro Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <h1 className="text-gray-900 mb-6">Portfolio</h1>
          <p className="text-gray-700 text-lg">
            Here is a glimpse into my academic work, creative projects, and community involvement.
            Each piece reflects a part of my journey across different cities, cultures, and
            challenges.
          </p>
        </div>
      </section>

      {/* Academic Highlights */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-gray-900 mb-8">Academic Highlights</h2>
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-blue-900 mr-3">•</span>
                <span className="text-gray-700">Grade 12 student in West Vancouver</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-900 mr-3">•</span>
                <span className="text-gray-700">Strong averages in math, science, and French immersion</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-900 mr-3">•</span>
                <span className="text-gray-700">Interested in cognitive science and business at university</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-900 mr-3">•</span>
                <span className="text-gray-700">
                  Curious about the brain, behaviour, and how people learn and make decisions
                </span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors"
                style={{ color: 'white' }}
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

      {/* Leadership & Community */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-gray-900 mb-8">Leadership & Community</h2>
          <div className="space-y-6">
            {leadership.map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creative Work */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-gray-900 mb-8">Creative Work</h2>

          {/* Poetry */}
          <div className="mb-12">
            <h3 className="text-gray-900 mb-4">Poetry</h3>
            <p className="text-gray-700 mb-6">
              Writing poetry helps me process emotions, capture moments, and explore identity across
              languages and cultures.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((num) => (
                <div key={num} className="bg-white p-6 rounded-lg border border-gray-200">
                  <div className="bg-gray-100 h-48 rounded flex items-center justify-center mb-3">
                    <p className="text-gray-600 italic text-center px-4">
                      [Poem snippet placeholder {num}]
                    </p>
                  </div>
                  <p className="text-xs text-gray-500 text-center">Poetry excerpt</p>
                </div>
              ))}
            </div>
          </div>

          {/* Art */}
          <div className="mb-12">
            <h3 className="text-gray-900 mb-4">Art</h3>
            <p className="text-gray-700 mb-6">
              Painting and visual art allow me to express ideas that words sometimes can't capture.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((num) => (
                <div key={num} className="bg-white p-4 rounded-lg border border-gray-200">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1717758220144-aae8c59dbd7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGFydCUyMGNvbG9yZnVsJTIwcGFpbnRpbmd8ZW58MXx8fHwxNzY0NDI3NDE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt={`Art piece ${num}`}
                    className="w-full h-48 object-cover rounded mb-3"
                  />
                  <p className="text-xs text-gray-500 text-center">[Art image placeholder {num}]</p>
                </div>
              ))}
            </div>
          </div>

          {/* Storytelling & Acting */}
          <div className="mb-12">
            <h3 className="text-gray-900 mb-4">Storytelling & Acting</h3>
            <p className="text-gray-700 mb-6">
              Through storytelling and acting, I explore different perspectives and bring characters
              to life.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <div className="bg-gray-200 h-64 rounded flex items-center justify-center mb-3">
                  <span className="text-gray-500 text-4xl">▶</span>
                </div>
                <p className="text-xs text-gray-500 text-center">
                  [Video placeholder – monologue]
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <div className="bg-gray-200 h-64 rounded flex items-center justify-center mb-3">
                  <span className="text-gray-500 text-4xl">▶</span>
                </div>
                <p className="text-xs text-gray-500 text-center">
                  [Video placeholder – short skit]
                </p>
              </div>
            </div>
          </div>

          {/* Handwriting & Notes */}
          <div>
            <h3 className="text-gray-900 mb-4">Handwriting & Notes</h3>
            <p className="text-gray-700 mb-6">
              A collection of handwritten reflections, notes, and creative journaling.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[1, 2].map((num) => (
                <div key={num} className="bg-white p-4 rounded-lg border border-gray-200">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1748609422318-7301636fb625?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kd3JpdGluZyUyMGpvdXJuYWwlMjBub3Rlc3xlbnwxfHx8fDE3NjQ0NTU1ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt={`Handwriting sample ${num}`}
                    className="w-full h-48 object-cover rounded mb-3"
                  />
                  <p className="text-xs text-gray-500 text-center">
                    [Handwriting sample placeholder {num}]
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-gray-900 mb-6">Languages</h2>
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
            <p className="text-gray-700 mb-4">
              Fluent in English, French, and Persian.
            </p>
            <p className="text-gray-700 mb-4">
              Basic communication in Turkish and Spanish.
            </p>
            <p className="text-gray-700">
              And if you speak something I don't, I would love to learn your language and cutlure. Growing up between Calgary, Tehran, Toronto, Dubai, Baku, and Vancouver has helped
              me connect with people from around the world.
            </p>
          </div>
          <div className="mt-8 text-center">
            <Button to="/work-with-me" className="text-white">Work With Me</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
