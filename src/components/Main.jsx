export default function Main() {
  return (
    <section className="px-4 md:px-12 py-8 flex justify-center h-screen">
      <div className="max-w-5xl mx-auto flex flex-col justify-center">
        <h2 className="font-bold text-lg md:text-xl mb-6">
          Welcome to Jones & Brown Legal
        </h2>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 ">
          <p className="text-base md:text-lg max-w-md text-black">
            Jones & Brown Legal has been a pillar of the Los Angeles legal
            community, providing expert legal counsel across a wide spectrum of
            practice areas. We are more than just attorneys, we are trusted
            advisors, dedicated advocates, and strategic partners committed to
            achieving the best possible outcomes for our clients.
          </p>
          <p className="text-base md:text-lg max-w-m text-black">
            We combine decades of experience with a deep understanding of the
            complexities of California law. Our team of seasoned trial attorneys
            boasts a proven track record of success in courtrooms throughout Los
            Angeles and beyond. We pride ourselves on our comprehensive
            expertise, covering nearly every field of law, ensuring that
            whatever your legal challenge, we have the knowledge and experience
            to guide you.
          </p>
        </div>
        <button
          style={{ backgroundColor: "#010101ff" }}
          className=" mt-[50px] text-white px-4 py-3 rounded-full transition-colors hover:bg-black w-full sm:w-44 md:w-52 h-12 md:h-14"
        >
          Schedule a Consult
        </button>
      </div>
    </section>
  );
}
