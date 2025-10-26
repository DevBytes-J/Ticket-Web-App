// import { useState } from "react";
import { Ticket, Home } from "lucide-react";
import { Footer } from "../components/layout/Footer";

export const AuthPage = ({
  authMode,
  setAuthMode,
  authForm,
  setAuthForm,
  authErrors,
  onAuth,
  onNavigate,
}) => (
  <div className="min-h-screen flex flex-col bg-gray-50">
    <div className="flex-1 flex items-center justify-center px-4 py-12">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <Ticket className="w-16 h-16 mx-auto mb-4 text-indigo-600" />
          <h2 className="text-3xl font-bold text-gray-800">
            {authMode === "login" ? "Welcome Back" : "Create Account"}
          </h2>
        </div>
        <div>
          {authMode === "register" && (
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                value={authForm.name}
                onChange={(e) =>
                  setAuthForm({ ...authForm, name: e.target.value })
                }
                className={`w-full px-4 py-3 border ${
                  authErrors.name ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                placeholder="Your name"
              />
              {authErrors.name && (
                <p className="text-red-500 text-sm mt-1">{authErrors.name}</p>
              )}
            </div>
          )}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              value={authForm.email}
              onChange={(e) =>
                setAuthForm({ ...authForm, email: e.target.value })
              }
              className={`w-full px-4 py-3 border ${
                authErrors.email ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              placeholder="your@email.com"
            />
            {authErrors.email && (
              <p className="text-red-500 text-sm mt-1">{authErrors.email}</p>
            )}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              value={authForm.password}
              onChange={(e) =>
                setAuthForm({ ...authForm, password: e.target.value })
              }
              className={`w-full px-4 py-3 border ${
                authErrors.password ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              placeholder="••••••••"
            />
            {authErrors.password && (
              <p className="text-red-500 text-sm mt-1">{authErrors.password}</p>
            )}
          </div>
          <button
            onClick={onAuth}
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            {authMode === "login" ? "Sign In" : "Sign Up"}
          </button>
        </div>
        <div className="mt-6 text-center">
          <button
            onClick={() =>
              setAuthMode(authMode === "login" ? "register" : "login")
            }
            className="text-indigo-600 hover:text-indigo-800 font-semibold"
          >
            {authMode === "login"
              ? "Need an account? Sign up"
              : "Already have an account? Sign in"}
          </button>
        </div>
        <div className="mt-4 text-center">
          <button
            onClick={() => onNavigate("landing")}
            className="text-gray-600 hover:text-gray-800 flex items-center gap-2 mx-auto"
          >
            <Home className="w-4 h-4" />
            Back to home
          </button>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);
