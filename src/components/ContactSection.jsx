"use client";

import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { MusicBackground } from "./MusicBackground";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message envoyé !",
        description: "Merci pour votre message. Je vous répondrai bientôt.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-4 bg-black text-white isolate overflow-hidden"
    >
      <MusicBackground />

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Titre */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center flex flex-wrap items-center justify-center gap-2">
          Contactez{" "}
          <span className="bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent animate-gradient">
            Moi
          </span>
        </h2>

        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Pour toute proposition musicale, collaboration ou projet artistique,
          je suis à votre écoute.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Informations</h3>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-cyan-400/10 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-cyan-400" />
                </div>
                <a
                  href="mailto:iskandar.benamou@gmail.com"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  iskandar.benamou@gmail.com
                </a>
              </div>

              {/* Téléphone */}
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-cyan-400/10 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-cyan-400" />
                </div>
                <a
                  href="tel:+21654930992"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  +216 54 930 992
                </a>
              </div>

              {/* Adresse */}
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-cyan-400/10 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-cyan-400" />
                </div>
                <p className="text-gray-300">
                  Dar Chaabane El Fehri, Nabeul, Tunisie
                </p>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div className="pt-8">
              <h4 className="font-medium text-lg mb-4 text-center md:text-left">
                Suivez-moi sur les réseaux sociaux
              </h4>

              <div className="flex items-center space-x-6 justify-center md:justify-start">
                <a
                  href="https://www.facebook.com/iskandar.benamou"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="p-3 rounded-full bg-cyan-400/10 hover:bg-cyan-400/20 transition-colors flex items-center justify-center"
                >
                  <Facebook className="w-6 h-6 text-cyan-400" />
                </a>

                <a
                  href="https://www.instagram.com/iskander_benamou/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="p-3 rounded-full bg-cyan-400/10 hover:bg-cyan-400/20 transition-colors flex items-center justify-center"
                >
                  <Instagram className="w-6 h-6 text-cyan-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="bg-black/70 p-8 rounded-lg shadow-xl backdrop-blur-sm">
            <h3 className="text-2xl font-semibold mb-6">Envoyer un message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Votre nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Votre nom complet"
                  className="w-full px-4 py-3 rounded-md border border-gray-700 bg-black text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Votre email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="votreadresse@email.com"
                  className="w-full px-4 py-3 rounded-md border border-gray-700 bg-black text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Votre message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Bonjour Iskandar, je souhaiterais discuter de..."
                  className="w-full px-4 py-3 rounded-md border border-gray-700 bg-black text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-cyan-400 hover:bg-cyan-500 text-black font-semibold transition-all"
                )}
              >
                {isSubmitting ? "Envoi..." : "Envoyer"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
