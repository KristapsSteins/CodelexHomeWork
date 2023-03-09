import NavBar from '../components/NavBar';


type Characters = {
  id: string
  name: string
  status: string
  species: string
  image: string
  location: Where
  episode: string
}

type Where = {
  name: string
  url: string
}

const About = ({ characters }: {characters: Characters[]}) => {
    if (!characters) return <h1>Loading...</h1>;
    return (
        <div className="container">
            <NavBar />
            <div>
                <h3>Rick and Morty is an American adult animated science-fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's nighttime programming block Adult Swim. It is distributed internationally by Warner Bros. Television Distribution. The series follows the misadventures of cynical mad scientist Rick Sanchez and his good-hearted but fretful grandson Morty Smith, who split their time between domestic life and interdimensional adventures that take place across an infinite number of realities, often travelling to other planets and dimensions through portals and on Rick's flying saucer. The general concept of Rick and Morty relies on two conflicting scenarios: domestic family drama, and an alcoholic grandfather dragging his grandson into hijinks.

Roiland voiced the eponymous characters, with Chris Parnell, Spencer Grammer, and Sarah Chalke voicing the rest of Rick and Morty's family. The series originated from an animated short parody film of Back to the Future created by Roiland for Channel 101, a short-film festival cofounded by Harmon. Since its debut, the series has received critical acclaim for its originality, creativity, and humor. It has been nominated for three Primetime Emmy Awards for Outstanding Animated Program and won the award in 2018 and 2020. The series has also received two Annie Awards. The series has several times been the most viewed television comedy for adults. The popularity of Rick and Morty has made it a hundred-million dollar merchandising and media franchise.

The sixth season premiered on September 4, 2022, and consists of ten episodes. A seventh season was confirmed as part of a long-term deal with Cartoon Network that ordered 70 new episodes, which renewed the series through to a tenth season. Adult Swim cut ties with Roiland in January 2023 amid allegations of abuse and announced it would be recasting his parts.</h3>
            </div>
        </div>
    );
};

export default About;