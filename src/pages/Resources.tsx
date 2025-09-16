import React from 'react';
import { BookOpen, Download, ExternalLink, Calculator } from 'lucide-react';
import Footer from '../components/Footer';

const Resources = () => {
  const practiceProblems = [
    {
      title: "Elementary Brain Teasers",
      description: "Fun problems for grades K-5 to develop logical thinking",
      level: "Elementary",
      problems: 15,
    },
    {
      title: "Middle School Challenges",
      description: "Algebra and geometry problems for grades 6-8",
      level: "Middle School",
      problems: 20,
    },
    {
      title: "High School Competition Problems",
      description: "AMC 8/10/12 level problems for serious competitors",
      level: "High School",
      problems: 25,
    },
  ];

  const studyResources = [
    {
      title: "Problem Solving Strategies",
      description: "Essential techniques for mathematical problem solving",
      type: "Guide",
    },
    {
      title: "Competition Math Formulas",
      description: "Quick reference sheet for common formulas",
      type: "Reference",
    },
    {
      title: "Past Competition Problems",
      description: "Archive of problems from previous GFML rounds",
      type: "Archive",
    },
  ];

  const externalLinks = [
    {
      title: "Art of Problem Solving",
      description: "Comprehensive online math competition resources",
      url: "https://artofproblemsolving.com",
    },
    {
      title: "AMC Competition",
      description: "Official American Mathematics Competition website",
      url: "https://www.maa.org/math-competitions",
    },
    {
      title: "Khan Academy",
      description: "Free online math courses and practice problems",
      url: "https://www.khanacademy.org/math",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Math Resources</h1>
          <p className="text-xl text-gray-600">
            Practice problems, study guides, and helpful links to improve your mathematical skills
          </p>
        </div>

        {/* Practice Problems Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Practice Problems</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {practiceProblems.map((problem, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <Calculator className="h-12 w-12 text-orange-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{problem.title}</h3>
                <p className="text-gray-600 mb-4">{problem.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800">
                    {problem.level}
                  </span>
                  <span className="text-sm text-gray-500">{problem.problems} problems</span>
                </div>
                <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center">
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Study Resources Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Study Materials</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {studyResources.map((resource, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <BookOpen className="h-12 w-12 text-orange-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    {resource.type}
                  </span>
                </div>
                <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* External Links Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Recommended Links</h2>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="space-y-4">
              {externalLinks.map((link, index) => (
                <div key={index} className="flex items-start justify-between p-4 border border-gray-200 rounded-lg hover:border-orange-300 transition-colors">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{link.title}</h3>
                    <p className="text-gray-600 mb-2">{link.description}</p>
                    <p className="text-sm text-gray-500">{link.url}</p>
                  </div>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4 text-orange-600 hover:text-orange-700"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Note */}
        <div className="mt-8 bg-orange-50 border-l-4 border-orange-600 p-6">
          <p className="text-orange-800">
            <strong>Note:</strong> All practice problems and study materials are currently being prepared. 
            They will be available for download soon. Check back regularly for updates!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Resources;