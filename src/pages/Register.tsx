import React from 'react';
import { ExternalLink } from 'lucide-react';
import Footer from '../components/Footer';

const Register = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 pb-16 mb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Register for GFML</h1>
          <p className="text-xl text-gray-600">
            Join our free math competition and challenge yourself with original problems
          </p>
        </div>

        {/* Registration Info */}
        <div className="bg-orange-50 border-l-4 border-orange-600 p-6 mb-8">
          <h3 className="text-lg font-semibold text-orange-800 mb-2">Before You Register</h3>
          <ul className="text-orange-700 space-y-1">
            <li>• Open to students ages 6-18</li>
            <li>• Completely free to participate</li>
            <li>• Multiple rounds throughout the year</li>
            <li>• Original problems from brain teasers to AMC 12 level</li>
          </ul>
        </div>

        {/* Google Form Embed */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Registration Form</h2>
            <p className="text-gray-600">Registration for the 2026 Math League has yet to begin.</p>
          </div>
          
          {/* Placeholder for Google Form - Replace the src with your actual Google Form embed URL */}
          
          {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe4K6-DhscGvEW8MwXzrxOvrcpyJ0M-eswwORQ9U3Bm1Da6VQ/viewform?embedded=true" width="640" height="640" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe> */}
          <iframe 
            src="https://forms.gle/MGFBhJR3rhM1K3h36" 
            width="100%" 
            height="650" 
            frameBorder="0" 
            marginHeight="0"
            marginWidth="0"
            className="border-2 border-gray-200 rounded-lg"
          >
            Loading…
          </iframe>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default Register;