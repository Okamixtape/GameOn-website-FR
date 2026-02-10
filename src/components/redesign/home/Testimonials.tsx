/**
 * Testimonials Section - Témoignages Participants
 * 
 * @hydration client:visible (animations au scroll)
 * @performance Carousel optimisé avec Intersection Observer
 */

import { Star, Quote } from "lucide-react";
import { testimonials, testimonialsHeader } from "../../../data/redesign/testimonials";

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="group relative h-full">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-magenta rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl" />

      {/* Card */}
      <div className="relative h-full p-8 rounded-2xl bg-bg-dark/60 backdrop-blur-xl border border-neon-cyan/20 group-hover:border-neon-cyan/50 transition-all duration-300 flex flex-col">
        
        {/* Quote Icon */}
        <div className="mb-6">
          <Quote className="w-12 h-12 text-neon-cyan/30" />
        </div>

        {/* Quote Text */}
        <blockquote className="text-text-light text-lg mb-6 flex-grow">
          "{testimonial.quote}"
        </blockquote>

        {/* Rating */}
        <div className="flex gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          ))}
        </div>

        {/* Author */}
        <div className="flex items-center gap-4 pt-4 border-t border-neon-cyan/10">
          {/* Avatar Placeholder */}
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-cyan to-neon-magenta flex items-center justify-center text-white font-bold">
            {testimonial.name.charAt(0)}
          </div>
          
          <div>
            <div className="font-semibold text-text-light">
              {testimonial.name}
            </div>
            <div className="text-sm text-text-muted">
              {testimonial.role}
            </div>
          </div>
        </div>

        {/* Game Badge */}
        <div className="absolute top-4 right-4">
          <div className="px-3 py-1 rounded-full bg-neon-magenta/10 border border-neon-magenta/30 backdrop-blur-md">
            <span className="text-neon-magenta text-xs font-medium">
              🎮 {testimonial.game}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative py-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-dark via-bg-dark-accent to-bg-dark" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="px-4 py-2 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 backdrop-blur-md">
              <span className="text-neon-cyan text-sm font-medium">
                {testimonialsHeader.eyebrow}
              </span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 font-bold">
            <span className="bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text text-transparent">
              {testimonialsHeader.title}
            </span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            {testimonialsHeader.subtitle}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-500/10 border border-green-500/30 backdrop-blur-md">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-green-400 font-medium">
              98 participants satisfaits • Note moyenne 4.9/5
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
