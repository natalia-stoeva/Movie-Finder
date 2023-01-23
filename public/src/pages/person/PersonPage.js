import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPeople } from "../../controllers/api";
import { Heading } from "../../components/heading/Heading";
import { MediaContainer } from "../../containers/media/MediaContainer";
import { SectionTitle } from "../../components/section/SectionTitle";
import { Text } from "../../components/text/Text";
import { TextAndInfo } from "../../components/text/TextAndInfo";
import { CreditsList } from "../../containers/creditsList/CreditsList";
const moment = require("moment");

export const PersonPage = () => {
  const { id } = useParams();
  const [person, setPerson] = useState(null);
  const [credits, setCredits] = useState(null);
  const [birthday, setBirhtday] = useState(null);
  const [deathday, setDeathday] = useState(null);

  useEffect(() => {
    async function getPersonData() {
      const personData = await getPeople(id);
      setPerson(personData);
      setCredits(personData.combined_credits);
      setBirhtday(moment(personData.birthday).format("MMM DD, YYYY"));

      if (personData.deathday) {
        setDeathday(moment(personData.deathday).format("MMM DD, YYYY"));
      }
    }
    getPersonData();
  }, []);

  console.log(birthday);

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
          <p>{person.known_for_department}</p>

          <section>
            <SectionTitle name={"Biography"} />
            <article>
              <TextAndInfo
                categorie={"Born"}
                value={`${birthday}, ${person.place_of_birth}`}
              />

              {deathday && <TextAndInfo categorie={"Died"} value={deathday} />}
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
