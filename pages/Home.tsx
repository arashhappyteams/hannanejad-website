import { Button } from '../components/Button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Link } from 'react-router-dom';

export default function Home() {
  //const handleBookTutoring = () => {
   // window.location.href = '/tutoring#tutoring-form';
 // };

  const highlights = [
    '100+ hours as a summer camp leader',
    '3 years as a karate assistant coach',
    'Fluent in English, French, and Persian',
    'Founder of Path To Success, tutoring and coaching',
  ];

  const whatIDo = [
    {
      title: 'Tutoring & Mentoring',
      description:
        'I support students in Grades 3–10 with math, science, French, English, and study skills.',
      link: '/tutoring',
    },
    {
      title: 'Creative Work',
      description:
        'I write poetry, paint, and act. Creativity helps me express ideas and emotions.',
      link: '/portfolio',
    },
    {
      title: 'Collaboration & Work',
      description:
        "I'm open to youth-focused projects, content creation, and roles where I can learn and contribute.",
      link: '/work-with-me',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h1 className="text-gray-900 mb-6">
                Hi, I'm Hanna - a coach and tutor to children, from sciences to public speaking and storytelling. 
              </h1>
              <p className="text-gray-700 mb-8">
                I help young children feel more confident through better writing and better grades in two languages (English and French), while exploring my
                interests in cognitive sciences, psychology, business, marketing, art, and storytelling.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button to="/tutoring#tutoring-form">Book Tutoring</Button>
                <Button variant="secondary" to="/portfolio">
                  Explore My Portfolio
                </Button>
              </div>
            </div>
            <div>
              <ImageWithFallback
                src="/assets/hanna-hero.png"
                alt="Portrait of Hanna Nejad"
                className="w-full h-auto rounded-lg"
              />
              <p className="text-xs text-gray-500 mt-2 text-center">
                Portrait of Hanna Shoari Nejad
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlight Strip */}
      <section className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white p-4 rounded-lg text-center border border-gray-200">
                <p className="text-gray-700">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-gray-900 text-center mb-12">What I Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {whatIDo.map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-700 mb-4">{item.description}</p>
                <Link to={item.link} className="text-blue-900 hover:underline">
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Placeholders */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="bg-gray-200 h-48 rounded flex items-center justify-center mb-3">
                <ImageWithFallback
                  src="/assets/hanna-art-1.jpg"
                  alt="Featured art"
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <p className="text-xs text-gray-500 text-center">Picasso-style Cubism</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="bg-gray-200 h-48 rounded flex items-center justify-center mb-3">
                <p className="text-gray-500 text-center px-4">
                  "In the quiet moments between breaths, I find the words that speak the loudest..."
                </p>
              </div>
              <p className="text-xs text-gray-500 text-center">[Featured poem snippet placeholder]</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="bg-gray-200 h-48 rounded flex items-center justify-center mb-3">
                <span className="text-gray-500">▶</span>
              </div>
              <p className="text-xs text-gray-500 text-center">[Featured video placeholder]</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
