import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Paperclip, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    attachment: null as File | null,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send this to your backend
    // For now, we'll open the mail client
    const mailtoLink = `mailto:robocreamcanada@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\n\nMessage: ${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-[#B0B0B0]">
              We'd love to hear from you. Send us a message and we'll respond as
              soon as possible.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="md:col-span-2"
            >
              <form
                onSubmit={handleSubmit}
                className="space-y-6 bg-[#1A1A1A] p-8 rounded-lg shadow-lg"
              >
                <div className="space-y-2">
                  <Label htmlFor="name">Name / Company / Mall</Label>
                  <Input
                    id="name"
                    placeholder="Enter your name or organization"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="What is this regarding?"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Your message here..."
                    className="min-h-[150px]"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="attachment">Attachment (optional)</Label>
                  <Input
                    id="attachment"
                    type="file"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        attachment: e.target.files?.[0] || null,
                      })
                    }
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#59D1C5] hover:bg-[#59D1C5]/90 text-white"
                >
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </form>
            </motion.div>

            {/* Direct Email Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="md:col-span-1"
            >
              <div className="bg-[#1A1A1A] p-8 rounded-lg shadow-lg">
                <div className="flex items-center space-x-3 mb-6">
                  <Mail className="h-6 w-6 text-[#59D1C5]" />
                  <h2 className="text-xl font-semibold">Direct Email</h2>
                </div>
                <p className="text-[#B0B0B0] mb-4">
                  Prefer to email us directly? You can reach us at:
                </p>
                <a
                  href="mailto:robocreamcanada@gmail.com"
                  className="text-[#59D1C5] hover:text-[#59D1C5]/80 font-medium break-all"
                >
                  robocreamcanada@gmail.com
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
