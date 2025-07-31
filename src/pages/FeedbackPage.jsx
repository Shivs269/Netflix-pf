import React, { useState, useEffect } from "react";

const STORAGE_KEY = "guest_feedbacks";

const FeedbackPage = () => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    setFeedbacks(saved);
  }, []);

  const submit = () => {
    if (!text.trim()) return;
    const newEntry = {
      id: Date.now(),
      name: name || "Anonymous",
      text: text.trim(),
      timestamp: new Date().toISOString(),
    };
    const updated = [newEntry, ...feedbacks];
    setFeedbacks(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setText("");
    setName("");
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">Guest Feedback</h1>
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            placeholder="Your Name (optional)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="flex-1 px-4 py-2 bg-gray-800 rounded-md focus:outline-none"
          />
          <textarea
            placeholder="Leave your feedback..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="flex-2 w-full px-4 py-2 bg-gray-800 rounded-md focus:outline-none h-24"
          />
        </div>
        <button
          onClick={submit}
          className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-full font-semibold transition"
        >
          Submit Feedback
        </button>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Previous Feedback</h2>
          <div className="space-y-4">
            {feedbacks.length === 0 && (
              <div className="text-gray-400">No feedback yet.</div>
            )}
            {feedbacks.map((f) => (
              <div
                key={f.id}
                className="bg-gray-800 rounded-lg p-4 flex flex-col gap-1"
              >
                <div className="flex justify-between">
                  <div className="font-semibold">{f.name}</div>
                  <div className="text-xs text-gray-400">
                    {new Date(f.timestamp).toLocaleString()}
                  </div>
                </div>
                <div>{f.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;
