"use client";

import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
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
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-cyan-900/20 to-blue-900/30 -z-10 backdrop-blur-sm" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Contactez <span className="text-cyan-400">Iskandar Ben Amou</span>
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
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-cyan-400/10">
                  <Mail className="h-6 w-6 text-cyan-400" />
                </div>
                <div>
                  <a
                    href="mailto:iskandar.percuskan@gmail.com"
                    className="text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    iskandar.benamou@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-cyan-400/10">
                  <Phone className="h-6 w-6 text-cyan-400" />
                </div>
                <div>
                  <a
                    href="tel:+21622345678"
                    className="text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    +216 22 345 678
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-cyan-400/10">
                  <MapPin className="h-6 w-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-medium">{" "}</h4>
                  <p className="text-gray-300">
                    Dar Chaabane El Fehri, Nabeul, Tunisie
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Réseaux sociaux</h4>
              <div className="flex space-x-4 justify-center md:justify-start">
                <a href="#" target="_blank">
                  <Linkedin className="text-cyan-400 hover:text-white transition-colors" />
                </a>
                <a href="#" target="_blank">
                  <Twitter className="text-cyan-400 hover:text-white transition-colors" />
                </a>
                <a href="#" target="_blank">
                  <Instagram className="text-cyan-400 hover:text-white transition-colors" />
                </a>
                <a href="#" target="_blank">
                  <Twitch className="text-cyan-400 hover:text-white transition-colors" />
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
                <label htmlFor="message" className="block text-sm font-medium mb-2">
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
