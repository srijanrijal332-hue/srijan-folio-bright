import { useEffect, useState } from "react";

export function TypingRoles({ roles }: { roles: string[] }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          const next = current.slice(0, text.length + 1);
          setText(next);
          if (next === current) {
            setTimeout(() => setDeleting(true), 1800);
          }
        } else {
          const next = current.slice(0, text.length - 1);
          setText(next);
          if (next === "") {
            setDeleting(false);
            setRoleIndex((i) => (i + 1) % roles.length);
          }
        }
      },
      deleting ? 45 : 85,
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex, roles]);

  return (
    <span className="inline-flex items-baseline min-h-[1.4em]">
      <span className="text-amber-700 dark:text-amber-400 font-semibold">{text}</span>
      <span className="ml-0.5 inline-block w-[2px] h-[0.9em] bg-amber-600 dark:bg-amber-400 animate-pulse align-middle" />
    </span>
  );
}
