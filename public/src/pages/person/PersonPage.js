import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPeople } from "../../controllers/api";
import { Heading } from "../../components/heading/Heading";
import { MediaContainer } from "../../containers/media/MediaContainer";
import { SectionTitle } from "../../components/section/SectionTitle";
import { Text } from "../../components/text/Text";
import { CreditsList } from "../../containers/creditsList/CreditsList";

export const PersonPage = () => {
  const { id } = useParams();
  const [person, setPerson] = useState(null);
  const [credits, setCredits] = useState(null);

  useEffect(() => {
    async function getPersonData() {
      const personData = await getPeople(id);
      setPerson(personData);
      setCredits(personData.combined_credits);
    }
    getPersonData();
  }, []);

  return (
    <div className="container">
      {person ? (
        <main>
          <Heading name={person.name} />
          <MediaContainer
            posterPath={person.profile_path}
            videoKey={""}
            alt={person.name}
            imgSize="medium"
            imgStyles={"poster-img"}
          />
          <p>Known for department: {person.known_for_department}</p>

          <section>
            <SectionTitle name={"Biography"} />
            <article>
              <p>
                Born: <i className="info-values">{person.birthday} </i>
              </p>
              <i> {person.place_of_birth}</i>
            </article>

            <article className="row my-3">
              <Text text={person.biography} />
            </article>
          </section>

          <section>
            <SectionTitle name="Cast" />
            <CreditsList credits={credits.cast} />

          </section>
        </main>
      ) : (
        ""
      )}
    </div>
  );
};

//     return (
//       <div className="container">
//         {person ? (
//           <div className="container">
//             <Heading name={person.name} />

//             <Poster path={person.profile_path} alt={person.name} />

//             <div className="row py-2">
//               <p>
//                 <i>
//                   Known for department:{" "}
//                   <span className="info-values">
//                     {person.known_for_department}
//                   </span>
//                 </i>{" "}
//               </p>
//             </div>

//             <SectionTitle name={"Biography"} />

//             <div className="row">
//               <div className="col">
//                 <p>
//                   Place of Birth: <i>{person.place_of_birth}</i>
//                 </p>
//                 <p>
//                   Born at: <i>{person.birthday}</i>
//                 </p>
//               </div>
//             </div>

//             <div className="row">
//               <p>{person.biography}</p>
//             </div>

//             <SectionTitle name={"Credits"} />

//             <ul className="list-group list-group-flush">
//               {credits.cast.map((credit) => {
//                 return (
//                   <CreditsList
//                     key={credit.id}
//                     id={credit.id}
//                     title={credit.title}
//                     url={`${posterBaseURLSmall}${credit.poster_path}`}
//                     type={credit.media_type}
//                     character={credit.character}
//                     year={credit.release_date}
//                   />
//                 );
//               })}
//             </ul>
//           </div>
//         ) : (
//           <p>loading</p>
//         )}
//       </div>
//     );
//   };
