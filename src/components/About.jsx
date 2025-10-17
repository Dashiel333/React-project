export default function About() {
  return (
    <section className="px-4 md:px-12 py-8 flex flex-col justify-center max-w-5xl mx-auto">
      <div className="max-w-5xl mx-auto flex flex-col">
        <h2 className="font-bold text-lg md:text-xl mb-6">
          Welcome to Jones & Brown Legal
        </h2>

        {/* Контейнер с двумя колонками */}
        <div className="flex flex-col md:flex-row justify-between gap-[40px] mt-[60px]">
          <p className="text-base md:text-lg text-black md:w-1/2">
            Jones & Brown Legal has been a pillar of the Los Angeles legal
            community, providing expert legal counsel across a wide spectrum of
            practice areas. We are more than just attorneys, we are trusted
            advisors, dedicated advocates, and strategic partners committed to
            achieving the best possible outcomes for our clients.
          </p>

          <p className="text-base md:text-lg text-black md:w-1/2">
            We combine decades of experience with a deep understanding of the
            complexities of California law. Our team of seasoned trial attorneys
            boasts a proven track record of success in courtrooms throughout Los
            Angeles and beyond. We pride ourselves on our comprehensive
            expertise, covering nearly every field of law, ensuring that
            whatever your legal challenge, we have the knowledge and experience
            to guide you.
          </p>
        </div>
      </div>
      <div className="pt-[50px] text-white text-lg font-medium px-0 py-[50px] rounded-full transition hover:bg-gray-200 w-fit">
        <button style={{ backgroundColor: "#010101ff" }}>
          Schedule a Consult
        </button>
      </div>
    </section>
  );
}
