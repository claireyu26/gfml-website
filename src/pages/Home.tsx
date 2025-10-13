import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Trophy, BookOpen, Heart } from 'lucide-react';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="mb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-orange-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Germantown Friends <span className="text-orange-600">Math League</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              A multi-round online free math competition for students ages 6-18 with original problems 
              ranging from brain teasers to AMC 12 level
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <Link
                to="/register"
                className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-orange-600 hover:bg-orange-700 rounded-lg transition-colors shadow-lg"
              >
                Register Now
              </Link>
              <Link
                to="/resources"
                className="inline-flex items-center px-8 py-4 text-lg font-medium text-orange-600 bg-white hover:bg-gray-50 rounded-lg transition-colors shadow-lg border-2 border-orange-600"
              >
                View Resources
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Graciously Sponsored By</h2>
            <div className="flex flex-wrap justify-center items-center gap-12 mb-8">
              <div className="text-center">
                <img 
                  src="../wolfram.png" 
                  alt="Wolfram" 
                  className="h-16 mx-auto mb-2"
                />
                <div className="text-lg font-semibold text-gray-700">Wolfram</div>
              </div>
              <div className="text-center">
                <img 
                  src="../janestreet.jpg" 
                  alt="Jane Street" 
                  className="h-16 mx-auto mb-2"
                />
                <div className="text-lg font-semibold text-gray-700">Jane Street</div>
              </div>
              <div className="text-center">
                <img 
                  src="../live.jpg" 
                  alt="LIVE by Po-Shen Loh" 
                  className="h-16 mx-auto mb-2"
                />
                <div className="text-lg font-semibold text-gray-700">LIVE by Po-Shen Loh</div>
              </div>
            </div>
          </div>
          
          {/* Statistics */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-3xl font-bold text-orange-600 mb-2">$2.2K+</h3>
              <p className="text-gray-600">In Prizes</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-3xl font-bold text-orange-600 mb-2">50+</h3>
              <p className="text-gray-600">Students</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-3xl font-bold text-orange-600 mb-2">4</h3>
              <p className="text-gray-600">Global Chapter Leaders</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Heart className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">100% Free</h3>
              <p className="text-gray-600">
                No registration fees or hidden costs. Mathematics education should be accessible to all.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Users className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Ages 6-18</h3>
              <p className="text-gray-600">
                Inclusive competition welcoming students from elementary through high school.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <BookOpen className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Original Problems</h3>
              <p className="text-gray-600">
                Carefully crafted problems ranging from brain teasers to AMC 12 level challenges.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Trophy className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Multi-Round</h3>
              <p className="text-gray-600">
                Multiple rounds of competition to showcase your mathematical skills and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To promote accessibility in mathematics and nurture mathematical talent among young minds
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Challenge Yourself?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of students from around the world in our next math competition
          </p>
          <Link
            to="/register"
            className="inline-flex items-center px-8 py-4 text-lg font-medium text-orange-600 bg-white hover:bg-gray-100 rounded-lg transition-colors shadow-lg"
          >
            Get Started Today
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};



export default Home;
