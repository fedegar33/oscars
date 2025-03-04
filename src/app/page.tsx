import MovieCard from "~/components/movie-card";

export default function HomePage() {
  return (
    <main
      style={{
        background: "linear-gradient(rgb(249, 233, 200), rgb(224, 179, 122))",
      }}
      className="flex min-h-screen flex-col justify-center text-white"
    >
      <MovieCard />
    </main>
  );
}
