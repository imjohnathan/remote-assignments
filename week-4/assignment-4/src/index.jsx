import { useEffect, useState } from "react";
const apibase = "https://api.github.com/orgs/facebook/repos";
const Repo = ({ data }) => {
  const { name, visibility, description, topics } = data;
  return (
    <div className="px-5 py-4 grid gap-2">
      <h3 className="text-xl font-bold text-[#2E66D3] flex items-center">
        {name}
        <span className="border border-[#D8DEE3] font-medium ml-3 text-[#596069] rounded-full text-xs py-[1px] px-[6px]">
          {visibility[0].toUpperCase() + visibility.slice(1)}
        </span>
      </h3>
      <p className="text-[#596069]">{description}</p>
      <ul className="flex gap-1 items-center flex-wrap">
        {topics.map((item, i) => (
          <li
            className="text-[#2E66D3] bg-[#E1F3FE] rounded-full grid place-items-center py-[3px] px-3 font-medium text-sm"
            key={name + "topics_" + i}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Skelton = () => (
  <div className="space-y-3 px-5 py-4 animate-pulse">
    <div className="grid grid-cols-3 gap-3">
      <div className="h-4 bg-slate-200 rounded-full"></div>
      <div className="h-4 bg-slate-200 rounded-full col-span-3 row-start-2"></div>
      <div className="h-4 bg-slate-200 rounded-full col-span-2 row-start-3"></div>
    </div>
  </div>
);

export default function App() {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasNextpage, setHasNextpage] = useState(false);

  const scroltoBottom = () => {
    if (page > 1) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  // fetching data
  useEffect(() => {
    const fetchData = async () => {
      //build the url for the api
      const apiUrl = new URL(apibase);
      apiUrl.searchParams.append("per_page", 5);
      apiUrl.searchParams.append("page", page);
      try {
        setIsloading(true); //setLoading
        const response = await fetch(apiUrl, {
          // headers: {
          //   Authorization: "Bearer XXXXXXXXX",
          // },
          //prevent github rate limited (expires after 30 days)
        });
        if (!response.ok) throw "Failed to retrieve data. Please try again.";
        const data = await response.json();
        setRepos((prev) => [...prev, ...data]); //Merge the data

        if (response.headers.get("Link")) {
          const ifNextPage = response.headers
            .get("Link")
            .includes(`rel=\"next\"`);
          setHasNextpage(ifNextPage);
          //check if there has "rel="next" on header.link
          //@https://docs.github.com/en/rest/guides/using-pagination-in-the-rest-api?apiVersion=2022-11-28
        }

        setIsloading(false); //remove loading Skelton
      } catch (e) {
        throw new Error(e);
      }
    };
    fetchData();
  }, [page]);

  //Wait for the UI render and navigate to the bottom
  useEffect(() => scroltoBottom(), [repos]);

  return (
    <div className="grid place-items-center my-8 px-4">
      <div className="border border-[#D0D7DD] max-w-2xl rounded-lg divide-y w-full sm:w-[600px]">
        {repos.map((repo) => (
          <Repo data={repo} key={repo.id} />
        ))}
        {isLoading &&
          [...Array(5)].map((v, i) => <Skelton key={"loading_" + i} />)}
      </div>
      {hasNextpage && (
        <button
          disabled={isLoading}
          className="text-[#2F68D3] text-lg mt-5  w-full"
          onClick={() => setPage((prev) => prev + 1)}
        >
          More
        </button>
      )}
    </div>
  );
}
