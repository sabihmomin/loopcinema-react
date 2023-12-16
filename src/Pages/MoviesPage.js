import React, { useEffect, useState } from "react";
import { calculateAvgRating, getMoviesFromLocalStorage } from "../Commons";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import MovieModal from "../Components/MovieModal";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import img1 from "../images/buffer.jpeg";

const MoviesPage = () => {
  const [sortedList, setSortedList] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState();
  const [open, setOpen] = useState(false);

  //modal open and close functions
  const onOpenModal = (obj) => {
    setOpen(true);
    setSelectedMovie(obj);
  };
  const onCloseModal = () => setOpen(false);


  useEffect(() => {
    // calculateAvgRating()
    //sorting movies based on avg rating and displaying highest rating first
    const movies = getMoviesFromLocalStorage();
    console.log(movies)
    const sortedMovies = movies
      ?.slice()
      .sort((obj1, obj2) => obj2.rating - obj1.rating);
    setSortedList(sortedMovies);
  }, [open]);

  return (
    <>
      {sortedList?.map((obj) => {
        return (
          <div className="flex justify-center">
            <div className="w-[95%] bg-[#272121] mt-10 m-4 rounded-lg p-8">
              <div className="flex ">
                <div className="w-[20%] rounded-lg overflow-hidden">
                  <div className="w-[200px] h-[200px]">
                  <img
                    height={"100%"}
                    width={"100%"}
                    className="aspect-[1] "
                    src={obj?.img === "img1" ? img1 : obj?.img}
                    alt=""
                  />
                  </div>
                </div>
                <div className="flex flex-col">
                  <div>
                  <a onClick={()=>onOpenModal(obj)} className="text-white text-3xl font-extrabold underline" style={{ cursor: 'pointer' }}>
                    {obj?.name}
                  </a>
                  </div>
                  <div className="mt-4">
                    <Rating value={obj?.avgRating} readOnly style={{ maxWidth: 150 }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="ml-50">
        <Modal
          open={open}
          onClose={onCloseModal}
          center
          classNames={{
            overlay: "customOverlay",
            modal: "customModal",
          }}
        >
          <MovieModal selectedMovieModal={selectedMovie} />
        </Modal>
      </div>
    </>
  );
};
export default MoviesPage;
