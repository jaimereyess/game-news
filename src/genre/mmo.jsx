import { NavBar, Footer } from "../components"
import GameCard from "./components/game-card"
import { GenreNav } from "./components/genre-nav"
import { Introduction } from "./components/introduction"
import { plataform } from "./components/plataforms"

export const Mmo = () => {
    return (
        <main>
            <div className="h-full p-2 bg-slate-900">
                <NavBar />
                <GenreNav />

                <Introduction title="MMO GAMES">
                    MMO games (Massively Multiplayer Online) are those that allow interaction
                    among thousands of players from all over the world in the same virtual world
                    and in real-time. These games are usually set in fantasy or science fiction
                    worlds and offer players a wide variety of activities such as quests, battles,
                    character creation, trade, and more. MMOs rely on internet connectivity and
                    require a central server that hosts the virtual world where the game takes place,
                    enabling players to interact and compete with one another.
                </Introduction>

                <GameCard img="/img/lost-cover.jpg" name="Lost Ark"
                    plataform={[plataform.pc]}
                    type={"Rol > Acción RPG "} date={"4 December 2019"}
                    description={`The free-to-play action RPG has garnered significant attention and
                    popularity over the years. Combining combat mechanics that evoke the spirit of Diablo
                    with the distinct design and gameplay features of an MMORPG, this online adventure
                    immerses players in the magical realm of Arkesia. The ultimate goal is to locate and
                    obtain seven powerful artifacts, which will be necessary for battling against the demon
                    forces threatening the land. With its engaging gameplay and thrilling storyline, this
                    action-packed RPG is sure to captivate fans of both action and role-playing games alike.`}
                />

                <GameCard img="/img/war-thunder.jpg" name="War Thunder"
                    plataform={[plataform.pc, plataform.ps, plataform.xbox]}
                    type={"Simulation > Flying > Maritime"} date={"15 August 2013"}
                    description={`War Thunder is an intense military MMO featuring air, land, and sea combat,
                    putting players in the shoes of pilots battling in real-time battles featuring planes,
                    tanks, and ships during World War II and the Korean War. Developed by Gaijin, a company
                    specializing in war games, War Thunder is free-to-play and offers cross-play across PC,
                    Mac, and PS4, with constant updates and development.`}
                />

                <GameCard img="/img/ever-cover.jpg" name="EverQuest II"
                    plataform={plataform.pc}
                    type={"Rol > Multiplayer Masive Online "} date={"25 November 2004"}
                    description={`EverQuest II is a fantastic medieval world with an impressive backstory,
                    culture, and hundreds of places to explore. Set in the Age of Destiny, 500 years before
                    EverQuest, players enter this persistent world by creating their own characters, choosing
                    from 16 races and 48 classes using an advanced facial customization system.`}
                />
            </div>
            <Footer />
        </main >
    )
}
