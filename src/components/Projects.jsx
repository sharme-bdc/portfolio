export default function Projects() {
  const tech = ["HTML", "CSS", "JS"];
  return (
    <section id="projects" className="py-20 px-4 md:px-16">
      <div className="flex w-full flex-col justify-center md:flex-row max-auto items-center">
        <hr className="w-5/12"></hr>
        <h2 className="w-2/12 text-3xl font-bold mb-6 text-center ite">Other Project</h2>
        <hr className="w-5/12"></hr>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {[1, 2, 3, 4].map((_, idx) => (
          <div key={idx} className="flex gap-4 border-b pb-4">
            <img src="/src/Robyn O'Neale.jpg" alt="Profile" className="w-32 h-32 mx-auto mb-4" />
            <div>
              <h4 className="font-semibold text-lg">Project Name</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">{tech.join(" ")}</div>
              <div className="flex max-auto">
                <a href="https://github.com/sharme-bdc/portfolio"><i className="fa fa-github p-4 text-[25px]" aria-hidden="true"></i></a>
                <a href="https://bd.linkedin.com/in/sharme-akter-b9413a213"><i className="fa fa-linkedin-square p-4 text-[25px]" aria-hidden="true"></i></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}