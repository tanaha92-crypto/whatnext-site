// WhatNext MVP — no backend. Stores text locally in the user's browser.
(function () {
  const go = document.getElementById("go");
  if (go) {
    go.addEventListener("click", () => {
      const t = (document.getElementById("situation")?.value || "").trim();
      if (!t) {
        alert("Describe your situation first.");
        return;
      }
      localStorage.setItem("whatnext.situation", t);
      window.location.href = "result.html";
    });
  }

  const steps = document.getElementById("steps");
  const raw = document.getElementById("raw");

  if (steps || raw) {
    const situation = localStorage.getItem("whatnext.situation") || "";

    if (raw) raw.textContent = situation;

    if (steps) {
      steps.innerHTML = "";

      const items = [
        "Write down the facts: who, what, when, and what outcome you want (1–2 sentences).",
        "Pick one safe next action you can do in 15 minutes (draft a message, collect proof, set a boundary).",
        "Set a rule to avoid escalation (no threats, no heated calls, no impulsive payments)."
      ];

      items.forEach((txt) => {
        const li = document.createElement("li");
        li.textContent = txt;
        steps.appendChild(li);
      });
    }
  }
})();
