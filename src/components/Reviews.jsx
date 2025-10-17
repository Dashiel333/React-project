import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { reviewsData } from "../data/reviewsData";

export default function Reviews() {
  return (
    <section className="px-4 md:px-12 py-8 flex justify-center  bg-white flex-col">
      <div className="max-w-[738px] mx-auto flex flex-col justify-center items-center mb-8">
        <p className="font-bold text-2xl">Hear From Our Clients</p>
        <p className="text-lg mt-4 text-center">
          We believe that our clients' experiences speak volumes about the
          quality of our legal services. Here's what some of them have to say:
        </p>

        <Carousel
          controls={true}
          indicators={true}
          prevIcon={
            <span className="carousel-control-prev-icon !invert absolute bottom-[32px]" />
          }
          nextIcon={
            <span className="carousel-control-next-icon !invert absolute bottom-[32px]" />
          }
          className="h-auto md:max-h-[445px] bg-gray-100"
        >
          {reviewsData.map((review, index) => (
            <Carousel.Item
              key={index}
              className="b "
            >
              <Carousel.Caption className="!static text-black text-lg font-semibold px-[30px] mt-[32px] md:px-[50px] flex flex-col items-center justify-center">
                <p>{review.text}</p>
                <p className="mt-2 font-semibold">{review.author}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="flex justify-center items-center mt-[56px]">
          <p>
            Let us help you navigate your legal journey with confidence and
            peace of mind. Contact Jones & Brown Legal today.
          </p>
        </div>
        <div className="flex justify-center">
          <button
            style={{ backgroundColor: "#010101ff" }}
            className="mt-[50px] text-white px-6 py-3 rounded-full transition-colors hover:bg-black w-auto sm:w-44 md:w-52 h-12 md:h-14 flex items-center justify-center"
          >
            Schedule a Consult
          </button>
        </div>
      </div>
    </section>
  );
}
