import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import authService from "@/AppwriteConfig/AuthConfig";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "@/store/ProductSlice";
import { useState } from "react";

export default function GetStarted() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, SetError] = useState(null);
  const { register, handleSubmit } = useForm();

  const handleLogin = async (data) => {
    console.log("Form data: ", data); // Log form data
    SetError(null);
    try {
      const session = await authService.login(data);
      if (session) {
        const response = await authService.getCurrentUser();
        if (response) {
          console.log(response);
          dispatch(login(response));
          navigate("/cart");
        }
      }
    } catch (error) {
      console.log(error);
      SetError(error.message);
    }
  };

  const handleSignin = async (data) => {
    try {
      SetError(null);
      const session = await authService.createAccount(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(login(userData));
          navigate("/cart");
        }
      }
    } catch (error) {
      console.log(error);
      SetError(error.message);
    }
  };

  const handleOauth = async () => {
    SetError(null);
    // Initiate the OAuth process and handle the session retrieval in one go
    const session = await authService.OauthAccount();
    if (session) {
      console.log(session);
      dispatch(login(session.providerUid));
    }
  };

  return (
    <div className="flex flex-row items-center justify-center min-h-fit bg-slate-200 dark:bg-slate-600 p-4">
      <Tabs defaultValue="Signup" className="w-full max-w-md">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="Signup">Signup</TabsTrigger>
          <TabsTrigger value="Login">Login</TabsTrigger>
        </TabsList>
        <TabsContent value="Login">
          <Card>
            <CardHeader>
              <CardTitle>Login to existing account</CardTitle>
              {error && (
                <div>
                  <p className="text-center text-red-700">{error}</p>
                </div>
              )}
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  {...register("email", {
                    required: true,
                    validate: {
                      matchPatern: (value) =>
                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                          value,
                        ) || "Email address must be a valid address",
                    },
                  })}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  {...register("password", {
                    required: true,
                  })}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button
                className=" w-full  bg-blue-500 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-700"
                onClick={handleSubmit(handleLogin)}
              >
                Login
              </Button>
            </CardFooter>
            <CardFooter>
              <Button
                variant="outline"
                className="w-full text-white bg-green-600 hover:bg-green-700"
                onClick={handleOauth}
              >
                <FcGoogle className="mr-2" />
                Login with Google
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="Signup">
          <Card>
            <CardHeader>
              <CardTitle>Create new account</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Choose a username"
                  {...register("name", {
                    required: false,
                  })}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  {...register("email", {
                    required: true,
                    validate: {
                      matchPatern: (value) =>
                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                          value,
                        ) || "Email address must be a valid address",
                    },
                  })}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Create a password"
                  {...register("password", {
                    required: true,
                  })}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full  bg-blue-500 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-700"
                onClick={handleSubmit(handleSignin)}
              >
                Signup
              </Button>
            </CardFooter>
            <CardFooter>
              <Button
                variant="outline"
                className="w-full text-white bg-green-600 hover:bg-green-700"
                onClick={handleOauth}
              >
                <FcGoogle className="mr-2" />
                Signup with Google
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
