import React from 'react';
import { Trophy, Medal, Award } from 'lucide-react';
import Footer from '../components/Footer';

const Results = () => {
  // Sample data - replace with actual results
  const pastCompetitions = [
    {
      round: "Round 3 - Fall 2024",
      date: "November 2024",
      participants: 245,
      topScorers: [
        { name: "Alex Chen", school: "Central High School", score: 98 },
        { name: "Maya Patel", school: "Riverside Academy", score: 95 },
        { name: "Jordan Kim", school: "Lincoln Middle School", score: 92 },
      ]
    },
    {
      round: "Round 2 - Fall 2024",
      date: "October 2024",
      participants: 198,
      topScorers: [
        { name: "Sarah Johnson", school: "Oak Valley High", score: 96 },
        { name: "Marcus Rodriguez", school: "Pine Grove School", score: 94 },
        { name: "Emma Zhang", school: "Westfield Academy", score: 91 },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Competition Results</h1>
          <p className="text-xl text-gray-600">
            Celebrating the achievements of our talented participants
          </p>
        </div>

        {/* Current Competition Status */}
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-8">
          <div className="text-center">
            <Trophy className="h-12 w-12 text-orange-600 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Round 4 - Winter 2025</h2>
            <p className="text-gray-700 mb-4">Currently accepting registrations</p>
            <p className="text-sm text-gray-600">
              Competition Date: January 15, 2025 | Results will be posted by January 22, 2025
            </p>
          </div>
        </div>

        {/* Past Results */}
        <div className="space-y-8">
          {pastCompetitions.map((competition, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-orange-600 px-6 py-4">
                <h3 className="text-2xl font-bold text-white">{competition.round}</h3>
                <p className="text-orange-100">{competition.date} • {competition.participants} Participants</p>
              </div>
              
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-6">Top Performers</h4>
                <div className="space-y-4">
                  {competition.topScorers.map((scorer, scorerIndex) => (
                    <div key={scorerIndex} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          {scorerIndex === 0 && <Trophy className="h-8 w-8 text-yellow-500" />}
                          {scorerIndex === 1 && <Medal className="h-8 w-8 text-gray-400" />}
                          {scorerIndex === 2 && <Award className="h-8 w-8 text-orange-600" />}
                        </div>
                        <div>
                          <p className="text-lg font-semibold text-gray-900">{scorer.name}</p>
                          <p className="text-gray-600">{scorer.school}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-orange-600">{scorer.score}</p>
                        <p className="text-sm text-gray-500">points</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-12 mb-16 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-3xl font-bold text-orange-600 mb-2">50+</h3>
            <p className="text-gray-600">Total Participants</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-3xl font-bold text-orange-600 mb-2">12</h3>
            <p className="text-gray-600">Completed Rounds</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-3xl font-bold text-orange-600 mb-2">30+</h3>
            <p className="text-gray-600">Schools Represented</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Results;