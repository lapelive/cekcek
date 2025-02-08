const API_KEY = process.env.API_KEY;

export const fetchData = async (genre) => {
  const response = await fetch(
    `https://filemoonapi.com/api${
      genre === "fetchTopRated" ? `/file/list` : `/file/info`
    }?api_key=${API_KEY}`,
    { next: { revalidate: 10 } }
  );
  const data = await response.json();
  if (!response.ok) throw new Error("Failed to fetch Data");
  const results = data.results;
  return results;
};

export const fetchDataById = async (file_code) => {
  console.log(file_code);
  const response = await fetch(
    `https://filemoonapi.com/api/file/info?api_key=${process.env.API_KEY}&${file_code}`
  );
  const data = await response.json();
  return data;
};

export const fetchSearchData = async (searchTerm) => {
  const response = await fetch(
    `https://filemoonapi.com/api/file/list?api_key=${process.env.API_KEY}&title=${searchTerm}`
  );
  const data = await response.json();
  return data;
};
