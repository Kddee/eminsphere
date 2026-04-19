import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Award, BookOpen, Globe, CheckCircle, Users, Zap, Shield, TrendingUp, User, Building, FileText, Send } from "lucide-react";

const benefits = [
  {
    icon: Award,
    title: "Prestigious Academic Recognition",
    desc: "Gain formal recognition as an official reviewer, enhancing your academic profile and professional standing at an international level.",
  },
  {
    icon: BookOpen,
    title: "Early Access to Cutting-Edge Research",
    desc: "Review high-quality manuscripts prior to publication and stay ahead of emerging trends across multiple technical domains.",
  },
  {
    icon: Globe,
    title: "Global Scholarly Networking",
    desc: "Collaborate with editors, keynote speakers, and researchers from leading universities, research centers, and industries worldwide.",
  },
  {
    icon: CheckCircle,
    title: "Contribution to Research Excellence",
    desc: "Uphold ethical research practices, improve manuscript quality, and guide authors toward impactful contributions.",
  },
  {
    icon: Users,
    title: "International Collaboration",
    desc: "Connect with a diverse community of experts from 50+ countries, expanding your professional network globally.",
  },
  {
    icon: Zap,
    title: "Fast-Track Publication Benefits",
    desc: "Receive priority access to conference proceedings and special publication opportunities for your research.",
  },
];

const expertiseAreas = [
  "Artificial Intelligence, Machine Learning & Data Science",
  "Electronics, Communication & Embedded Systems",
  "Computer Science, Cyber Security & Cloud Computing",
  "Electrical Engineering, Renewable Energy & Smart Grids",
  "Mechanical Engineering, Materials & Manufacturing",
  "Civil Engineering, Smart Infrastructure & Sustainability",
  "Interdisciplinary & Emerging Technologies",
];

const reviewerStats = [
  { number: "500+", label: "Active Reviewers" },
  { number: "50+", label: "Countries Represented" },
  { number: "2000+", label: "Manuscripts Reviewed" },
  { number: "98%", label: "Satisfaction Rate" },
];

const processSteps = [
  {
    number: "01",
    title: "Submit Application",
    desc: "Fill out the application form with your academic profile and expertise areas.",
  },
  {
    number: "02",
    title: "Profile Review",
    desc: "Our team reviews your credentials and research background for verification.",
  },
  {
    number: "03",
    title: "Notification",
    desc: "Receive confirmation email with reviewer guidelines and first manuscript assignment.",
  },
  {
    number: "04",
    title: "Begin Reviewing",
    desc: "Start contributing to research excellence and gain global recognition.",
  },
];

