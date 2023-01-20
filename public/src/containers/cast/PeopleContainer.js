import React from "react";
import { PersonCard } from "../../components/cards/PersonCard";

export const PeopleContainer = ({ cast }) => {
  //show only the first 12 actors
  let i = 0;
  return (
    <div className="container">
      <div className="row">
        {cast.slice(0, 12).map((person) => {
          return (
            <div className="col-12 col-lg-6" key={i++}>
              <PersonCard
                key={person.id}
                id={person.id}
                photoPath={person.profile_path}
                name={person.name}
                character={person.character}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
