import { NavBar, Footer } from "../components"
import GameCard from "./components/game-card"
import { GenreNav } from "./components/genre-nav"
import { Introduction } from "./components/introduction"
import { plataform } from "./components/plataforms"

export const Shooters = () => {
    return (
        <main>
            <div className="h-full p-2 bg-slate-900">
                <NavBar />
                <GenreNav />


                <Introduction title="SHOOTERS GAMES">
                    Shooter video games are a popular genre within the video game industry,
                    which has earned an important place in popular culture. Shooting games
                    are divided into two main categories: first-person shooters (FPS) andout
                    third-person shooters (TPS). FPS games are games where the player assumes
                    the role of a character in the game and sees everything from their first-person
                    perspective.
                    The player usually has a variety of weapons at their disposal. The objective
                    of these games is to eliminate enemy targets, complete objectives, and progress
                    through the game's storyline.
                </Introduction>

                <GameCard img="/img/cs2.jpg" name="Counter-Strike 2"
                    plataform={plataform.pc}
                    type={"Shooter > First Person Shooter (FPS)"} date={"27 September 2023"}
                    description={`Counter Strike 2, also known as CS2,
                    is a first-person shooter action video game. The fiveth installment in
                    the Valve franchise, CS2 follows the same premise as always: two teams,
                    terrorists and counter-terrorists, fighting against each other to complete
                    objectives like planting/disarming a bomb. It is the most popular multiplayer
                    FPS among eSports and features dedicated servers as well as custom matches
                    where players can enjoy up to six game modes.`}
                />

                <GameCard img="/img/cod-cover.jpg" name="Call of Duty: Warzone 2"
                    plataform={[plataform.pc, plataform.ps, plataform.xbox]}
                    type={"Shooter > Battle royale > First Person Shooter (FPS)"} date={"16 November 2022"}
                    description={`Call of Duty: Warzone 2.0 is the new, modernized installment
                    of the popular CoD battle royale shooter for up to 150 players. It has been
                    developed jointly by Infinity Ward and Raven Software. It is available on a
                    wide range of platforms, including PS4, PS5, Xbox One, and Xbox Series. It can
                    also be found on PC, where players can enjoy it on Steam or through
                    Activision-Blizzard's own launcher: Battle.net.`}
                />

                <GameCard img="/img/valorant-cover.jpg" name="Valorant"
                    plataform={plataform.pc}
                    type={"Shooter > First Person Shooter (FPS) "} date={"2 June 2020"}
                    description={`Valorant is a tactical first-person shooter video game developed
                    by Riot Games, the creators of League of Legends, set in the universe of the MOBA.
                    The FPS is set in a beautiful version of Earth in the near future and features a
                    deadly cast of characters, each with unique abilities to create tactical opportunities
                    to showcase their weapon skills in 5v5 matches.`}
                />
            </div>
            <Footer />
        </main >
    )
}
