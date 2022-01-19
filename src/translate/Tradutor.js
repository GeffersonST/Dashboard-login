import React, { useState } from "react";

const I18N_STORAGE_KEY = "i18nextLng";

const Tradutor = () => {
  const [language] = useState(localStorage.getItem(I18N_STORAGE_KEY));
  const handleSelectChange = (event) => {
    localStorage.setItem(I18N_STORAGE_KEY, event.target.value);
    // eslint-disable-next-line no-self-assign
    window.location = window.location;
  };
  return (
    <>
      <br />
      <br />
      <select onChange={handleSelectChange} value={language}>
        <option>Selecione um idioma</option>
        <option value="pt-BR">PT</option>
        <option value="en-US">EN</option>
        <option value="es-ES">ES</option>
      </select>
    </>
  );
};

export default Tradutor;
