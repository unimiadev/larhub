"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { FaEnvelope, FaUser, FaPaperPlane } from "react-icons/fa";

const ContactLandLarHub = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const emailData = {
        to_name: "ExpertVision",
        from_name: `${formData.name} <${formData.email}>`,
        message: formData.message,
      };

      await emailjs.send(
        "service_xp9qywn",
        "template_nbz3e3x",
        emailData,
        "Cx0vJ_OAWGaa-1ekh"
      );

      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitSuccess(false), 3000);
    } catch (error) {
      console.error("Erro ao enviar o email:", error);
      alert("Erro ao enviar o email.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-white pt-16 md:pt-24 overflow-hidden">
      <div className="mx-auto w-[95%] lg:w-[85%] xl:w-3/4 relative">
        {/* Enhanced Decorative Elements */}
        <motion.div
          className="absolute -right-40 top-0 w-96 h-96 bg-primary-100/5 rounded-full blur-3xl"
          initial={{ opacity: 0, scale: 0, rotate: -45 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1 }}
        />
        <motion.div
          className="absolute -left-40 bottom-0 w-[500px] h-[500px] bg-secondary-100/5 rounded-full blur-3xl"
          initial={{ opacity: 0, scale: 0, rotate: 45 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        />

        {/* Content */}
        <div className="relative z-10 pb-24">
          {/* Enhanced Header */}
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute -top-10 left-1/2 -translate-x-1/2 text-8xl font-black text-primary-100 whitespace-nowrap"
            >
              CONTATO
            </motion.span>
            <h2 className="text-5xl font-extrabold text-gray-800 relative z-10">
              Fale com a{" "}
              <span className="text-secondary-100 relative inline-block">
                LarHub
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-secondary-100"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                />
              </span>
            </h2>
            <p className="mt-6 text-xl font-medium text-gray-600 max-w-2xl mx-auto">
              Tire dúvidas, envie sugestões e entre em contato com o suporte.
            </p>
          </motion.div>

          {/* Enhanced Form and Image Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 items-center">
            {/* Form */}
            <motion.div
              className="lg:col-span-3 bg-white rounded-2xl p-8 shadow-xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    className="w-full rounded-xl bg-gray-50 pl-12 pr-6 py-4 text-gray-800 placeholder:text-gray-400 font-medium outline-none focus:ring-2 focus:ring-secondary-100/20 transition-all duration-300"
                    type="text"
                    name="name"
                    placeholder="Nome"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    className="w-full rounded-xl bg-gray-50 pl-12 pr-6 py-4 text-gray-800 placeholder:text-gray-400 font-medium outline-none focus:ring-2 focus:ring-secondary-100/20 transition-all duration-300"
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <textarea
                  className="w-full rounded-xl bg-gray-50 px-6 py-4 text-gray-800 placeholder:text-gray-400 font-medium outline-none focus:ring-2 focus:ring-secondary-100/20 transition-all duration-300 min-h-[150px]"
                  name="message"
                  placeholder="Mensagem..."
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full rounded-xl bg-gradient-to-r from-primary-100 to-secondary-100 px-8 py-4 text-white font-semibold transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 relative overflow-hidden group"
                  disabled={isSubmitting}
                >
                  <span className="relative z-10">
                    {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                  </span>
                  <FaPaperPlane className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary-100 to-primary-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
              </form>
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 text-center text-green-500 font-medium"
                >
                  Mensagem enviada com sucesso!
                </motion.div>
              )}
            </motion.div>

            {/* Enhanced Image */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300 group">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-100/20 to-secondary-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                <img
                  className="w-full aspect-[4/3] object-cover"
                  alt="contact-us-page-graphic"
                  src="https://img.freepik.com/fotos-premium/um-homem-esta-falando-ao-telefone-e-esta-falando-em-um-telefone-e-uma-casa-modelo_31965-132498.jpg?w=740"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactLandLarHub;
