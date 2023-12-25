import { NavBar, Footer } from "../components"
import GameCard from "./components/game-card"
import { GenreNav } from "./components/genre-nav"
import { Introduction } from "./components/introduction"
import { plataform } from "./components/plataforms"

export const Sports = () => {
    return (
        <main>
            <div className="h-full p-2 bg-slate-900">
                <NavBar />
                <GenreNav />


                <Introduction title="SPORTS GAMES">
                    A sports video game simulate a traditional sports fields.
                    These games are extremely popular and some of the best-selling video
                    games belong to this genre. Almost all well-known sports have been
                    recreated in a video game format, including baseball, soccer, American
                    football, boxing, wrestling, cricket, golf, basketball, ice hockey, bowling,
                    rugby, hunting, fishing, skateboarding, mixed martial arts, snowboarding, and more.
                </Introduction>

                <GameCard img="/img/fifa-23.jpg" name="FIFA 23"
                    plataform={[plataform.pc, plataform.ps, plataform.xbox]}
                    type={"Sports > Football"} date={"30 September 2022"}
                    description={`FIFA is a popular series of football simulation video games
                    developed by EA Sports. Renowned for its realistic gameplay and licenses
                    with real-world football leagues and teams, FIFA allows players
                    to experience the excitement of professional football matches. With annual
                    releases, it offers updated rosters, enhanced graphics, and various gameplay
                    modes, catering to both casual and competitive gamers`}
                />

                <GameCard img="/img/inazuma.jpg" name="Inazuma Eleven: Victory Road"
                    plataform={[plataform.ps, plataform.nintendo, plataform.iOS, plataform.android]}
                    type={"Role-playing > Action RPG > Football"} date={"To be determined"}
                    description={`Inazuma Eleven: Victory Road, previously known as
                    both Inazuma Eleven: Great Road of Heroes and Inazuma Eleven Ares,
                    is a football and role-playing video game developed and published by
                    Level-5. The story takes place years after the first installment in
                    a parallel world where aliens never made an appearance. It will be
                    led by Ryouhei Haizaki, Asuto Inamori, and Yuuma Nosaka and will
                    include, among its new features, a bracelet called Eleven Band that
                    can convert the player's real-life steps into a boost for the character's
                    statistics in the game.`}
                />

                <GameCard img="/img/undisputed.jpg" name="Undisputed"
                    plataform={[plataform.pc, plataform.ps, plataform.xbox]}
                    type={"Sports > Football"} date={"30 September 2022"}
                    description={`FIFA is a popular series of football simulation video games
                    developed by EA Sports. Renowned for its realistic gameplay and licenses
                    with real-world football leagues and teams, FIFA allows players
                    to experience the excitement of professional football matches. With annual
                    releases, it offers updated rosters, enhanced graphics, and various gameplay
                    modes, catering to both casual and competitive gamers`}
                />
            </div>
            <Footer />
        </main >
    )
}
