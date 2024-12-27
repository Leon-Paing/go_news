import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";

const NewsFetcher: React.FC = () => {

    interface Article {
        title: string;
        link: string;
        og: string;
        source: string;
        source_icon: string;
    }

  const [section, setSection] = useState<string>('World');
  const [news, setNews] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchNews();
  }, [section]);

  const fetchNews = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get('https://ok.surf/api/v1/cors/news-feed');
        console.log(response.data)
      setNews(response.data[section]);
    } catch (err) {
      setError("Failed to fetch news.");
    } finally {
      setLoading(false);
    }
  };

  const navigateToNewsLink = (link: string) => {
    window.open(link, "_blank");
  }


  return (
    <div className="container w-screen h-auto relative">
      <div className="w-screen flex justify-start items-center p-3 my-4 mt-24">
        <select
          className="border rounded-md bg-transparent text-white p-3"
          value={section}
          onChange={(e) => setSection(e.target.value)}
        >
          <option value="World">World</option>
          <option value="Technology">Technology</option>
          <option value="Science">Science</option>
          <option value="Business">Business</option>
          <option value="Sports">Sports</option>
          <option value="Health">Health</option>
          <option value="Entertainment">Entertainment</option>
        </select>
      </div>
      {/* Dropdown for section selection */}
      {loading ? <Loading/> : ""}

      {error && <p className="text-red-500 mt-4">{error}</p>}

      <div className="mt-6">
          {news.length > 0 && (
          <div className="w-screen flex justify-start items-center flex-wrap relative">
            {news.map((article, index) => (
              <div key={index} className="my-2 p-2 xl:w-1/2 sm:w-full   xs:w-full xl:h-[68vh] sm:h-auto xs:h-auto">

                <div className="w-full flex flex-col justify-center items-center relative">
                  <img src={article.og} className="w-full object-cover xl:h-96 xs:h-64"/>
                  <div className="absolute right-0 top-0 flex items-center gap-2 bg-transparent backdrop-blur-2xl p-2 text-xl rounded-es-2xl">  
                    <h3 className="bg-transparent text-white text-clip">{article.source}</h3>
                    <img src={article.source_icon} alt="icon" className="rounded-full h-10"/>
                  </div>

                  <div className=" text-xl font-semibold text-nowrap text-ellipsis h-auto w-full overflow-hidden my-3">"{article.title}"</div>

                  <div className="bg-blue-500 p-3 rounded-md mt-3 bottom-0" onClick={() => navigateToNewsLink(article.link)}>
                  Read more
                  </div>
                </div>
              </div>
            ))}
          </div>)}
      </div>
    </div>
  );
};

export default NewsFetcher;
