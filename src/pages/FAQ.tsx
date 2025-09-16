import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Footer from '../components/Footer';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    if (openItems.includes(index)) {
      setOpenItems(openItems.filter(i => i !== index));
    } else {
      setOpenItems([...openItems, index]);
    }
  };

  const faqData = [
    {
      category: "General Information",
      questions: [
        {
          question: "What is the Germantown Friends Math League?",
          answer: "GFML is a multi-round online free math competition for students ages 6-18. We offer original math problems ranging from brain teasers to AMC 12 level, with the mission to promote accessibility in mathematics and nurture mathematical talent."
        },
        {
          question: "Is there any cost to participate?",
          answer: "No! The Germantown Friends Math League is completely free to participate. We believe mathematics education should be accessible to all students regardless of their financial situation."
        },
        {
          question: "What age groups can participate?",
          answer: "Students ages 6-18 are welcome to participate. We design problems appropriate for different skill levels, from elementary brain teasers to advanced high school competition problems."
        }
      ]
    },
    {
      category: "Registration & Competition",
      questions: [
        {
          question: "How do I register for the competition?",
          answer: "You can register by filling out our online registration form on the Register page. Simply provide your basic information, school details, and we'll send you competition details via email."
        },
        {
          question: "How many rounds are there?",
          answer: "We typically run 4-5 rounds per academic year, spaced throughout the fall, winter, and spring. Each round consists of original problems designed by our problem committee."
        },
        {
          question: "How is the competition conducted?",
          answer: "The competition is conducted entirely online. Registered participants receive access to the problem sets at the designated time and submit their solutions through our online platform."
        },
        {
          question: "What is the time limit for each round?",
          answer: "Each round typically has a 2-3 hour time window. Participants can choose when to start within the competition day, but once started, they must complete all problems within the allotted time."
        }
      ]
    },
    {
      category: "Problems & Difficulty",
      questions: [
        {
          question: "What types of problems are included?",
          answer: "Our problems range from creative brain teasers suitable for elementary students to advanced problems at the AMC 12 level. Topics include algebra, geometry, number theory, combinatorics, and logical reasoning."
        },
        {
          question: "Are the problems original?",
          answer: "Yes! All problems are carefully crafted by our problem committee, which consists of experienced mathematics educators and competition problem writers."
        },
        {
          question: "How can I prepare for the competition?",
          answer: "Check out our Resources page for practice problems, study guides, and recommended external resources. We also provide problem sets from previous rounds to help you prepare."
        }
      ]
    },
    {
      category: "Results & Recognition",
      questions: [
        {
          question: "How are results calculated and when are they released?",
          answer: "Results are typically released within one week after each round. We score based on correctness and provide detailed solutions. Top performers in each age group are recognized on our Results page."
        },
        {
          question: "Are there prizes or awards?",
          answer: "While we don't offer monetary prizes, top performers receive certificates of achievement and recognition on our website. Our focus is on providing valuable mathematical experience and learning opportunities."
        },
        {
          question: "Can I see solutions to the problems?",
          answer: "Yes! Detailed solutions with explanations are provided to all participants after each round. This is an important part of the learning process."
        }
      ]
    },
    {
      category: "Technical Support",
      questions: [
        {
          question: "What if I experience technical difficulties during the competition?",
          answer: "If you encounter technical issues, immediately contact us at our support email. We monitor technical support throughout competition days and will work to resolve issues quickly."
        },
        {
          question: "What browsers and devices are supported?",
          answer: "Our platform works on all modern browsers (Chrome, Firefox, Safari, Edge) on computers, tablets, and smartphones. We recommend using a computer for the best experience."
        },
        {
          question: "Can I compete as part of a team?",
          answer: "Currently, GFML is an individual competition. However, we encourage schools to participate as groups and may consider team categories in the future."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600">
            Find answers to common questions about the Germantown Friends Math League
          </p>
        </div>

        <div className="space-y-8">
          {faqData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-orange-600 px-6 py-4">
                <h2 className="text-xl font-bold text-white">{category.category}</h2>
              </div>
              <div className="divide-y divide-gray-200">
                {category.questions.map((faq, questionIndex) => {
                  const itemIndex = categoryIndex * 100 + questionIndex; // Unique index
                  const isOpen = openItems.includes(itemIndex);
                  
                  return (
                    <div key={questionIndex}>
                      <button
                        className="w-full px-6 py-4 text-left hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors"
                        onClick={() => toggleItem(itemIndex)}
                      >
                        <div className="flex justify-between items-center">
                          <h3 className="text-lg font-medium text-gray-900 pr-4">
                            {faq.question}
                          </h3>
                          {isOpen ? (
                            <ChevronUp className="h-5 w-5 text-orange-600 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-orange-600 flex-shrink-0" />
                          )}
                        </div>
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-4">
                          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact for more questions */}
        <div className="mt-12 bg-orange-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Still have questions?</h3>
          <p className="text-gray-600 mb-6">
            Can't find the answer you're looking for? Our team is here to help.
          </p>
          <a
            href="mailto:clairesunyu@gmail.com"
            className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-orange-600 hover:bg-orange-700 rounded-lg transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;