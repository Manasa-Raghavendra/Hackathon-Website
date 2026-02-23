import { useEffect, useRef, useState } from "react";

interface EventType {
  date: string;
  start: Date;
  end: Date;
  title: string;
  desc: string;
}

const events: EventType[] = [
  {
    date: "Feb 23",
    start: new Date("2026-02-23T09:00:00"),
    end: new Date("2026-02-23T23:59:59"),
    title: "Registrations Open",
    desc: "Sign up with your team (3–4 members) and choose your domain.",
  },
  {
    date: "Mar 21",
    start: new Date("2026-03-21T09:00:00"),
    end: new Date("2026-03-21T23:59:59"),
    title: "Registrations Close",
    desc: "Last date to register your team.",
  },
  {
    date: "Mar 27",
    start: new Date("2026-03-27T09:00:00"),
    end: new Date("2026-03-27T17:00:00"),
    title: "Opening Ceremony",
    desc: "Kickoff event with keynote speakers and rules briefing.",
  },
  {
    date: "Mar 27",
    start: new Date("2026-03-27T09:00:00"),
    end: new Date("2026-03-28T17:00:00"),
    title: "Hacking Begins",
    desc: "2 days of building and innovating, 9 AM to 5 PM each day.",
  },
  {
    date: "Mar 28",
    start: new Date("2026-03-28T12:00:00"),
    end: new Date("2026-03-28T16:00:00"),
    title: "Submissions & Judging",
    desc: "Present your projects to expert judges.",
  },
  {
    date: "Mar 28",
    start: new Date("2026-03-28T16:00:00"),
    end: new Date("2026-03-28T18:00:00"),
    title: "Awards Ceremony",
    desc: "Winners announced and prizes distributed.",
  },
];

const TimelineSection = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [now, setNow] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.15 }
    );

    cardsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Countdown function
  const getCountdown = (date: Date) => {
    const diff = date.getTime() - now.getTime();
    if (diff <= 0) return null;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  const completedCount = events.filter((e) => now > e.end).length;
  const progressPercent = (completedCount / events.length) * 100;

  return (
    <section
      id="timeline"
      className="relative py-20 md:py-28 px-4 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, hsl(210 55% 8%) 0%, hsl(215 50% 12%) 50%, hsl(210 55% 8%) 100%)",
      }}
    >
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm tracking-[0.3em] uppercase text-primary mb-4">
            Timeline
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold">
            Event Timeline
          </h3>
        </div>

        <div className="relative">
          {/* Progress Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block bg-muted">
            <div
              className="w-full bg-primary transition-all duration-1000"
              style={{
                height: `${progressPercent}%`,
                boxShadow: "0 0 15px hsl(215 89% 52% / 0.6)",
              }}
            />
          </div>

          <div className="space-y-12 md:space-y-16">
            {events.map((evt, i) => {
              const isPast = now > evt.end;
              const isLive = now >= evt.start && now <= evt.end;
              const isUpcoming = now < evt.start;
              const countdown = getCountdown(evt.start);
              const isLeft = i % 2 === 0;

              return (
                <div
                  key={i}
                  ref={(el) => (cardsRef.current[i] = el)}
                  className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8 items-center">
                    <div className={isLeft ? "" : "order-3"}>
                      <div
                        className={`rounded-xl bg-card/80 backdrop-blur-sm p-6 border border-primary/20 transition-all duration-500 ${
                          isLeft ? "text-right" : "text-left"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4
                            className={`text-xl font-bold ${
                              isPast
                                ? "line-through opacity-50 text-muted-foreground"
                                : ""
                            }`}
                          >
                            {evt.title}
                          </h4>

                          {isLive && (
                            <span className="px-2 py-1 text-xs font-bold bg-red-600 text-white rounded animate-pulse">
                              LIVE NOW
                            </span>
                          )}
                        </div>

                        <p className="text-muted-foreground text-sm">
                          {evt.desc}
                        </p>

                        {isUpcoming && countdown && (
                          <p className="text-primary text-xs mt-2 font-semibold animate-pulse">
                            Starts in: {countdown}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col items-center order-2">
                      <div className="w-3 h-3 rounded-full bg-primary shadow-lg" />
                      <div className="mt-2 px-3 py-1 rounded-md text-xs font-bold text-primary bg-primary/10 border border-primary/30">
                        {evt.date}
                      </div>
                    </div>

                    <div className={isLeft ? "order-3" : ""} />
                  </div>

                  {/* Mobile layout */}
                  <div className="md:hidden flex gap-6 pl-2">
                    <div className="flex flex-col items-center pt-1">
                      <div className="w-3 h-3 rounded-full bg-primary shadow-lg" />
                      <div className="mt-2 px-2 py-1 rounded-md text-[10px] font-bold text-primary bg-primary/10 border border-primary/30">
                        {evt.date}
                      </div>
                    </div>
                    <div className="flex-1 rounded-xl bg-card/80 p-5 border border-primary/20">
                      <div className="flex justify-between items-center mb-1">
                        <h4
                          className={`text-lg font-bold ${
                            isPast
                              ? "line-through opacity-50 text-muted-foreground"
                              : ""
                          }`}
                        >
                          {evt.title}
                        </h4>

                        {isLive && (
                          <span className="px-2 py-1 text-[10px] font-bold bg-red-600 text-white rounded animate-pulse">
                            LIVE
                          </span>
                        )}
                      </div>

                      <p className="text-muted-foreground text-sm">
                        {evt.desc}
                      </p>

                      {isUpcoming && countdown && (
                        <p className="text-primary text-xs mt-2 font-semibold">
                          Starts in: {countdown}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;