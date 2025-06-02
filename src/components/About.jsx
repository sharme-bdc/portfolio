export default function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-16 bg-[#F2F2F2] dark:bg-gray-800">
        <div className="flex w-full flex-col justify-center md:flex-row max-auto items-center">
          <hr className="w-4/12"></hr>
          <h2 className="w-4/12 text-3xl font-bold mb-6 text-center ite">About Me</h2>
          <hr className="w-4/12"></hr>
        </div>
        <div className="py-6 px-4 md:px-16 flex flex-col md:flex-row sm:w-full w-full justify-between overflow-hidden items-center gap-4"> 
            <div> 
                <p className="p-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet vestibulum felis. Vivamus facilisis ligula id fringilla gravida. Suspendisse ultricies sollicitudin lacus, et rutrum nunc bibendum sed.</p>
                <p className="p-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet vestibulum felis. Vivamus facilisis ligula id fringilla gravida. Suspendisse ultricies sollicitudin lacus, et rutrum nunc bibendum sed.</p>
                <p className="p-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet vestibulum felis. Vivamus facilisis ligula id fringilla gravida. Suspendisse ultricies sollicitudin lacus, et rutrum nunc bibendum sed.</p>
            </div>
            <div>
              <img src="/src/Robyn O'Neale.jpg" alt="Profile" className="w-10/12 h-auto mx-auto rounded items-end"/>
            </div>
        </div>

    </section>
  );
}
