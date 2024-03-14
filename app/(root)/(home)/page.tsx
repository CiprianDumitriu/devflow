import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <>
      <div>
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Link href="/ask-question">
          <Button>Ask a Question</Button>
        </Link>
      </div>
    </>
  );
};

export default Home;
