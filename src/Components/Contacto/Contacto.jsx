import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  Info,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { contact, emailjsConfig, serviceOptions, whatsappLink } from "../../data/site";
import Reveal from "../UI/Reveal";
import SectionHeading from "../UI/SectionHeading";

const INITIAL_FORM = {
  user_name: "",
  user_email: "",
  user_phone: "",
  service: serviceOptions[0],
  message: "",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const INFO_ITEMS = [
  { icon: Phone, label: "Teléfono", value: contact.phoneDisplay, href: `tel:+${contact.phoneRaw}` },
  { icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
  { icon: MapPin, label: "Oficina", value: contact.address, href: contact.mapLink, external: true },
  { icon: Clock, label: "Horarios", value: contact.hours },
];

/** Mensaje de error asociado a un campo. */
function FieldError({ id, message }) {
  if (!message) return null;

  return (
    <p id={id} role="alert" className="mt-2 flex items-center gap-1.5 text-xs font-medium text-ember-400">
      <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
      {message}
    </p>
  );
}

export default function Contacto() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ state: "idle", message: "" });
  const formRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  const resetStatusLater = (delay = 8000) => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setStatus({ state: "idle", message: "" }), delay);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  };

  const validate = () => {
    const nextErrors = {};

    if (!form.user_name.trim()) nextErrors.user_name = "Contanos tu nombre.";
    if (!form.user_email.trim()) nextErrors.user_email = "Necesitamos un email para responderte.";
    else if (!EMAIL_PATTERN.test(form.user_email.trim())) nextErrors.user_email = "Revisá el formato del email.";
    if (!form.message.trim()) nextErrors.message = "Escribí tu consulta.";
    else if (form.message.trim().length < 10) nextErrors.message = "Contanos un poco más (mínimo 10 caracteres).";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validate()) {
      setStatus({ state: "error", message: "Revisá los campos marcados e intentá nuevamente." });
      resetStatusLater(6000);
      return;
    }

    setStatus({ state: "sending", message: "" });

    try {
      await emailjs.sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        formRef.current,
        emailjsConfig.publicKey
      );

      setStatus({ state: "success", message: "¡Mensaje enviado! Te respondemos a la brevedad." });
      setForm(INITIAL_FORM);
      setErrors({});
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setStatus({
        state: "error",
        message: "No pudimos enviar el mensaje. Intentá de nuevo o escribinos por WhatsApp.",
      });
    } finally {
      resetStatusLater();
    }
  };

  const isSending = status.state === "sending";

  return (
    <section id="contacto" className="relative overflow-hidden border-t border-white/5 py-20 sm:py-24 lg:py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-steel-900/60 via-steel-950 to-steel-950" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-radial-gold opacity-50" aria-hidden="true" />

      <div className="container-x">
        <SectionHeading
          eyebrow="Contacto"
          title="Hablemos de tu"
          highlight="próxima carga"
          description="Dejanos los datos del viaje y te respondemos con disponibilidad, tiempos y presupuesto."
        />

        <div className="mt-14 grid gap-8 lg:mt-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          {/* Datos de contacto */}
          <Reveal direction="right" className="flex flex-col gap-5">
            <ul className="flex flex-col gap-3">
              {INFO_ITEMS.map(({ icon: Icon, label, value, href, external }) => {
                const itemContent = (
                  <>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-gold-300 ring-1 ring-white/10">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[0.68rem] font-semibold tracking-[0.18em] text-steel-400 uppercase">
                        {label}
                      </span>
                      <span className="mt-1 block text-sm font-medium break-words text-white">{value}</span>
                    </span>
                  </>
                );

                return (
                  <li key={label}>
                    {href ? (
                      <a
                        href={href}
                        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-gold-400/40 hover:bg-white/[0.07]"
                      >
                        {itemContent}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                        {itemContent}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="flex items-center gap-2 font-display text-sm font-bold text-white">
                <Info className="h-4 w-4 text-gold-300" aria-hidden="true" />
                Respuesta rápida
              </p>
              <p className="mt-2 text-sm/relaxed text-steel-300">
                Para consultas urgentes o para coordinar un viaje en el día, escribinos por WhatsApp.
              </p>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp mt-4 w-full"
              >
                Escribir por WhatsApp
              </a>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/10">
              <iframe
                title="Ubicación de Minera del Litoral S.R.L. en el mapa"
                src={contact.mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-56 w-full grayscale-[35%] transition duration-500 hover:grayscale-0"
              />
            </div>
          </Reveal>

          {/* Formulario */}
          <Reveal direction="left">
            <div className="card-surface rounded-3xl p-6 sm:p-8">
              <form ref={formRef} onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="formNombre"
                      className="mb-2 block text-xs font-semibold tracking-[0.12em] text-steel-300 uppercase"
                    >
                      Nombre y apellido *
                    </label>
                    <input
                      id="formNombre"
                      name="user_name"
                      type="text"
                      autoComplete="name"
                      required
                      placeholder="Tu nombre"
                      value={form.user_name}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.user_name)}
                      aria-describedby={errors.user_name ? "errorNombre" : undefined}
                      className="field"
                    />
                    <FieldError id="errorNombre" message={errors.user_name} />
                  </div>

                  <div>
                    <label
                      htmlFor="formEmail"
                      className="mb-2 block text-xs font-semibold tracking-[0.12em] text-steel-300 uppercase"
                    >
                      Email *
                    </label>
                    <input
                      id="formEmail"
                      name="user_email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder="tu@email.com"
                      value={form.user_email}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.user_email)}
                      aria-describedby={errors.user_email ? "errorEmail" : undefined}
                      className="field"
                    />
                    <FieldError id="errorEmail" message={errors.user_email} />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="formTelefono"
                      className="mb-2 block text-xs font-semibold tracking-[0.12em] text-steel-300 uppercase"
                    >
                      Teléfono (opcional)
                    </label>
                    <input
                      id="formTelefono"
                      name="user_phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+54 9 ..."
                      value={form.user_phone}
                      onChange={handleChange}
                      className="field"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="formServicio"
                      className="mb-2 block text-xs font-semibold tracking-[0.12em] text-steel-300 uppercase"
                    >
                      Servicio de interés
                    </label>
                    <select
                      id="formServicio"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="field appearance-none bg-steel-900/60"
                    >
                      {serviceOptions.map((option) => (
                        <option key={option} value={option} className="bg-steel-900 text-white">
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="formMensaje"
                    className="mb-2 block text-xs font-semibold tracking-[0.12em] text-steel-300 uppercase"
                  >
                    Mensaje *
                  </label>
                  <textarea
                    id="formMensaje"
                    name="message"
                    rows="5"
                    required
                    placeholder="Contanos qué necesitás mover, desde dónde y hacia dónde."
                    value={form.message}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "errorMensaje" : undefined}
                    className="field resize-y"
                  />
                  <FieldError id="errorMensaje" message={errors.message} />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="btn-primary w-full disabled:cursor-wait disabled:opacity-70"
                >
                  {isSending ? (
                    <>
                      Enviando
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                    </>
                  ) : (
                    <>
                      Enviar mensaje
                      <Send className="h-4 w-4" aria-hidden="true" />
                    </>
                  )}
                </button>

                <p className="text-center text-xs/relaxed text-steel-400">
                  Usamos tus datos únicamente para responder tu consulta.
                </p>

                <div role="status" aria-live="polite">
                  {status.message && (
                    <p
                      className={`flex items-start gap-2.5 rounded-xl border p-4 text-sm font-medium ${
                        status.state === "success"
                          ? "border-emerald-400/40 bg-emerald-500/10 text-emerald-200"
                          : "border-ember-400/40 bg-ember-500/10 text-ember-200"
                      }`}
                    >
                      {status.state === "success" ? (
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                      ) : (
                        <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                      )}
                      {status.message}
                    </p>
                  )}
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
