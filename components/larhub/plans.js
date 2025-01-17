"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaArrowDown, FaCheckSquare } from "react-icons/fa";
import StripeProvider from "../payment/stripe_provider";
import { auth } from "@/firebase";
import { createCheckoutSession } from "@/app/api/create-payment-intent/create_checkout_session";
import PreLaunchModal from "../auth/PreLaunchModal";

const plans = [
  {
    title: "Não Assinante",
    price: "Gratuito",
    benefits: [
      { text: "Acesso básico ao sistema", available: true },
      { text: "Visualização limitada de imóveis", available: true },
      { text: "Suporte via FAQ", available: true },
      { text: "Relatórios detalhados de gestão", available: false },
      { text: "Funcionalidades exclusivas", available: false },
      { text: "Histórico completo de atividades", available: false },
    ],
    buttonLabel: "Começar",
    buttonStyle: "bg-secondary-100/40",
  },
  {
    title: "Assinante",
    price: "R$29.99/mês",
    benefits: [
      { text: "Acesso completo ao sistema", available: true },
      { text: "Visualização ilimitada de imóveis", available: true },
      { text: "Suporte prioritário 24/7", available: true },
      { text: "Relatórios detalhados de gestão", available: true },
      { text: "Funcionalidades exclusivas", available: true },
      { text: "Histórico completo de atividades", available: true },
    ],
    buttonLabel: "Assinar",
    buttonStyle: "bg-secondary-100",
  },
];

const PlanCard = ({
  title,
  price,
  benefits,
  buttonLabel,
  buttonStyle,
  onClick,
  isPopular,
}) => (
  <motion.div
    whileHover={{ y: -10 }}
    className={`bg-white w-full rounded-2xl border-2 ${
      isPopular ? "border-secondary-100" : "border-gray-100"
    } px-8 py-10 transition-all duration-300 hover:shadow-xl group relative`}
  >
    {isPopular && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary-100 text-white px-4 py-1 rounded-full text-sm font-semibold">
        Mais Popular
      </div>
    )}
    <div className="w-full flex flex-col border-b border-gray-100 pb-6">
      <p className="text-xl font-semibold text-gray-600">{title}</p>
      <div className="flex items-end gap-1 mt-2">
        <p className="text-4xl font-extrabold text-gray-800">{price}</p>
        {price !== "Gratuito" && (
          <span className="text-gray-500 mb-1">/mês</span>
        )}
      </div>
    </div>
    <ul className="mt-6 space-y-4">
      {benefits.map((benefit, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className={`flex items-center gap-4 ${
            benefit.available ? "text-gray-800" : "text-gray-400"
          } font-medium`}
        >
          {benefit.available ? (
            <div className="bg-secondary-100/10 p-2 rounded-lg">
              <FaCheckSquare className="text-secondary-100 text-xl" />
            </div>
          ) : (
            <div className="bg-gray-100 p-2 rounded-lg">
              <FaArrowDown className="text-gray-400 text-xl" />
            </div>
          )}
          {benefit.text}
        </motion.li>
      ))}
    </ul>
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`w-full mt-8 rounded-xl ${buttonStyle} px-10 py-3 hover:bg-primary-100 text-white text-base font-semibold transition-all duration-300 hover:shadow-lg relative overflow-hidden group`}
      onClick={onClick}
    >
      <span className="relative z-10">{buttonLabel}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-primary-100 to-secondary-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.button>
  </motion.div>
);

const PlanosLandLarHub = () => {
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [userLoading, setUserLoading] = useState(true);
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("free");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        setIsAuthenticated(true);
      } else {
        setUser(null);
        setIsAuthenticated(false);
      }
      setUserLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleSubscribeClick = () => {
    setIsModalOpen(true);
  };

  const handleFreeClick = () => {
    setIsModalOpen(true);
  };

  return (
    <StripeProvider>
      <section id="plans" className="bg-white pt-16 md:pt-24 overflow-hidden">
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
              className="text-center mb-20"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="relative inline-block">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 0.1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute -top-10 left-1/2 -translate-x-1/2 text-8xl font-black text-primary-100 whitespace-nowrap"
                >
                  PLANOS
                </motion.span>
                <h2 className="text-5xl font-extrabold text-gray-800 relative z-10">
                  Confira abaixo os Planos{" "}
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
              </div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="mt-6 text-xl font-medium text-gray-600 max-w-3xl mx-auto"
              >
                Desbloqueie nosso gerenciamento imobiliário com os planos de
                assinatura.
              </motion.p>
            </motion.div>

            {/* Enhanced Plans Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 max-w-5xl mx-auto">
              {plans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <PlanCard
                    {...plan}
                    isPopular={plan.title === "Assinante"}
                    onClick={
                      plan.title === "Assinante"
                        ? handleSubscribeClick
                        : handleFreeClick
                    }
                  />
                </motion.div>
              ))}
              <div className="px-6 md:px-8 py-8 md:py-10">
                <p className="text-lg md:text-xl">{/* ... */}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PreLaunchModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </StripeProvider>
  );
};

export default PlanosLandLarHub;
