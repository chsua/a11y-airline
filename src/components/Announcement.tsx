export default function Announcement({ children }: { children: string }) {
  return (
    <div
      role="status"
      aria-live="polite"
      style={{ position: "absolute", left: "-9999px", top: 0 }}
    >
      {children}
    </div>
  );
}
