"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Microscope,
  Pill,
  Stethoscope,
  TrendingUp,
  GraduationCap,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Link from "next/link";

export function LandingPageComponent() {
  return (
    <div className="flex flex-col min-h-screen bg-green-50">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-white shadow-sm">
        <Link className="flex items-center justify-center" href="#">
          <Microscope className="h-8 w-8 text-green-600" />
          <span className="ml-2 text-2xl font-bold text-green-600">
            Pharmalance
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:text-green-600"
            href="#services"
          >
            Services
          </Link>
          <Link
            className="text-sm font-medium hover:text-green-600"
            href="#fellowship"
          >
            Fellowship
          </Link>
          <Link
            className="text-sm font-medium hover:text-green-600"
            href="#contact"
          >
            Contact
          </Link>
          <Link
            className="text-sm font-medium hover:text-green-600"
            href="#newsletter"
          >
            Newsletter
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Precision Medicine & Biomarker Consulting
              </h1>
              <p className="max-w-[800px] text-gray-600 md:text-xl">
                Empowering the future of healthcare through expert guidance in
                precision medicine, biomarker development, and innovative drug
                discovery strategies.
              </p>
              <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 py-3 text-lg">
                Get Started
              </Button>
            </div>
          </div>
        </section>
        <section
          id="services"
          className="w-full py-12 md:py-24 lg:py-32 bg-white"
        >
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12">
              Our Services
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 text-center">
                <Pill className="h-12 w-12 text-green-600" />
                <h3 className="text-xl font-bold">
                  Precision Medicine Strategy
                </h3>
                <p className="text-gray-600">
                  Tailored approaches for developing targeted therapies and
                  personalized treatment plans.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Stethoscope className="h-12 w-12 text-green-600" />
                <h3 className="text-xl font-bold">Biomarker Development</h3>
                <p className="text-gray-600">
                  Identification and validation of biomarkers for drug efficacy
                  and patient selection.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <TrendingUp className="h-12 w-12 text-green-600" />
                <h3 className="text-xl font-bold">
                  Market Analysis & Strategy
                </h3>
                <p className="text-gray-600">
                  In-depth analysis of the precision medicine landscape and
                  strategic planning for market entry.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="fellowship"
          className="w-full py-12 md:py-24 lg:py-32 bg-green-100"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <GraduationCap className="h-12 w-12 text-green-600" />
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Undergraduate Fellowship Program
              </h2>
              <p className="max-w-[600px] text-gray-600 md:text-xl">
                Coming Soon: Our innovative fellowship program for
                undergraduates passionate about precision medicine and biomarker
                research.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">Program Highlights:</h3>
                <ul className="text-left text-gray-600 space-y-2">
                  <li>
                    • Hands-on experience in cutting-edge precision medicine
                    research
                  </li>
                  <li>
                    • Mentorship from industry experts in biomarker development
                  </li>
                  <li>
                    • Exposure to various aspects of targeted drug development
                  </li>
                  <li>
                    • Networking opportunities with leading pharmaceutical
                    companies
                  </li>
                </ul>
              </div>
              <p className="text-sm text-gray-500 italic">
                Stay tuned for more details and application information.
              </p>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-green-600 text-white"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Contact Us
              </h2>
              <p className="max-w-[600px] text-green-100 md:text-xl">
                Ready to transform your precision medicine research? Get in
                touch with us today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <div className="flex items-center space-x-2">
                  <Mail className="h-6 w-6" />
                  <span>info@pharmalance.io</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-6 w-6" />
                  <span>+1 (555) 555-5555</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-6 w-6" />
                  <span>123 Pharma St, Research City, PC 12345</span>
                </div>
              </div>
              <Button
                className="bg-white text-green-600 hover:bg-green-100 rounded-full px-8 py-3 text-lg mt-6"
                onClick={() => alert("Coming Soon!")}
              >
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </section>
        <section
          id="newsletter"
          className="w-full py-12 md:py-24 lg:py-32 bg-green-50"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Stay Informed
              </h2>
              <p className="max-w-[600px] text-gray-600 md:text-xl">
                Subscribe to our newsletter for the latest updates in precision
                medicine, biomarker research, and industry insights.
              </p>
              <div className="w-full max-w-sm space-y-2">
                <form
                  className="flex space-x-2"
                  onSubmit={() => alert("Coming Soon!")}
                >
                  <Input
                    className="flex-1 rounded-full"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button
                    className="bg-green-600 text-white hover:bg-green-700 rounded-full px-6"
                    type="submit"
                  >
                    Subscribe
                  </Button>
                </form>
                <p className="text-xs text-gray-500">
                  By subscribing, you agree to our Terms & Conditions and
                  Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
        <p className="text-xs text-gray-500">
          © 2023 Pharmalance. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  );
}