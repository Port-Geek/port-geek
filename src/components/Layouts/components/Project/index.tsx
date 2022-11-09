import { Dispatch, SetStateAction } from "react";
import { iButtons, ProjectStyled } from "./style";

interface IProject extends iButtons {
  deployLink: string;
  repositoryLink: string;
  projectDescription: string;
  projectImg: string;
  toggleMenu: Dispatch<SetStateAction<boolean>>;
}

export const Project = ({
  padding,
  fontSize,
  color,
  bgColor,
  borderColor,
  deployLink,
  repositoryLink,
  projectDescription,
  titleSize,
  projectImg,
  toggleMenu
}: IProject) => {
  return (
    <ProjectStyled
      padding={padding}
      fontSize={fontSize}
      titleSize={titleSize}
      color={color}
      bgColor={bgColor}
      borderColor={borderColor}
      className="Container__Project"
    >
      <h2 className="Project__Title">Projeto Principal</h2>
      <div className="Project__Flex--Box">
        <div className="ProjectImage__Box">
          <figure>
            <img src={projectImg} alt="Imagem do projeto" />
          </figure>
        </div>
        <div className="Buttons__Box">
          <a 
            href={deployLink} 
            target="_blank" 
            rel="noreferrer"
          >Deploy do projeto</a>
          <a 
            href={repositoryLink} 
            target="_blank" 
            rel="noreferrer"
          >Repositório do projeto</a>
          <button 
            type="button"
            onClick={() => {toggleMenu(true)}}
          >Descrição do projeto</button>
        </div>
      </div>
    </ProjectStyled>
  );
};
