"use client";
import { useState } from "react";

export default function Spring2025() {
  const [password, setPassword] = useState("");
  const [unlocked, setUnlocked] = useState(false);

  const correctPassword = "academic2025";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (password === correctPassword) setUnlocked(true);
    else alert("Incorrect password");
  }

  return (
    <div className="page">
      <div className="container flex flex-col gap-6">
        {!unlocked ? (
          <form onSubmit={handleSubmit} className="max-w-md w-full mx-auto">
            <h1 className="text-xl font-bold mb-2">Enter Password</h1>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border px-4 py-2 mb-4"
              placeholder="Password"
            />
            <button type="submit" className="px-4 py-2 bg-black text-white">
              Unlock Journal
            </button>
          </form>
        ) : (
          <iframe
            src="/spring-2025.pdf"
            className="w-full h-screen"
            title="Spring 2025 Journal"
          />
        )}
      </div>
    </div>
  );
}
