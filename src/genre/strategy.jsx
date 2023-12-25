import { NavBar, Footer } from "../components"
import GameCard from "./components/game-card"
import { GenreNav } from "./components/genre-nav"
import { Introduction } from "./components/introduction"
import { plataform } from "./components/plataforms"

export const Strategy = () => {
    return (
        <main>
            <div className="h-full p-2 bg-slate-900">
                <NavBar />
                <GenreNav />

                <Introduction title="STRATEGY GAMES">
                    A strategy game is a type of video game that requires the player to plan and
                    manage resources in order to achieve a specific goal. These games typically
                    involve strategic thinking and decision making, with the player controlling
                    various units or characters and directing them to perform specific actions.
                    Strategy games can take place in a variety of settings, including historical,
                    science fiction, and fantasy worlds. They can also feature different gameplay
                    styles, such as turn-based or real-time, and often involve complex systems and
                    mechanics that the player must master in order to succeed.
                </Introduction>

                <GameCard img="/img/pharoh.jpg" name="Pharaoh"
                    plataform={[plataform.pc]}
                    type={"Strategy > City-builder "} date={"15 February 2023"}
                    description={`Pharaoh: A New Era is a city-building game set in Ancient Egypt
                    where players become pharaohs and manage cities along the Nile River. With
                    updated 4K graphics and UI improvements, players must manage resources and
                    citizen needs while contending with natural disasters and enemies. The game
                    requires strategic planning and management skills for survival and prosperity,
                    offering an immersive experience for simulation and strategy game enthusiasts
                    while exploring Ancient Egyptian culture and history.`}
                />

                <GameCard img="/img/duskers.jpg" name="Duskers"
                    plataform={plataform.pc}
                    type={"Strategy > City-builder > Management and Thematic"} date={"5 February 2019"}
                    description={`Rise of Industry is a business simulation and strategy game set in the
                    early 20th century. Players build and manage their empire by producing various products,
                    controlling transportation methods, and utilizing marketing and public relations tools.
                    The game features procedurally generated worlds that adapt to the player's style of play
                    and can be played in multiplayer mode. Rise of Industry offers an accessible, but deep
                    and complex experience for players of all levels.`}
                />

                <GameCard img="/img/rise.jpg" name="Rise of Industry"
                    plataform={plataform.pc}
                    type={"Strategy "} date={"18 May 2016"}
                    description={`Duskers is a survival game where players take on the role of a drone pilot
                    in an abandoned universe, searching for resources and parts to stay alive. The game
                    focuses on exploration, adaptation, and survival, forcing players to use a command-line
                    interface to operate their ship's various systems and navigate a procedurally generated
                    universe. Players must be strategic when encountering enemies and other ships. Duskers
                    offers a unique and challenging experience, with a focus on survival and strategy.`}
                />
            </div>
            <Footer />
        </main >
    )
}
