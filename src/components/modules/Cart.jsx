import { FiThumbsUp } from "react-icons/fi";

import Image from "next/image";
import Link from "next/link";

const Cart = ({ movie }) => {
  return (
    <div className="group cursor-pointer sm:hover:shadow-salte-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200">
      <Link href={`/movie/${movie.file_code}`}>
        <Image
          src={`https://videothumbs.me/${
            movie.file_code || movie.thumbnail
          }.jpg`}
          alt="image"
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300"
        />
        <div className="p-2">
          <p className="line-clamp-2 text-md">{movie.title}</p>
          <h2 className="text-lg font-bold truncate">
            {movie.title || movie.title}
          </h2>
          <p className="flex items-center">
            {movie.uploaded || movie.uploaded}
            <FiThumbsUp className="h-5 mr-1 ml-3" />
            {movie.length}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Cart;
