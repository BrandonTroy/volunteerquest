
export default function Home() {
  return (
    <main>
    {["text-xs", "text-sm", "text-base", "text-lg", "text-xl", "text-2xl"].map((size) => (
      <div key={size} className={size}>
        This is {size} text
      </div>
    ))}
    </main>
  );
}
