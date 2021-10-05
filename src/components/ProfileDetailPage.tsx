import React from "react";
import { useParams } from "react-router-dom";

type QuizParams = {
  id?: string,
  username?:string,
};

export function ProfileDetailPage() {
  const { username } = useParams<QuizParams>();
  return (
    <div>
      <h1>Profile Page for {username}!</h1>
    </div>
  );
}