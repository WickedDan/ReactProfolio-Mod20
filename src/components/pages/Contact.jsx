import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: ''});
  };

  return (
    <div>
      <h1 className="title display-1 border border-3 rounded-pill">Contact</h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="form-label" htmlFor="name">Name</label>
            <input className="form-control"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="form-label" htmlFor="email">Email</label>
            <input className="form-control"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className>
            <label className="form-label" htmlFor="message">Message</label>
            <textarea className="form-control"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
            ></textarea>
          </div>
          <button className="mt-2 mb-2 btn btn-primary" type="submit">Send Message</button>
        </form>

      <footer>
        <div className="footer text-center">
          <a className="p-5 display-6" href="mailto:daniel@wickedflow.com">Email</a>
          <a className="p-5 display-6" href="https://github.com/WickedDan">Github</a>
          <a className="p-5 display-6" href="https://www.instagram.com/daniel_h_contreras/">Instagram</a>
        </div>
      </footer>
    </div>
  );
}
