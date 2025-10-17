import LogoMain from "../images/image-footer.png";

export default function ImageMain() {
  return (
    <section className="w-full m-0 p-0 h-[700px] ">
      <img
        src={LogoMain}
        alt="ImageMain"
        className="w-full h-full object-cover block"
      />
    </section>
  );
}