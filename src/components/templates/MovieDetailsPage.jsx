import Image from "next/image";

const MovieDetailsPage = ({ result }) => {
  const {
    file_code,
    thumbnail,
    title,
    uploaded,
    length,
  } = result;
  return (
    <div className="w-full">
      <div className="p-4">
        <Image
          src={`https://videothumbs.me/${
            file_code || thumbnail
          }.jpg`}
          width={500}
          height={300}
          className="rounded-lg"
          style={{ maxWidth: "100%", height: "100%" }}
          alt="details"
        />
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">{title || title}</h2>
          <p className="text-lg mb-3 text-justify">{title}</p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Date Released:</span>
            {uploaded || uploaded}
          </p>
          <p className="b-3">
            <span className="font-semibold mr-1">Rating:</span>
            {length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
