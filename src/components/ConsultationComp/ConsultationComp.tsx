import { Button } from "../ui/button";

const ConsultationComp = () => {
  return (
    <div className="w-full pt-4">
      {/* Headline */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-orange-600">
          Personalized Business Consultation & Growth Services
        </h2>
        <p className="text-gray-700 mt-3 font-medium text-base md:text-lg">
          Unlock your business’s full potential with expert strategies in
          digital marketing, branding, and automation—tailored for modern
          entrepreneurs.
        </p>
      </div>

      {/* Services Section */}
      <div className="bg-orange-100  ">
        <div className="py-8 md:py-12">
          <div className=""></div>
          <h3 className="text-center text-xl font-bold mb-6 text-orange-600">
            Our Paid Business Services Include:
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-5 max-w-7xl mx-auto">
            {/* Card 1 */}
            <div className="bg-white shadow-md rounded-lg p-4">
              <h4 className="font-bold text-lg mb-2 text-gray-800">
                Digital Strategy Setup
              </h4>
              <ul className="list-disc list-inside text-sm font-medium text-gray-700 space-y-1">
                <li>Competitor Analysis</li>
                <li>Target Audience Research</li>
                <li>Marketing Funnel Design</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-md rounded-lg p-4">
              <h4 className="font-bold text-lg mb-2 text-gray-800">
                SEO Audit & Optimization
              </h4>
              <ul className="list-disc list-inside text-sm font-medium text-gray-700 space-y-1">
                <li>On & Off-Page SEO</li>
                <li>Local SEO (Google My Business)</li>
                <li>Monthly Ranking Reports</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-md rounded-lg p-4">
              <h4 className="font-bold text-lg mb-2 text-gray-800">
                Social Media & Ads
              </h4>
              <ul className="list-disc list-inside text-sm font-medium text-gray-700 space-y-1">
                <li>Page Setup & Optimization</li>
                <li>Instagram & Facebook Ads</li>
                <li>Monthly Growth Plan</li>
              </ul>
            </div>

            {/* Card 4 */}
            <div className="bg-white shadow-md rounded-lg p-4">
              <h4 className="font-bold text-lg mb-2 text-gray-800">
                Google & YouTube Promotion
              </h4>
              <ul className="list-disc list-inside text-sm font-medium text-gray-700 space-y-1">
                <li>Lead Generation Campaigns</li>
                <li>Video Ads Optimization</li>
                <li>Views & Watch Time Boost</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Booking Section */}
      <div className="text-center mt-10 px-4">
        <h3 className="text-xl font-bold mb-3 text-gray-800">
          Book a 1-on-1 Consultation Today
        </h3>
        <p className="text-gray-600 font-medium mb-6 max-w-xl mx-auto">
          Get a personalized roadmap to grow your business online—with expert
          guidance tailored to your goals and market.
        </p>

        <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 text-lg rounded-lg">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://docs.google.com/forms/d/e/1FAIpQLSc7WN5YyyY2Tg_hKruNOAt_ZNPRR4MvQFPEH9KEua6N1P8fdQ/viewform"
          >
            Book Now
          </a>
        </Button>
      </div>
    </div>
  );
};

export default ConsultationComp;
