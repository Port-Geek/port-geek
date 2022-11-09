import { IAdress } from "../../../../requests/portfRequest";
import { iStyledInfos, UserInfosStyled } from "./style";

interface IUserInfos extends iStyledInfos{
  personName: string;
  birthDate: string;
  age: string;
  adress: IAdress;
}

export const UserInfos = ({ fontSize, color, fontSizeP, personName, birthDate, adress, age }: IUserInfos) => {
  return (
    <UserInfosStyled
      fontSize={fontSize}
      color={color}
      fontSizeP={fontSizeP}
      className={"Container__UserInfos"}
    >
      <div className="Header__Infos__User">
        <h1>{personName}</h1>
        <p>{birthDate}</p>
        <p>{`${age} anos`}</p>
      </div>
      <div className="Adress__Infos">
        <p>{adress.country}</p>
        <p>{adress.city}</p>
        <p>{adress.zipCode}</p>
      </div>
    </UserInfosStyled>
  );
};