import { useState, FormEvent, ChangeEvent } from 'react';
import Wave from "../components/wave";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  // 處理表單字段更改
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target; // 直接使用 e.target，因為已經斷言為 HTMLInputElement 類型
    setFormData({
      ...formData,
      [name]: value
    });
  };
  

  // 處理表單提交
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    // 在此處你可以發送表單數據到伺服器
    console.log('Form submitted:', formData);
  };

  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center'>
    <div className="bg-black/40 max-w-md mx-auto mt-8 p-6 border border-gray-300 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Contact Me</h2>
      <p>Email: <a href="mailto:wchsean@gmail.com" className="text-blue-600">wchsean@gmail.com</a></p>
      <p>LinkedIn: <a href="www.linkedin.com/in/jheng-siang-wang-227292294" className="text-blue-600">www.linkedin.com/in/jheng-siang-wang-227292294</a></p>


      {isSubmitted ? (
        <div className="text-center text-green-600">
          <h3>Thank you for contacting me!</h3>
          <p>I will get back to you as soon as possible.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-400 pt-4">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-400">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-400">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              rows={4}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full p-2 bg-blue-900 text-white rounded-md hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      )}
      
    </div>
    <footer className="mt-6 text-center bottom-0 w-screen absolute">

          <Wave />
        </footer>
    </div>
  );
};

export default ContactForm;
