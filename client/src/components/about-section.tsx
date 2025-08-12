import { Trophy } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Get to know more about my journey, passion, and what drives me as a developer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-slate-800">My Journey</h3>
            <p className="text-slate-600 leading-relaxed">
              With over 5 years of experience in web development, I've had the privilege of working with
              diverse clients and projects. My journey started with a curiosity about how websites work,
              and it has evolved into a passion for creating digital solutions that make a difference.
            </p>
            <p className="text-slate-600 leading-relaxed">
              I believe in the power of clean code, thoughtful design, and continuous learning.
              Every project is an opportunity to push boundaries and create something meaningful.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-slate-600">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">30+</div>
                <div className="text-sm text-slate-600">Happy Clients</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
              alt="Modern developer workspace with laptop and code"
              className="rounded-xl shadow-lg w-full h-auto"
            />

            {/* Floating achievement card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Trophy className="text-white w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold text-slate-800">5+ Years</div>
                  <div className="text-sm text-slate-600">Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
