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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "6b5ed045-7092-418b-befd-cdcd13a5235a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: json
    }).then((res) => res.json());

    if (res.success) {
        console.log("Success", res);
    }
    window.alert('Success, Form Submitted!', formData);
    setFormData({ name: '', email: '', message: '' });
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
        <div className="d-flex justify-content-center">
          <a className="p-5" href="mailto:daniel@wickedflow.com">Email</a>
          <a className="p-5" href="https://github.com/WickedDan">Github</a>
          <a className="p-5 " href="https://www.instagram.com/daniel_h_contreras/">Instagram</a>
        </div>
      </footer>
    </div>
  );
}

