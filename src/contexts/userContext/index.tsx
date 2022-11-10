import { createContext, useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { successToast, errorToast } from "../../toast/toast";
import { api, token } from "../../services/api";
import { postLogin, iUserLogin } from "../../services/postLogin";
import { postRegister, iRegisterData } from "../../services/postRegister";
import { iAPIData } from "./../../services/getProfile";
import { LoadingContext } from "../LoadingContext";
import { useTranslation } from "react-i18next";

export const UserContext = createContext<iUserContext>({} as iUserContext);

interface iUserContext {
  setUser: React.Dispatch<React.SetStateAction<iAPIData | null>>;
  user: iAPIData | null;
  handleLogin: (data: iUserLogin) => void;
  handleRegister: (data: iRegisterData) => void;
  emaiDefault: string;
  setEmailDefault: (state: string) => void;
  isOpenModalLogin: boolean;
  isOpenModalRegister: boolean;
  setIsOpenModalLogin: (value: boolean) => void;
  setIsOpenModalRegister: (value: boolean) => void;
}

export function UserProvider(): JSX.Element {
  const { t } = useTranslation();
  const [user, setUser] = useState<iAPIData | null>(null);
  const [emaiDefault, setEmailDefault] = useState<string>("");
  const [isOpenModalLogin, setIsOpenModalLogin] = useState<boolean>(false);
  const [isOpenModalRegister, setIsOpenModalRegister] =
    useState<boolean>(false);
  const { loading, setLoading } = useContext(LoadingContext);
  const navigate = useNavigate();

  const handleRegister = async (data: iRegisterData) => {
    delete data.confirmPassword;
    setLoading(true);
    try {
      await postRegister(data);

      successToast(t("Successfully registered!"));

      setIsOpenModalRegister(false);
      setIsOpenModalLogin(true);
    } catch (error: any) {
      console.error(error);
      const message: string = error.response.data;
      errorToast(t(`${message}!`));
    }
    setLoading(false);
  };

  const handleLogin = async (data: iUserLogin) => {
    setLoading(true);
    try {
      const response = await postLogin(data);
      successToast(t("Login successfully!"));
      setUser(response.data.user);
      localStorage.setItem("@PortGeek:token", response.data.accessToken);
      localStorage.setItem("@PortGeek:id", response.data.user.id);

      setIsOpenModalLogin(false);

      api.defaults.headers.common.authorization = `Bearer ${response.data.accessToken}`;
      navigate("/dashboard");
    } catch (error: any) {
      console.error(error);
      errorToast(t("Incorrect Credentials!"));
    }
    setLoading(false);
  };

  useEffect(() => {
    async function getUser() {
      if (token) {
        setLoading(true);
        try {
          const idUser = Number(localStorage.getItem("@PortGeek:id"));

          api.defaults.headers.common.authorization = `Bearer ${token}`;

          const response = await api.get(`/users/${idUser}`);

          setUser(response.data);
        } catch (error) {
          localStorage.removeItem("@PortGeek:token");
          localStorage.removeItem("@PortGeek:id");
          console.error(error);
          navigate("/");
        }
      }
      navigate("/");
      setLoading(false);
    }
    getUser();
  }, []);

  return (
    <UserContext.Provider
      value={{
        setUser,
        user,
        handleLogin,
        handleRegister,
        setEmailDefault,
        emaiDefault,
        isOpenModalLogin,
        isOpenModalRegister,
        setIsOpenModalLogin,
        setIsOpenModalRegister,
      }}
    >
      <Outlet />
    </UserContext.Provider>
  );
}
