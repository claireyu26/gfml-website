import React from 'react';
import { Mail, Linkedin, User } from 'lucide-react';
import Footer from '../components/Footer';
import claireHeadshot from '../claire_headshot.jpeg';
import lukeHeadshot from '../luke_headshot.png';

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Claire Yu",
      role: "Founder, Problem Writer",
      bio: "High school senior at Germantown Friends School.",
      image: claireHeadshot,
    },
    {
      name: "Benedict Tessler",
      role: "Founder, Problem Writer",
      bio: "Math & CS major at the University of Pennsylvania",
      image: "/GFML.png",
    },
  ];

  const advisors = [
    {
      name: "Robert Jin",
      affiliation: "Minnetonka, MN",
    },
    {
      name: "Natalie Khawaja",
      affiliation: "Demarest, NJ",
    },
    {
      name: "Rhea Agrawal",
      affiliation: "Mumbai, India",
    },
    {
      name: "Joshua Wu",
      affiliation: "San Francisco, CA",
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 pb-16 mb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated educators and mathematicians working to promote accessibility 
            in mathematics and nurture mathematical talent
          </p>
        </div>

        {/* Core Team */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Core Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-8">
                  <div className="flex items-start space-x-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-45 h-45 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                      <p className="text-orange-600 font-medium mb-3">{member.role}</p>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Luke's centered box */}
          <div className="flex justify-center mt-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow max-w-md">
              <div className="p-8">
                <div className="flex items-start space-x-6">
                  <img
                    src={lukeHeadshot}
                    alt="Luke Greenawalt"
                    className="w-24 h-24 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Luke Greenawalt</h3>
                    <p className="text-orange-600 font-medium mb-3">Problem Writer</p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">Math & CS major at Carnegie Mellon University</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Academic Advisors */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Chapter Leaders</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {advisors.map((advisor, index) => (
                <div key={index} className="text-center p-6 border border-gray-200 rounded-lg">
                  <User className="h-16 w-16 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{advisor.name}</h3>
                  <p className="text-orange-600 text-sm mb-2">{advisor.affiliation}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="bg-orange-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment</h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            We believe that every student deserves access to high-quality mathematical challenges. 
            Our team is committed to creating an inclusive environment where students from all 
            backgrounds can discover their potential, develop problem-solving skills, and 
            cultivate a lifelong love of mathematics.
          </p>
        </section>

        {/* Join Us */}
        <section className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Want to Join Our Team?</h2>
          <p className="text-gray-600 mb-6">
            We're always looking for passionate educators and mathematicians to help with our mission.
          </p>
          <a
            href="mailto:info@gfml.org"
            className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-orange-600 hover:bg-orange-700 rounded-lg transition-colors"
          >
            <Mail className="h-5 w-5 mr-2" />
            Contact Us
          </a>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default OurTeam;