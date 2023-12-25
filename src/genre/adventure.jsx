import { NavBar, Footer } from "../components"
import GameCard from "./components/game-card"
import { GenreNav } from "./components/genre-nav"
import { Introduction } from "./components/introduction"
import { plataform } from "./components/plataforms"

export const Adventure = () => {
    return (
        <main>
            <div className="h-full p-2 bg-slate-900">
                <NavBar />
                <GenreNav />

                <Introduction title="ADVENTURE GAMES">
                    An adventure game is a type of video game genre that typically involves
                    the player taking on the role of a protagonist, often a character in a
                    story-driven narrative. The gameplay usually revolves around exploration,
                    puzzle-solving, and interacting with non-playable characters (NPCs) to
                    advance the plot. Adventure games can take place in a variety of settings,
                    such as historical or fantasy worlds, and may include elements of mystery,
                    horror, or humor. Often, the games rely on immersive storytelling to keep
                    players engaged, with the focus being more on the journey than the destination.
                    The challenge of an adventure game often comes from deciphering clues and solving
                    puzzles, rather than combat or action sequences.
                </Introduction>

                <GameCard img="/img/sherlock-cover.jpg" name="Sherlock Holmes: The Awakened - Remake"
                    plataform={[plataform.pc, plataform.ps, plataform.xbox, plataform.nintendo]}
                    type={"Adventure "} date={"11 April 2023"}
                    description={`Sherlock Holmes: The Awakened - Remake is a completely rebuilt
                    version of the mystery-adventure game with supernatural elements originally
                    released in 2008 by Frogwares. The game draws inspiration from the works of
                    Arthur Conan Doyle and H.P. Lovecraft. The new version features updated
                    graphics and animations, an expanded and connected story to Chapter One,
                    numerous side quests and new gameplay mechanics, as well as a unique approach
                    to sanity mechanics.`}
                />

                <GameCard img="/img/neon-cover.jpg" name="Neon Blood"
                    plataform={[plataform.pc, plataform.ps, plataform.nintendo]}
                    type={"Adventure > combat"} date={"31 October 2023"}
                    description={`Neon Blood is a video game that combines 2.5D graphic adventure
                    mechanics with JRPG combat, all set within a cyberpunk and science-fiction universe.
                    The game follows the story of Axel, whose journey will be shaped by the relationships
                    he forms throughout his adventure, revealing the different realities of the two cities
                    he explores. The game features a large metropolis filled with secrets to uncover,
                    a complete dialogue system based on detective work, and turn-based combat. These
                    elements come together to create a unique and engaging gameplay experience.`}
                />

                <GameCard img="/img/killer-cover.jpg" name="Killer Frequency"
                    plataform={plataform.pc}
                    type={"Adventure > Virtual Reality"} date={"1 June 2023"}
                    description={`Killer Frequency is a first-person adventure and horror video game
                    that puts players in the shoes of Forrest Nash, a radio host of a late-night show.
                    Throughout the game, players must solve puzzles, save lives, and control the switchboard
                    while listening to retro 80s tunes on a jukebox. "It's not Friday the 13th, but Halloween
                    is just around the corner and you know this job is no child's play." The game creates a
                    suspenseful and immersive experience that will keep players on the edge of their seats
                    as they uncover the mysteries and horrors lurking in the shadows.`}
                />
            </div>
            <Footer />
        </main >
    )
}
