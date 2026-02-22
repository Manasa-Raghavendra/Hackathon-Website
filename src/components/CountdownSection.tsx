import { useEffect, useState } from "react";

const targetDate = new Date("2026-03-13T09:00:00+05:30").getTime();

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const update = () => {
      const diff = Math.max(0, targetDate - Date.now());
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-sm tracking-[0.3em] uppercase text-primary mb-4">Countdown</h2>
        <p className="font-heading text-2xl md:text-3xl font-semibold mb-10 text-muted-foreground">
          Event starts in
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {units.map((u) => (
            <div
              key={u.label}
              className="rounded-xl bg-card p-6 md:p-8 glow-border animate-pulse-glow"
            >
              <span className="font-display text-4xl md:text-6xl font-bold text-foreground block">
                {String(u.value).padStart(2, "0")}
              </span>
              <span className="text-xs md:text-sm uppercase tracking-[0.2em] text-muted-foreground mt-2 block">
                {u.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;
