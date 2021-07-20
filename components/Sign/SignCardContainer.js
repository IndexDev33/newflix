import styled from "styled-components";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: ${(props) =>
    props.signUpCard
      ? "1px solid rgba(0, 0, 0, 0.1)"
      : "1px solid rgba(255, 255, 255, 0.4)"};
  border-top: ${(props) =>
    props.signUpCard ? "1px solid rgba(0, 0, 0, 0.1)" : "unset"};
  min-height: calc(100vh - 64px);
  min-height: 100vh;

  @media only screen and (min-width: 650px) {
    background: ${(props) => props.stylesMainBg};
    background-position: center;
    background-size: cover;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 5%;
  max-width: 450px;
  background-color: ${(props) => (props.signUpCard ? "#fff" : "#000")};
  min-height: 660px;

  @media only screen and (min-width: 650px) {
    padding: 60px 68px 40px;
  }
`;

const Form = styled.form`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TitleForm = styled.h2`
  text-align: left;
  width: 100%;
  font-size: 2.3rem;
`;

export default function SignCardContainer() {
  const { pathname } = useRouter();
  const stylesMainBg =
    pathname === "/signup"
      ? "transparent"
      : `linear-gradient(to top, rgba(0, 0, 0, 0.8) 0,  rgba(0, 0, 0, 0) 40%,  rgba(0, 0, 0, 0) 75%,  rgba(0, 0, 0, 0.8) 100%),url('https://cdn.hipwallpaper.com/i/98/21/dUyCkp.jpg')`;

  return (
    <Wrapper stylesMainBg={stylesMainBg} signUpCard={signUpCard}>
      <Container signUpCard={signUpCard}>
        {signUpCard && <Step>Unique Step</Step>}
        <TitleForm>{title}</TitleForm>
        <Form>
          {/* <Form onSubmit={() => submitHandler(event)}> */}
          {signError === "auth/wrong-password" && (
            <SignError>
              Incorrect password. Please try again or you can
              <Link href="#"> reset your password.</Link>
            </SignError>
          )}
          {signError === "auth/user-not-found" && (
            <SignError>
              Sorry, we can't find an account with this email address. Please
              try again or
              <Link href="/signup"> create a new account.</Link>
            </SignError>
          )}
          {signError === "auth/email-already-in-use" && (
            <SignError>
              Looks like that account already exists.{" "}
              <Link href="/signin">Sign into that account</Link>
            </SignError>
          )}
          <InputField placeholder="Email or phone number" type="email" />
          <InputField placeholder="Password" type="password" />
          {/* <Link href="#">Forgot your password?</Link> */}
          <Btn onClick={submitHandler} minus={true}>
            {signUpCard ? "Next" : "Sign In"}
          </Btn>
          {!signUpCard && (
            <RememberMejs onRemember={() => setRemember((prev) => !prev)} />
          )}
        </Form>
      </Container>
    </Wrapper>
  );
}
