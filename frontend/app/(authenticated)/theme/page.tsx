export default function Theme() {
  return (
    <main className="p-4">
      {["text-xs", "text-sm", "text-base", "text-lg", "text-xl", "text-2xl"].map((size) => (
        <>
          <div key={size} className={size}>
            This is {size} text <br />
            This is {size} text
          </div>
          <br />
        </>
      ))}
    </main>
  );
}
