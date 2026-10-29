export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-6 text-center">
      <div>
        <p className="eyebrow">404</p>
        <h1 className="mt-4 font-display text-[clamp(2.4rem,8vw,5rem)] leading-none tracking-tight">This signal <span className="text-signal">went nowhere.</span></h1>
        <p className="mt-4 text-mute">The page you're looking for doesn't exist.</p>
        <a href="/" className="btn-primary mt-8">Back to the portfolio</a>
      </div>
    </main>
  );
}
