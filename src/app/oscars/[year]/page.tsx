import { promises as fs } from "fs";
import CategoriesMenu from "~/components/categories-menu";
import MovieCard from "~/components/movie-card";

type OscarsPageProps = {
  params: Promise<{
    year: string;
  }>;
  searchParams: Promise<{
    category: string;
  }>;
};

type OscarNomination = {
  category: string;
  year: string;
  nominees: string[];
  nomineesData: {
    name: string;
    id: number;
    profile_path?: string;
  }[];
  movies: {
    title: string;
    tmdb_id: number;
    imdb_id: string;
    poster_path?: string;
  }[];
  categoryType: "movie" | "person";
};

export default async function OscarsPage({
  params,
  searchParams,
}: OscarsPageProps) {
  const { year } = await params;
  const { category } = await searchParams;
  const nominationsData = await fs.readFile(
    process.cwd() + `/src/app/data/oscar-nominations-${year}.json`,
    "utf-8",
  );
  const nominations = JSON.parse(nominationsData) as OscarNomination[];
  const categories = [
    ...new Set(nominations.map((nomination) => nomination.category)),
  ];

  return (
    <div
      className="flex min-h-screen flex-col gap-y-2"
      style={{
        background: "linear-gradient(rgb(249, 233, 200), rgb(224, 179, 122))",
      }}
    >
      <div className="flex justify-end">
        <CategoriesMenu year={year} categories={categories} />
      </div>
      {category}
    </div>
  );
}
