"use client"

import { useState } from "react";
import Link from "next/link";

export default function Contacts() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e: { target: { name: any; value: any; }; }) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    alert("Form submitted!"); // Replace with your submit logic
  };

  return (
    <section className="relative py-16 px-5 bg-gray-50">
      {/* Title */}
      <div className="mb-12 text-center">
        <h2 className="text-6xl font-bold uppercase">Контакти</h2>
        <p className="text-xl mt-2">Geluka Agro Crop</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-3xl shadow-lg">
          <h3 className="text-3xl font-bold mb-6">Зв'яжіться з нами</h3>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Ім’я"
              value={form.name}
              onChange={handleChange}
              className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Телефон"
              value={form.phone}
              onChange={handleChange}
              className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <textarea
              name="message"
              placeholder="Повідомлення"
              value={form.message}
              onChange={handleChange}
              className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              rows={5}
              required
            ></textarea>
            <button
              type="submit"
              className="mt-4 w-fit px-6 py-3 bg-green-700 text-white font-bold rounded-xl hover:bg-white hover:text-green-700 border-2 border-green-700 transition-colors"
            >
              Відправити
            </button>
          </form>
        </div>

        {/* Organizer Contacts */}
        <div className="flex flex-col gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h3 className="text-3xl font-bold mb-4">Контакти організаторів</h3>
            <p>Телефон: <a href="tel:+380679192946" className="text-green-700 hover:underline">+38 067 919 29 46</a></p>
            <p>Email: <a href="mailto:aliona@geluka.com" className="text-green-700 hover:underline">aliona@geluka.com</a></p>
            <p>Telegram: <a href="https://t.me/aliona" target="_blank" className="text-green-700 hover:underline">@aliona</a></p>
          </div>

          {/* Google Maps */}
          <div className="bg-white p-0 rounded-3xl overflow-hidden shadow-lg h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2539.12345!2d30.123456!3d50.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x123456789abcdef!2sEvent+Location!5e0!3m2!1sen!2sua!4v1698790245678!5m2!1sen!2sua"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Social Media */}
          <div className="bg-white p-6 rounded-3xl shadow-lg text-center">
            <h3 className="text-3xl font-bold mb-4">Соціальні мережі</h3>
            <div className="flex justify-center gap-6 text-3xl">
              <Link href="#"><i className="fab fa-facebook text-blue-600"></i></Link>
              <Link href="#"><i className="fab fa-instagram text-pink-500"></i></Link>
              <Link href="#"><i className="fab fa-telegram text-blue-400"></i></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
