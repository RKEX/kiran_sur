const DesktopNavs = () => {
  return (
    <>
      <div className=" shadow-2xl p-4 bg-gray-100">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-orange-500 text-xl font-bold">
            {" "}
            <a href="/">Kiran Sur</a>
          </div>
          <div className="flex justify-between gap-4">
            {" "}
            <a className="text-orange-500 font-semibold text-lg" href="/">
              Home
            </a>
            <a
              className="text-orange-500 font-semibold text-lg"
              href="/consultation"
            >
              Conlsultation
            </a>
            <a
              className="text-orange-500 font-semibold text-lg"
              href="/courses"
            >
              Courses
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopNavs;
