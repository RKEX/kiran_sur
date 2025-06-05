const ServiceComp = () => {
  return (
    <section className="py-12 bg-gray-100 w-full">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 text-orange-600">
          Why Choose Us
        </h2>
        <p className="text-gray-700 mb-10 max-w-3xl mx-auto">
          Whether you're a business owner aiming for growth or a student
          stepping into digital marketing, we deliver expert strategies,
          hands-on training, and real-world results. Here's why hundreds trust
          us:
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2 text-orange-500">
              Tailored Services
            </h3>
            <p className="text-gray-700">
              From business growth plans to student career training – everything
              is customized to your exact needs and goals.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2 text-orange-500">
              Real Results
            </h3>
            <p className="text-gray-700">
              We focus on delivering measurable outcomes: traffic, leads,
              conversions, and career success through freelancing or jobs.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2 text-orange-500">
              Expert Support
            </h3>
            <p className="text-gray-700">
              You’re not alone – our expert team supports you step-by-step,
              whether you’re building a brand or learning digital skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceComp;
