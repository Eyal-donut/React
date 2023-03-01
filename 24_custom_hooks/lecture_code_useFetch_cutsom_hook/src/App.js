import "./styles.css";
import useFetch from "./hooks/useFetch";

export default function App() {
  const BASE_URL = "https://inshortsapi.vercel.app/news?category=all";
  const { users: data, loading, error } = useFetch(BASE_URL);

  return (
    <div>
      {loading && <h3>loading...</h3>}
      {error && <h3>Error: something went wrong </h3>}
      <div>
        <pre>{JSON.stringify(data, undefined, 2)}</pre>
      </div>
    </div>
  );
}
