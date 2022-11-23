import { useState } from "react";
import { ILayout } from "../../../pages/Layout";
import { About } from "../components/About";
import { Contacts } from "../components/Contacts";
import { Experience } from "../components/Experience";
import { Formation } from "../components/Formation";
import { ModalDescription } from "../components/ModalDescription";
import { Project } from "../components/Project";
import { Skills } from "../components/Skills";
import { UserIcon } from "../components/UserIcon";
import { UserInfos } from "../components/UserInfos";
import { ContainerThirthLayout } from "./style";

export const ThirthLayout = ({ portfInfos }: ILayout) => {
  const { user_profile, adress, project } = portfInfos;
  const [isSeeingModal, setIsSeeingModal] = useState<boolean>(false);

  return (
    <ContainerThirthLayout>
      {isSeeingModal ? (
        <ModalDescription
          projectDescription={project.project_description}
          bgColor={"--colorPrimaryL3"}
          color={"--titleLayout"}
          borderColor={"--colorSecundaryL3"}
          toggleMenu={setIsSeeingModal}
        />
      ) : null}
      <header>
        <UserIcon 
          width={8} 
          height={8} 
          borderR={50} 
          border={"borderUserIcon"}
          userImage={user_profile.userImage_url}
        />
        <UserInfos
          fontSize={1.5}
          fontSizeP={1}
          color={"red"}
          personName={user_profile.name}
          birthDate={user_profile.birthDate}
          age={user_profile.age}
          adress={adress}
        />
        <section className="Section__Header">
          <About
            fontSize={1.5}
            color={"--titleLayout"}
            fontSizeP={1}
            aboutYou={user_profile.aboutYou}
          />
          <div className="Division"></div>
          <Skills
            fontSize={1.5}
            color={"--titleLayout"}
            fontSizeP={1}
            skillDescription={user_profile.skills}
          />
        </section>
      </header>
      <main>
        <Contacts
          githubLink={user_profile.github_url}
          linkedInLink={user_profile.linkedin_url}
          userEmail={user_profile.email}
          phoneNumber={user_profile.telephone}
        />
        <section className="Section__Main">
          <Experience
            fontSize={1.5}
            color={"--colorPrimaryL3"}
            fontSizeP={1}
            experienceDescription={user_profile.experience}
          />
          <Formation
            fontSize={1.5}
            color={"--colorPrimaryL3"}
            fontSizeP={1}
            formationDescription={user_profile.training}
          />
          <Project
            padding={0.5}
            fontSize={0.875}
            titleSize={1.5}
            color={"--color-grey-0"}
            borderColor={"--colorPrimaryL3"}
            bgColor={"--colorPrimaryL3"}
            toggleMenu={setIsSeeingModal}
            deployLink={project.projectDeploy_url}
            repositoryLink={project.projectRepository_url}
            projectName={project.project_title}
            projectImg={project.projectImage_url}
          />
        </section>
      </main>
    </ContainerThirthLayout>
  );
};
