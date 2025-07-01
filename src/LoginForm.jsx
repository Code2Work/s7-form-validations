import { useState } from "react";

// bu fonksiyon, parametre olarak aldığı email geçerliyse true, değilse false döner
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.toLowerCase());
}

const initialForm = {
  email: "",
  password: "",
  terms: false,
};

const initialErrors = {
  email: false,
  password: false,
  terms: false,
};

const errorMessages = {
  email: "Geçerli bir email adresi yaz",
  password: "Şifre en az 4 karakterden oluşmalı",
};

export default function LoginForm() {
  const [formData, setFormData] = useState(initialForm);

  const handleChange = (event) => {
    let { name, value, type } = event.target;
    value = type === "checkbox" ? event.target.checked : value;
    setFormData({ ...formData, [name]: value });
  };

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div className="form">
      <h1>Kayıt ol</h1>
      <form onSubmit={handleSubmit}>
        {/* eğer email ile ilgili bir hata varsa label'a hasError class'ı ekle */}
        <label className="form-input-line" data-testid="email-label">
          <span className="form-label">Email</span>
          <input
            className="form-input"
            name="email"
            onChange={handleChange}
            value={formData.email}
            data-testid="email"
            type="text"
          />

          {/* Email ile ilgili bir hata yoksa alttaki spani hiç gösterme */}
          <span className="error-message" role="email-error">
            {/* Email ile ilgili bir hata mesajı varsa burada görünmeli */}
          </span>
        </label>

        {/* eğer password ile ilgili bir hata varsa label'a hasError class'ı ekle */}
        <label data-testid="password-label" className="form-input-line">
          <span className="form-label">Şifre</span>
          <input
            className="form-input"
            name="password"
            onChange={handleChange}
            value={formData.password}
            data-testid="password"
            type="text"
          />

          {/* Password ile ilgili bir hata yoksa alttaki spani hiç gösterme */}
          <span className="error-message" role="password-error">
            {/* Password ile ilgili bir hata mesajı varsa burada görünmeli */}
          </span>
        </label>

        {/* eğer terms ile ilgili bir hata varsa label'a hasError class'ı ekle */}
        <label className="form-ch-line">
          <input
            type="checkbox"
            name="terms"
            data-testid="terms"
            checked={formData.terms}
            onChange={handleChange}
          />
          <span className="ch-label">Kullanım koşullarını kabul ediyorum.</span>
        </label>

        {/* formdaki hata durumuna göre bu button disabled olmalı ya da olmamalı */}
        <button className="send-button" data-testid="send" disabled={false}>
          Gönder
        </button>
      </form>
    </div>
  );
}
