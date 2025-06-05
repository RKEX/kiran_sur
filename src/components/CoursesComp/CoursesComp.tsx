import { Button } from "../ui/button";

const CoursesComp = () => {
  return (
    <div className="w-full py-10 ">
      {/* Headline Section */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-600">
          Launch Your Digital Career with Expert-Led Training
        </h2>
        <p className="text-gray-700 mt-4 font-medium text-base md:text-lg ">
          Industry-ready programs designed for students and beginners to master
          SEO, social media, content creation, and start earning online through
          freelancing or remote jobs.
        </p>
      </div>

      {/* Courses Section */}
      <div className="bg-orange-50 py-10">
        <h3 className="text-center text-2xl font-bold mb-8 text-orange-600">
          Our Specialized Digital Courses
        </h3>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 px-5 max-w-7xl mx-auto">
          {/* Course 1 */}
          <div className="bg-white shadow-md rounded-xl p-5 hover:shadow-lg transition-all">
            <h4 className="font-bold text-lg mb-3 text-gray-800">
              Digital Marketing Mastery Program
            </h4>
            <ul className="list-disc list-inside text-sm font-medium text-gray-700 space-y-1">
              <li>Duration: 10 Weeks</li>
              <li>SEO, Google Ads, Social Media Marketing, Canva</li>
              <li>Marketing Funnel Setup & Lead Generation</li>
              <li>Ideal for HS/College students & freshers</li>
            </ul>
          </div>

          {/* Course 2 */}
          <div className="bg-white shadow-md rounded-xl p-5 hover:shadow-lg transition-all">
            <h4 className="font-bold text-lg mb-3 text-gray-800">
              Freelancing & Income Skills Bootcamp
            </h4>
            <ul className="list-disc list-inside text-sm font-medium text-gray-700 space-y-1">
              <li>Duration: 6 Weeks</li>
              <li>Fiverr, Upwork, LinkedIn Profile Building</li>
              <li>Portfolio Development & Client Handling</li>
              <li>Perfect for earning from home</li>
            </ul>
          </div>

          {/* Course 3 */}
          <div className="bg-white shadow-md rounded-xl p-5 hover:shadow-lg transition-all">
            <h4 className="font-bold text-lg mb-3 text-gray-800">
              Social Media & YouTube Growth Accelerator
            </h4>
            <ul className="list-disc list-inside text-sm font-medium text-gray-700 space-y-1">
              <li>Duration: 4 Weeks</li>
              <li>Instagram Growth, Reels Strategy, Branding</li>
              <li>YouTube Monetization Tactics</li>
              <li>Perfect for content creators & influencers</li>
            </ul>
          </div>

          {/* Course 4 */}
          <div className="bg-white shadow-md rounded-xl p-5 hover:shadow-lg transition-all">
            <h4 className="font-bold text-lg mb-3 text-gray-800">
              Advanced SEO Specialist Training
            </h4>
            <ul className="list-disc list-inside text-sm font-medium text-gray-700 space-y-1">
              <li>Duration: 6 Weeks</li>
              <li>In-depth Keyword Research, Technical SEO</li>
              <li>On-page, Off-page & Local SEO</li>
              <li>Ideal for bloggers, developers & marketers</li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-14 px-4">
        <h3 className="text-2xl font-bold mb-3 text-gray-800">
          Ready to Start Your Digital Journey?
        </h3>
        <p className="text-gray-600 font-medium mb-6 max-w-xl mx-auto">
          Apply now to get personalized guidance, hands-on projects, and a clear
          roadmap to success in the digital world.
        </p>

        <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 text-lg rounded-lg">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://docs.google.com/forms/d/e/1FAIpQLSejIrtwikoWLw0j4vBN6w_jIVFuLePrGrwfj2XNvqv-zkfQJQ/viewform?usp=dialog"
          >
            Apply Now
          </a>
        </Button>
      </div>
    </div>
  );
};

export default CoursesComp;