const ApplyAsReviewer = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    institution: "",
    country: "",
    title: "",
    expertise: [],
    yearsExperience: "",
    publications: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleExpertiseChange = (area) => {
    setFormData((prev) => ({
      ...prev,
      expertise: prev.expertise.includes(area)
        ? prev.expertise.filter((e) => e !== area)
        : [...prev.expertise, area],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Format the data for email
      const formDataObj = new FormData();
      formDataObj.append("First Name", formData.firstName);
      formDataObj.append("Last Name", formData.lastName);
      formDataObj.append("Email", formData.email);
      formDataObj.append("Title", formData.title);
      formDataObj.append("Institution", formData.institution);
      formDataObj.append("Country", formData.country);
      formDataObj.append("Years of Experience", formData.yearsExperience);
      formDataObj.append("Publications", formData.publications);
      formDataObj.append("Areas of Expertise", formData.expertise.join(", "));
      formDataObj.append("Additional Message", formData.message);
      formDataObj.append("_subject", `New Reviewer Application: ${formData.firstName} ${formData.lastName}`);
      formDataObj.append("_captcha", "false");

      // Send to FormSubmit endpoint
      const response = await fetch("https://formsubmit.co/info@eminsphere.com", {
        method: "POST",
        body: formDataObj,
      });

      if (response.ok) {
        setSubmitStatus("success");
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            institution: "",
            country: "",
            title: "",
            expertise: [],
            yearsExperience: "",
            publications: "",
            message: "",
          });
          setSubmitStatus("");
        }, 3000);
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error sending application:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(""), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen page-innovation">
      <Header />

      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a5f] via-[#2666c1] to-[#26498b]" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl opacity-10" />
          <div className="absolute bottom-0 left-20 w-64 h-64 bg-yellow-400 rounded-full blur-3xl opacity-10" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-white/20 text-white px-4 py-2 rounded-full mb-6 backdrop-blur-sm border border-white/30"
          >
            <span className="text-sm font-semibold uppercase tracking-wider">Global Academic Initiative</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Join Our Prestigious Reviewer Panel
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed"
          >
            Be part of an elite network of international experts shaping the future of academic research. Your expertise matters in advancing global scholarly excellence.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {reviewerStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600">{stat.number}</div>
                <div className="text-sm md:text-base text-slate-600 font-medium mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Role & Importance */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Why Reviewers Matter
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Academic reviewers are the guardians of scholarly integrity. They ensure that research published through our platforms meets the highest international standards of originality, rigor, and impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: Shield, title: "Quality Assurance", desc: "Maintain rigorous peer review standards" },
              { icon: TrendingUp, title: "Research Impact", desc: "Guide authors toward impactful contributions" },
              { icon: Users, title: "Global Community", desc: "Connect with leading researchers worldwide" },
              { icon: Award, title: "Professional Growth", desc: "Enhance your academic reputation" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100"
              >
                <item.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-16"
          >
            Exclusive Reviewer Benefits
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-sm border-l-4 border-l-blue-600 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <b.icon className="w-8 h-8 text-blue-600 mt-1" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{b.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-16"
          >
            Simple Application Process
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {i < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-12 -right-8 w-16 h-1 bg-gradient-to-r from-blue-600 to-blue-400" />
                )}
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Start Your Application
            </h2>
            <p className="text-lg text-slate-600">
              Fill out this form and we'll guide you through joining our prestigious reviewer network.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-blue-100"
          >
            {/* Personal Information */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <User className="w-6 h-6 text-blue-600" /> Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name *"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name *"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition md:col-span-2"
                />
              </div>
            </div>

            {/* Professional Information */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Building className="w-6 h-6 text-blue-600" /> Professional Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="title"
                  placeholder="Academic/Professional Title *"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                />
                <input
                  type="text"
                  name="institution"
                  placeholder="Institution/Organization *"
                  value={formData.institution}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                />
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                >
                  <option value="">Select Country *</option>
                  <option value="United States">United States</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="India">India</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                  <option value="Germany">Germany</option>
                  <option value="France">France</option>
                  <option value="China">China</option>
                  <option value="Japan">Japan</option>
                  <option value="Brazil">Brazil</option>
                  <option value="Other">Other</option>
                </select>
                <select
                  name="yearsExperience"
                  value={formData.yearsExperience}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                >
                  <option value="">Years of Experience *</option>
                  <option value="1-3">1-3 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5-10">5-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
                <input
                  type="number"
                  name="publications"
                  placeholder="Number of Publications/Research Papers"
                  value={formData.publications}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                />
              </div>
            </div>

            {/* Areas of Expertise */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Award className="w-6 h-6 text-blue-600" /> Areas of Expertise *
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {expertiseAreas.map((area) => (
                  <label key={area} className="flex items-center p-4 border border-slate-300 rounded-lg hover:bg-blue-50 cursor-pointer transition">
                    <input
                      type="checkbox"
                      checked={formData.expertise.includes(area)}
                      onChange={() => handleExpertiseChange(area)}
                      className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-600"
                    />
                    <span className="ml-3 text-slate-700">{area}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Additional Message */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <FileText className="w-6 h-6 text-blue-600" /> Additional Information
              </h3>
              <textarea
                name="message"
                placeholder="Tell us about your research interests, publication links, or any additional information you'd like to share..."
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition resize-none"
              />
            </div>

            {/* Submit */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all disabled:opacity-50 flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </motion.button>

            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg text-center"
              >
                ✓ Success! Your application has been sent to info@eminsphere.com
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg text-center"
              >
                ✗ Error sending application. Please try again.
              </motion.div>
            )}
          </motion.form>
        </div>
      </section>

      {/* Areas of Expertise Reference */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">Available Expertise Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {expertiseAreas.map((area) => (
              <div key={area} className="flex items-center gap-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-100">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-slate-700">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ApplyAsReviewer;
