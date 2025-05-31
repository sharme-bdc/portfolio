export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 md:px-16 bg-gray-50 dark:bg-gray-800">
      <h3 className="text-2xl font-bold mb-4">Contact</h3>
      <form className="max-w-xl space-y-4">
        <input type="text" placeholder="Name" className="w-full p-2 border rounded" />
        <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
        <textarea placeholder="Message" className="w-full p-2 border rounded h-32" />
        <button type="submit" className="px-4 py-2 bg-black text-white rounded">Send</button>
      </form>
    </section>
  );
}