import { useState } from "react";
import logo from "../assets/images/logo-universal.png";
import { Greet } from "../../wailsjs/go/main/App";
import { createFileRoute } from "@tanstack/react-router";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  const [resultText, setResultText] = useState(
    "Please enter your name below 👇"
  );
  const [name, setName] = useState("");
  const updateName = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value); // Added proper type for event
  const updateResultText = (result: string) => setResultText(result);

  async function greet() {
    const result = await Greet(name);
    updateResultText(result);
  }

  return (
    <div
      id="HomeComponent"
      className="min-h-screen flex flex-col items-center justify-center p-4 bg-background text-foreground"
    >
      <img src={logo} id="logo" alt="logo" className="h-64 w-auto mb-4" />
      <div id="result" className="result mb-4 p-2 text-center break-words">
        {resultText}
      </div>
      <div id="input" className="input-box flex space-x-2 items-center">
        <Input
          id="name"
          className="input"
          onChange={updateName}
          autoComplete="off"
          name="input"
          type="text"
          value={name}
          placeholder="Enter your name..."
        />
        <Button onClick={greet}>Greet</Button>
      </div>
    </div>
  );
}
