import { useRouter } from "next/navigation";

export default function LanguagePicker() {
  const router = useRouter();
  return (
    <select
      onChange={(e) => {
        const locale = e.target.value;
        router.push(`/${locale}`);
      }}
    >
      <option value="en">🇺🇸</option>
      <option value="de">🇩🇪</option>
    </select>
  );
}
