import { useCallback } from 'react';

export const useFormStorage = () => {
  const addSubmission = useCallback((formData) => {
    try {
      let submissions = JSON.parse(localStorage.getItem('contactFormSubmissions')) || [];
      submissions.push(formData);
      localStorage.setItem('contactFormSubmissions', JSON.stringify(submissions));
      
      console.log('Datos guardados en localStorage');
      console.log(`Total de envíos guardados: ${submissions.length}`);
      return true;
    } catch (error) {
      console.error('❌ Error al guardar en localStorage:', error);
      return false;
    }
  }, []);

  const getSubmissions = useCallback(() => {
    try {
      const submissions = JSON.parse(localStorage.getItem('contactFormSubmissions')) || [];
      return submissions;
    } catch (error) {
      console.error('Error al recuperar datos:', error);
      return [];
    }
  }, []);

  const clearSubmissions = useCallback(() => {
    try {
      localStorage.removeItem('contactFormSubmissions');
      console.log('Todos los envíos han sido eliminados');
      return true;
    } catch (error) {
      console.error('Error al limpiar datos:', error);
      return false;
    }
  }, []);

  return {
    addSubmission,
    getSubmissions,
    clearSubmissions
  };
};

export default useFormStorage;
