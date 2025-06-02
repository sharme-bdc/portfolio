export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 gap-20 md:px-16 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="flex w-full flex-col justify-center md:flex-row max-auto items-center">
        <hr className="w-5/12"></hr>
        <h2 className="w-2/12 text-3xl font-bold mb-6 text-center ite">Contact</h2>
        <hr className="w-5/12"></hr>
      </div>
      
      <form className="max-w-xl mx-auto space-y-6">
        <div className="flex flex-col">
          <label className="mb-1 font-medium">Name</label>
          <input type="text" placeholder="Your Name" className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black dark:bg-gray-800 dark:border-gray-600" />
        </div>
        <div className="flex flex-col">
          <label className="mb-1 font-medium">Email</label>
          <input type="email" placeholder="you@example.com" className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black dark:bg-gray-800 dark:border-gray-600" />
        </div>
        <div className="flex flex-col">
          <label className="mb-1 font-medium">Message</label>
          <textarea placeholder="Write your message..." className="p-3 border border-gray-300 rounded-md h-32 resize-none focus:outline-none focus:ring-2 focus:ring-black dark:bg-gray-800 dark:border-gray-600"></textarea>
        </div>
        <button type="submit" className="w-full py-3 bg-black text-white font-semibold rounded-md hover:opacity-90 transition-all">Send Message</button>
      </form>

      <div className="flex w-full flex-col justify-center md:flex-row max-auto items-center">
        <a href="https://github.com/sharme-bdc/portfolio"><i class="fa fa-github" aria-hidden="true"></i></i></a>
        <a href="https://bd.linkedin.com/in/sharme-akter-b9413a213"><i class="fa fa-linkedin-square" aria-hidden="true"></i></i></a>
      </div>
    </section>
  );
}