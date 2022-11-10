import { Container, Contem, Header, Main, Form } from "./style";
import { MdOutlineClose } from "react-icons/md";
import { useRef, useContext, useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { InputComponent, PasswordInputComponent } from "../Inputs";
import { ButtonComponent } from "../Buttons";
import { UserContext } from "../../contexts/userContext";
import { iRegisterData } from "../../services/postRegister";
import { useTranslation } from "react-i18next";
import * as yup from "yup";

interface iModal {
  setModal: (state: boolean) => void;
}

export function Modal({ setModal }: iModal) {
  const { t } = useTranslation();
  const { handleRegister, emaiDefault, isOpenModalRegister } =
    useContext(UserContext);
  const minimoTres = t("The name needs at least 3 digits!");
  const error = t("Required field!");
  const errorMensage = t("Invalid email!");
  const minimoOito = t("The password must contain at least 8 digits!");
  const errorCapitalLetter = t(
    "The password must contain at least one capital letter"
  );
  const errorEspecialCaracter = t(
    "The password must contain at least one special character"
  );
  const errorNumbers = t("The password must contain at least one number");
  const senhasIguais = t("Passwords are not the same!");
  const registerSchema = yup.object().shape({
    name: yup.string().min(3, minimoTres).required(error),
    email: yup.string().email(errorMensage).required(error),
    password: yup
      .string()
      .min(8, minimoOito)
      .matches(/[A-Z]/g, errorCapitalLetter)
      .matches(/(\W)|(_)/g, errorEspecialCaracter)
      .matches(/[\d]/g, errorNumbers)
      .required(error),
    confirmPassword: yup.string().oneOf([yup.ref("password")], senhasIguais),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterData>({
    resolver: yupResolver(registerSchema),
    defaultValues: { email: emaiDefault },
  });
  const modalRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    function handleOutClick(event: any) {
      const value = modalRef?.current;
      if (value && !value.contains(event.target)) {
        setModal(false);
      }
    }
    document.addEventListener("mousedown", handleOutClick);
    return () => {
      document.removeEventListener("mousedown", handleOutClick);
    };
  }, []);

  if (!isOpenModalRegister) {
    return null;
  }

  return (
    <Container>
      <Contem ref={modalRef}>
        <Header>
          <h1>SignUp</h1>
          <MdOutlineClose onClick={() => setModal(false)} />
        </Header>

        <Main>
          <Form onSubmit={handleSubmit(handleRegister)}>
            <InputComponent
              labelRefer="Name"
              labelText={t("Name")}
              placeholder={t("Enter your name")}
              autoComplete="username"
              register={register}
              registerkey={"name"}
              color={errors.name ? "color-secondary" : "color-primary"}
            />
            {errors.name && <p className="error">{errors.name?.message}</p>}

            <InputComponent
              labelRefer="email"
              labelText="Email"
              placeholder={t("Enter your email")}
              autoComplete="email"
              register={register}
              registerkey={"email"}
              color={errors.email ? "color-secondary" : "color-primary"}
            />
            {errors.email && <p className="error">{errors.email?.message}</p>}

            <PasswordInputComponent
              labelRefer="password"
              labelText={t("Password")}
              placeholder={t("Enter your password")}
              autoComplete="new-password"
              register={register}
              registerkey={"password"}
              color={errors.password ? "color-secondary" : "color-primary"}
            />
            {errors.password && (
              <p className="error">{errors.password?.message}</p>
            )}

            <PasswordInputComponent
              labelRefer="Confirm Password"
              labelText={t("Confirm password")}
              placeholder={t("Enter your password")}
              autoComplete="new-password"
              register={register}
              registerkey={"confirmPassword"}
              color={
                errors.confirmPassword ? "color-secondary" : "color-primary"
              }
            />
            {errors.confirmPassword && (
              <p className="error">{errors.confirmPassword?.message}</p>
            )}

            <ButtonComponent
              type="submit"
              backgroundcolor={"var(--color-grey-3)"}
              lettercolor={"var(--color-white-mode)"}
              hovercolor={"var(--color-grey-2)"}
            >
              Submit
            </ButtonComponent>
          </Form>
        </Main>
      </Contem>
    </Container>
  );
}
