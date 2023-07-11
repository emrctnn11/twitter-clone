import Form from "@/components/Form";
import Header from "../components/layout/Header";
import PostFeed from "@/components/posts/PostFeed";

export default function Home() {
  return (
    <>
      <Header showBackArrow label="Home" />
      <Form placeholder="What@s happening?" />
      <PostFeed />
    </>
  );
}
