import { NavBar, GenreList, Releases, TopMonth, News, NewGames, Footer } from "./components/index"

export const Home = () => {
  return (
    <main>
      <div className="h-full p-2 bg-slate-900">
        <NavBar />

        {/* 1 row */}
        <section className="flex flex-col lg:flex-row lg:justify-between p-4">
          <article className="pt-2 mb-4 lg:pt-0 lg:mb-0">
            <GenreList />
          </article>
          <article className="w-full lg:mx-10">
            <Releases />
          </article>
          <article className="lg:w-full pt-6 lg:pt-0">
            <iframe className="w-full h-full aspect-widescreen"
              src="https://www.youtube.com/embed/QdBZY2fkU-0?si=bFgizBchChmw2_sc"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen>
            </iframe>
          </article>
        </section>

        {/* 2 row */}
        <section className="flex flex-col lg:flex-row lg:justify-between p-4 ">
          <article className="max-w-md mx-auto lg:max-w-lg w-full mb-8 lg:mb-0 lg:mr-10 ">
            <TopMonth />
          </article>
          <article className="w-full">
            <News />
          </article>
        </section>

        {/* 3 row */}
        <section className="p-4" >
          <NewGames />
        </section>
      </div>

      <Footer />
    </main >
  );
};
