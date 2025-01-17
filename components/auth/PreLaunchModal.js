"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaUser, FaPhone, FaEnvelope, FaCheck } from "react-icons/fa";
import { db } from "@/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const PreLaunchModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState("");

  const formatPhone = (value) => {
    const numbers = value.replace(/\D/g, "");

    if (numbers.length <= 2) {
      return `(${numbers}`;
    } else if (numbers.length <= 11) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    }

    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 11)}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      setFormData((prev) => ({
        ...prev,
        [name]: formatPhone(value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      await addDoc(collection(db, "prelaunch_signups"), {
        ...formData,
        createdAt: serverTimestamp(),
      });

      setSubmitSuccess(true);
      setTimeout(() => {
        onClose();
        setSubmitSuccess(false);
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
        });
      }, 3000);
    } catch (error) {
      setError("Ocorreu um erro. Por favor, tente novamente.");
      console.error("Error adding document: ", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-xl relative overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <FaTimes size={24} />
            </button>

            {/* Content */}
            <div className="p-8 md:p-10">
              {!submitSuccess ? (
                <>
                  {/* Header */}
                  <div className="text-center mb-10">
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                      Pré-lançamento Exclusivo
                    </h3>
                    <div className="bg-secondary-100/10 rounded-xl p-5 mb-4">
                      <p className="text-secondary-100 font-semibold text-lg">
                        🎉 Garanta sua vaga no pré-lançamento e ganhe 2 meses
                        grátis!
                      </p>
                    </div>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="relative">
                        <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          name="firstName"
                          placeholder="Nome"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full rounded-xl bg-gray-50 pl-12 pr-4 py-3 text-gray-800 placeholder:text-gray-400 font-medium outline-none focus:ring-2 focus:ring-secondary-100/20 transition-all"
                        />
                      </div>
                      <div className="relative">
                        <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          name="lastName"
                          placeholder="Sobrenome"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full rounded-xl bg-gray-50 pl-12 pr-4 py-3 text-gray-800 placeholder:text-gray-400 font-medium outline-none focus:ring-2 focus:ring-secondary-100/20 transition-all"
                        />
                      </div>
                    </div>
                    <div className="relative">
                      <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="(00) 00000-0000"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        maxLength={15}
                        className="w-full rounded-xl bg-gray-50 pl-12 pr-4 py-4 text-gray-800 placeholder:text-gray-400 font-medium outline-none focus:ring-2 focus:ring-secondary-100/20 transition-all text-lg"
                      />
                    </div>
                    <div className="relative">
                      <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-xl bg-gray-50 pl-12 pr-4 py-3 text-gray-800 placeholder:text-gray-400 font-medium outline-none focus:ring-2 focus:ring-secondary-100/20 transition-all"
                      />
                    </div>

                    {error && (
                      <p className="text-red-500 text-sm text-center">
                        {error}
                      </p>
                    )}

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full rounded-xl bg-gradient-to-r from-primary-100 to-secondary-100 py-4 text-white font-semibold transition-all hover:shadow-lg disabled:opacity-70"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? "Enviando..." : "Garantir Vaga"}
                    </motion.button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaCheck className="text-green-500" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Cadastro Realizado!
                  </h3>
                  <p className="text-gray-600">
                    Você receberá mais informações em breve.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PreLaunchModal;
