import usePost from "@/hooks/usePost";
import { useRouter } from "next/router";

const PostView = () => {
  const router = useRouter();
  const { postId } = router.query;

  const { data: fetchedPost } = usePost(postId as string);

  return <div>Post View</div>;
};

export default PostView;
