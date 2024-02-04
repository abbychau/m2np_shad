import { useState } from "react";
import { useAuthToken } from "./useHooks"

import FirebaseApp from "./lib/firebaseApp"
console.log(FirebaseApp.name)

import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";

const provider = new GithubAuthProvider();
provider.addScope('read:user');
provider.addScope('user:email');
const auth = getAuth();


import { Icons } from "@/components/icons"
import { Button } from "@/registry/new-york/ui/button"
import { Input } from "@/registry/new-york/ui/input"
import { Label } from "@/registry/new-york/ui/label"
//axios
import axios from 'axios';
import { Metadata } from "next"
import { cn } from "@/lib/utils"
import { DialogLink } from "./components/dialogLink";
import { TermsOfService } from "./data";
export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
}


export default function LoginPage() {
  return (
    <>
      <div className="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">

        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            M-&gt;NP
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;今後的遊戲史上或許無論如何也做不出，也不會再做出這樣的遊戲了。&rdquo;
              </p>
              <footer className="text-sm">
                &mdash; <cite>櫻井政博</cite>
              </footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Login / Create an account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email and password to continue
              </p>
            </div>
            <UserAuthForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <DialogLink
                title="Terms of Service"
                text="Terms of Service"
                content={TermsOfService}
              />
              {" "}
              and{" "}
              <DialogLink
                title="Privacy Policy"
                text="Privacy Policy"
                content={TermsOfService}
              />
              .
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const [_authToken, setAuthToken] = useAuthToken();
  const [username, _setUsername] = useState('');
  const [password, setPassword] = useState('');
  const login = async () => {

    setIsLoading(true)
    axios.post('http://localhost:3000/entrance/login', {
      username: username,
      password: password
    }).then((response) => {
      console.log(response.data);
      setAuthToken(response.data.token);
    }).catch((error) => {
      console.log(error);
      setAuthToken("2222");
    }).finally(() => {
      setIsLoading(false)
    });
  }
  const onKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      login()
    }
  }

  const githubLogin = (event: React.SyntheticEvent) => {
    event.preventDefault()
    setIsLoading(true)

    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
  
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...

      console.log(user)
      console.log(token)

      //TODO axios to entrance/authWithGithubToken and pass user info and token to backend, get token back
      axios.post('http://localhost:3000/entrance/authWithGithubToken', {
        token: token,
        user: user
      }).then((response) => {
        console.log(response.data);
        setAuthToken(response.data.token);
      }).catch((error) => {
        console.log(error);
      })


      
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GithubAuthProvider.credentialFromError(error);
      // ...

      console.log(error)
    }).finally(() => {
      setIsLoading(false)
    });
    
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <div className="grid gap-2">
        <div className="grid gap-1">
          <Label className="sr-only" htmlFor="email">
            Email
          </Label>
          <Input
            id="email"
            placeholder="name@example.com"
            type="email"
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect="off"
            disabled={isLoading}
            onChange={
              (e: any) => {
                setPassword(e.target.value)
              }}
            onKeyDown={onKeyDown}
          />
          <Input
            id="password"
            placeholder="password"
            type="password"
            autoCapitalize="none"
            autoComplete="password"
            autoCorrect="off"
            disabled={isLoading}
            onChange={
              (e: any) => {
                setPassword(e.target.value)
              }}
            onKeyDown={onKeyDown}
          />
        </div>
        <Button disabled={isLoading} onClick={login}>
          {isLoading && (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          )}
          Sign In with Email
        </Button>
      </div>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button variant="outline" type="button" disabled={isLoading} onClick={
        githubLogin
      } >
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.gitHub className="mr-2 h-4 w-4" />
        )}{" "}
        GitHub
      </Button>
    </div>
  )
}
