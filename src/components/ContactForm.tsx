import { useState, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';

const EMAILJS_PUBLIC_KEY = import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY as string;
const EMAILJS_SERVICE_ID = import.meta.env.PUBLIC_EMAILJS_SERVICE_ID as string;
const EMAILJS_TEMPLATE_ID = import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID as string;

interface FormState {
  name: string;
  email: string;
  objet: string;
  message: string;
}

const emptyForm: FormState = { name: '', email: '', objet: '', message: '' };

export default function ContactForm() {
  const [formData, setFormData] = useState<FormState>(emptyForm);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{ message: string; success: boolean } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const showStatus = (message: string, success: boolean) => {
    setStatus({ message, success });
    setTimeout(() => setStatus(null), 5000);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      showStatus('Merci de remplir tous les champs obligatoires.', false);
      return;
    }

    setIsLoading(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { ...formData },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      showStatus('Merci, votre message a bien été envoyé.', true);
      setFormData(emptyForm);
    } catch {
      showStatus("Une erreur est survenue. Réessayez ou écrivez-moi directement par email.", false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <label className="block">
          <span className="font-mono text-xs uppercase tracking-wider text-secondary">
            Nom <span className="text-accent">*</span>
          </span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Votre nom"
            className="mt-2 w-full border-b border-border bg-transparent py-2 text-fg placeholder:text-muted focus:border-accent focus:outline-none"
          />
        </label>

        <label className="block">
          <span className="font-mono text-xs uppercase tracking-wider text-secondary">
            Email <span className="text-accent">*</span>
          </span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="nom@exemple.com"
            className="mt-2 w-full border-b border-border bg-transparent py-2 text-fg placeholder:text-muted focus:border-accent focus:outline-none"
          />
        </label>
      </div>

      <label className="block">
        <span className="font-mono text-xs uppercase tracking-wider text-secondary">Objet</span>
        <input
          type="text"
          name="objet"
          value={formData.objet}
          onChange={handleChange}
          placeholder="Sujet du message"
          className="mt-2 w-full border-b border-border bg-transparent py-2 text-fg placeholder:text-muted focus:border-accent focus:outline-none"
        />
      </label>

      <label className="block">
        <span className="font-mono text-xs uppercase tracking-wider text-secondary">
          Message <span className="text-accent">*</span>
        </span>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Votre message..."
          className="mt-2 w-full resize-none border-b border-border bg-transparent py-2 text-fg placeholder:text-muted focus:border-accent focus:outline-none"
        />
      </label>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full border border-fg bg-fg py-4 font-mono text-xs uppercase tracking-wider text-bg transition-colors hover:bg-transparent hover:text-fg disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isLoading ? 'Envoi en cours…' : 'Envoyer le message'}
      </button>

      {status && (
        <p
          role="status"
          className={`font-mono text-xs uppercase tracking-wider ${status.success ? 'text-accent' : 'text-red-600'}`}
        >
          {status.message}
        </p>
      )}
    </form>
  );
}
