import React, { useState } from 'react';
import { useFormStorage } from '../hooks/useFormStorage';

export const Contact = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    requirements: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const { addSubmission } = useFormStorage();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email
    if (!validateEmail(formData.email)) {
      alert('Por favor, ingresa un correo electrónico válido.');
      return;
    }

    // Validate phone
    if (formData.phone.length < 8) {
      alert('Por favor, ingresa un teléfono válido.');
      return;
    }

    // Prepare data to store
    const submissionData = {
      ...formData,
      submissionDate: new Date().toISOString(),
      timestamp: Date.now()
    };

    // Add to localStorage
    addSubmission(submissionData);

    // Log to console
    console.log('Datos del Formulario Capturados:');
    console.log(JSON.stringify(submissionData, null, 2));

    // Show success message
    setShowSuccess(true);

    // Reset form
    setFormData({
      businessName: '',
      contactName: '',
      email: '',
      phone: '',
      requirements: ''
    });

    // Hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);

    // Scroll to success message
    const successElement = document.getElementById('successMessage');
    if (successElement) {
      successElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  return (
    <section id="contact" className="py-24 px-4 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-primary/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-primary font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Connect</span>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-text-main">Cuéntanos tu Idea</h2>
          <p className="text-xl text-text-main/60">Nos gustaría saber más sobre tu proyecto</p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-primary-light mx-auto rounded-full mt-4"></div>
        </div>

        {/* Success Message */}
        {showSuccess && (
          <div id="successMessage" className="contact-success slide-down mb-8">
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div>
                <h3 className="text-green-500 dark:text-green-400 font-semibold">¡Mensaje enviado con éxito!</h3>
                <p className="text-green-600 dark:text-green-300/80 text-sm">Hemos recibido tu información y nos contactaremos pronto.</p>
              </div>
            </div>
          </div>
        )}

        {/* Form */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#e81cff] to-[#40c9ff] rounded-[18px] blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="form-container relative">
            <div className="border-b border-white/10 pb-4 mb-2">
              <div className="flex justify-center sm:justify-start gap-1.5 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]"></div>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Formulario</p>
                <h3 className="text-2xl font-black text-white mt-1">Envíanos tu proyecto</h3>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="businessName">Nombre del Negocio *</label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  placeholder="Mi Tienda / Mi Restaurante"
                  value={formData.businessName}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contactName">Nombre de Contacto *</label>
                <input
                  type="text"
                  id="contactName"
                  name="contactName"
                  placeholder="Juan Pérez"
                  value={formData.contactName}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Correo Electrónico *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Teléfono *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+56 9 9696 1958"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="requirements">Requerimientos / Idea del Proyecto *</label>
                <textarea
                  id="requirements"
                  name="requirements"
                  placeholder="Describe tu idea, necesidades y objetivos para tu sitio web..."
                  rows="6"
                  value={formData.requirements}
                  onChange={handleChange}
                  className="form-textarea"
                  required
                ></textarea>
              </div>

              <button type="submit" className="form-submit-btn">
                Enviar Solicitud
              </button>

              <p className="form-privacy-note">
                Protegemos tu privacidad. Tus datos serán almacenados de forma segura.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
