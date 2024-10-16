/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import envelope from "./../../../public/emailEnvelope.svg";
import lock from "./../../../public/passwordKeylock.svg";
import { useEffect, useState } from "react";
import Spinner from "@/app/components/Spinner";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

type Credentials = {
  email: string;
  password: string;
  confirmPassword: string;
};

const CreateAccountForm = () => {
  const [isCredentialValid, setCredentialValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState("Try Again");
  const [loading, setLoading] = useState(false);
  const [credentials, setCredentials] = useState<Credentials>({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const router = useRouter();

  useEffect(() => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
    setIsPasswordValid(passwordRegex.test(credentials.password));
  }, [credentials.password]);

  useEffect(() => {
    if (
      credentials.email &&
      isPasswordValid &&
      credentials.password === credentials.confirmPassword
    ) {
      setCredentialValid(true);
    } else if (
      credentials.email === "" ||
      credentials.password === "" ||
      credentials.confirmPassword === ""
    ) {
      setCredentialValid(false);
    } else setCredentialValid(false);
  }, [credentials, isPasswordValid]);

  const handleCredChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setError(false);
    const { name, value } = e.target;
    const sanitizedValue = value.replace(/[:;/\,|"'`]/g, "");
    setCredentials((prevValues) => ({ ...prevValues, [name]: sanitizedValue }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorText("Try Again");
    const email = credentials.email;
    const password = credentials.password;

    try {
      const res = await axios.post("/api/auth/register", { email, password });

      if (res.status === 201) {
        toast.success(
          "Account created successfully! Please login to continue."
        );
        router.push("/");

        setLoading(false);
      } else if (res.status === 400) {
        setError(true);
        setErrorText("This user already exists");

        setLoading(false);
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error?.response?.data.error);
      setError(true);
      setLoading(false);
    }
  };

  return (
    <form className="inputElements" onSubmit={handleSubmit}>
      <div className="credentialsInputContainer">
        <label htmlFor="emailInput" className="credentialInputContainer">
          <p className={`labelText ${error && `error`}`}>Email address</p>
          <div
            className={`credentialInputElementContainer ${error && `error`}`}
          >
            <Image width={16} height={16} src={envelope} alt="envelope" />
            <input
              autoFocus
              onChange={handleCredChange}
              value={credentials.email}
              className="credentialInputElement"
              id="emailInput"
              type="email"
              pattern={`[^"'\`]*`}
              name="email"
              placeholder="e.g. alex@email.com"
            />
            <p className={`${error && `errorText`} ${!error && `hidden`}`}>
              {errorText}
            </p>
          </div>
        </label>
      </div>
      <div className="credentialInputContainer">
        <label htmlFor="passwordInput" className="credentialInputContainer">
          <p className={`labelText ${error && `error`}`}>Create Password</p>
          <div
            className={`credentialInputElementContainer ${error && `error`}`}
          >
            <Image width={16} height={16} src={lock} alt="padlock" />
            <input
              onChange={handleCredChange}
              value={credentials.password}
              className="credentialInputElement"
              id="passwordInput"
              type="password"
              pattern={`[^"'\`]*`}
              name="password"
              placeholder="At least 8 characters"
            />
            <p className={`${error && `errorText`} ${!error && `hidden`}`}>
              {errorText}
            </p>
          </div>
        </label>
      </div>
      <div className="credentialInputContainer">
        <label htmlFor="passwordInput" className="credentialInputContainer">
          <p className={`labelText ${error && `error`}`}>Confirm Password</p>
          <div
            className={`credentialInputElementContainer ${error && `error`}`}
          >
            <Image width={16} height={16} src={lock} alt="padlock" />
            <input
              onChange={handleCredChange}
              value={credentials.confirmPassword}
              className="credentialInputElement"
              id="passwordInput"
              type="password"
              pattern={`[^"'\`]*`}
              name="confirmPassword"
              placeholder="At least 8 characters"
            />
            <p className={`${error && `errorText`} ${!error && `hidden`}`}>
              {errorText}
            </p>
          </div>
        </label>
      </div>
      <div className="passwordValidityText">
        <p className={`${isCredentialValid === false ? `error` : ``}`}>
          Password must contain at least 8 characters, one upper case, one lower
          case, one number, and one special character.
        </p>
      </div>

      <div className="loginButtonContainer">
        <button
          type="submit"
          disabled={!isCredentialValid}
          className={`loginButton ${!isCredentialValid && "disabled"}`}
        >
          {loading ? <Spinner color={"white"} /> : "Create Account"}
        </button>
      </div>
      <div className="redirectLinkContainer">
        <p className="redirectLinkText">
          Already have an account?{" "}
          <span className="purpleText">
            <a href="/">Login</a>
          </span>
        </p>
      </div>
    </form>
  );
};

export default CreateAccountForm;
