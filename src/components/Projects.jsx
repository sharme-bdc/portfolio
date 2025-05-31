export default function Projects() {
  const tech = ["HTML", "CSS", "JS"];
  return (
    <section id="projects" className="py-20 px-4 md:px-16">
      <h3 className="text-2xl font-bold mb-10 text-center">Other Project</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {[1, 2, 3, 4].map((_, idx) => (
          <div key={idx} className="flex gap-4 border-b pb-4">
            <div className="w-24 h-24 bg-gray-300" />
            <div>
              <h4 className="font-semibold text-lg">Project Name</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">{tech.join(" ")}</div>
              <div className="text-lg space-x-2">
                <a href="#" className="hover:text-blue-600">🔗</a>
                <a href="#" className="hover:text-blue-600">💻</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}