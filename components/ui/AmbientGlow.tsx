export function AmbientGlow({
  className,
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "top";
}) {
  return (
    <div
      aria-hidden="true"
      className={className ?? "pointer-events-none absolute inset-0 -z-10 overflow-hidden"}
    >
      <div className="grid-field absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />
      <div
        className={
          variant === "top"
            ? "absolute left-1/2 top-[-10%] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-accent-blue/20 blur-[120px]"
            : "absolute left-1/2 top-1/3 h-[420px] w-[680px] -translate-x-1/2 rounded-full bg-accent-blue/10 blur-[110px]"
        }
      />
    </div>
  );
}
